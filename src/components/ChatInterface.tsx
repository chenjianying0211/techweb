import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Code, Image, HelpCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  onNewMessage?: (message: Message) => void;
}

const predefinedResponses: Record<string, string> = {
  '技術諮詢': '您好！我們提供多種技術服務，包括前端React/Vue框架開發、後端Node.js/Python解決方案、雲端架構設計等。請問您對哪方面特別感興趣？',
  '報價估算': '網站專案的報價通常根據需求複雜度、功能數量、設計規格和開發時程決定。基本的形象網站約台幣10-15萬起，功能性網站約20-40萬，企業系統則從50萬起。您想了解哪種類型的項目報價？',
  '案例調取': '我們有多個成功案例，包括金融科技、電商平台和企業管理系統。例如，我們為某金融集團開發的智能客服系統，將客戶等待時間減少65%。您想了解哪個行業的案例？'
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onNewMessage }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '您好！我是IfWinAI的AI助理，很高興為您提供服務。您可以向我諮詢技術問題、專案報價或查詢相關案例。',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = () => {
    if (!inputText.trim() && !selectedDemo) return;
    
    let content = inputText;
    
    // If a demo is selected, use the predefined response
    if (selectedDemo && !inputText) {
      content = selectedDemo;
    }
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setSelectedDemo(null);
    
    if (onNewMessage) {
      onNewMessage(userMessage);
    }
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      let responseContent = '我理解您的問題，讓我為您提供相關資訊...';
      
      // Check if we have a predefined response for this message
      if (predefinedResponses[content]) {
        responseContent = predefinedResponses[content];
      }
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      
      if (onNewMessage) {
        onNewMessage(aiResponse);
      }
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // Simulate voice recording ending after 3 seconds
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInputText('這是語音轉文字的測試輸入');
      }, 3000);
    }
  };
  
  const selectDemo = (demo: string) => {
    setSelectedDemo(demo);
  };
  
  return (
    <div className="flex flex-col h-full glass-panel">
      {/* Chat header */}
      <div className="border-b border-neonTurquoise/20 p-4">
        <h2 className="font-orbitron font-semibold text-lg text-neonTurquoise">AI 智能助手</h2>
        <p className="text-gray-400 text-sm">即時解答您的問題</p>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-xl p-3 ${
                message.role === 'user' 
                  ? 'bg-neonTurquoise/20 text-white rounded-tr-none' 
                  : 'bg-deepBlue/50 border border-neonTurquoise/20 text-gray-200 rounded-tl-none'
              }`}
            >
              <div>{message.content}</div>
              <div className="text-xs text-gray-400 mt-1 text-right">
                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Demo scenarios */}
      <div className="px-4 py-2 bg-deepBlue/30 border-t border-neonTurquoise/20">
        <p className="text-xs text-gray-400 mb-2">選擇演示場景:</p>
        <div className="flex flex-wrap gap-2">
          {Object.keys(predefinedResponses).map(demo => (
            <button 
              key={demo}
              onClick={() => selectDemo(demo)}
              className={`px-3 py-1 rounded-full text-xs border transition-all ${
                selectedDemo === demo
                  ? 'bg-neonTurquoise/20 text-neonTurquoise border-neonTurquoise'
                  : 'border-gray-600 text-gray-400 hover:border-neonTurquoise/50'
              }`}
            >
              {demo}
            </button>
          ))}
        </div>
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-neonTurquoise/20 bg-deepBlue/20">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="輸入訊息..."
              className="w-full bg-deepBlue/50 text-white rounded-lg border border-neonTurquoise/30 px-4 py-3 pr-12 focus:outline-none focus:border-neonTurquoise/70 resize-none"
              rows={1}
            />
            <div className="absolute right-2 top-2 flex items-center space-x-1">
              <button className="p-1 text-gray-400 hover:text-neonTurquoise transition-colors">
                <Code size={18} />
              </button>
              <button className="p-1 text-gray-400 hover:text-neonTurquoise transition-colors">
                <Image size={18} />
              </button>
            </div>
          </div>
          
          <button 
            onClick={toggleRecording}
            className={`p-3 rounded-full ${
              isRecording 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-deepBlue/60 text-gray-300 hover:bg-deepBlue hover:text-neonTurquoise'
            } transition-all`}
          >
            <Mic size={20} />
          </button>
          
          <button 
            onClick={handleSendMessage}
            className="p-3 rounded-full bg-neonTurquoise/80 text-deepBlue hover:bg-neonTurquoise transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
        
        {isRecording && (
          <div className="mt-2 text-center">
            <p className="text-red-400 text-sm animate-pulse">正在錄音... 請說出您的問題</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;