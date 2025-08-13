import React from 'react';
import ChatInterface from '../components/ChatInterface';
import LogicDiagram from '../components/LogicDiagram';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [diagramAnimate, setDiagramAnimate] = React.useState(false);
  
  const handleNewMessage = (message: Message) => {
    // Trigger diagram animation when a new message is received
    if (message.role === 'user') {
      setDiagramAnimate(true);
      
      // Reset animation after it completes
      setTimeout(() => {
        setDiagramAnimate(false);
      }, 7000);
    }
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="neon-text">AI對話助手</span>
            <span className="block mt-2">體驗智能交流</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            透過我們的AI助手，即時解答您的問題，展示我們的技術實力
          </p>
        </div>
        
        {/* Chat Interface */}
        <div className="glass-panel mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            <div className="border-r border-neonTurquoise/20">
              <ChatInterface onNewMessage={handleNewMessage} />
            </div>
            <div className="hidden lg:block">
              <LogicDiagram animate={diagramAnimate} />
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            AI助手<span className="neon-text">核心功能</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: '即時諮詢', 
                description: '隨時隨地解答您的技術問題，提供專業建議和解決方案。' 
              },
              { 
                title: '專案報價', 
                description: '根據您的需求，快速生成初步的專案評估和報價參考。' 
              },
              { 
                title: '案例查詢', 
                description: '快速找到與您需求相關的成功案例，了解我們的實力。' 
              },
              { 
                title: '多模態輸入', 
                description: '支援文字、語音多種輸入方式，讓溝通更加便捷。' 
              },
              { 
                title: '代碼示例', 
                description: '提供相關技術的代碼示例，幫助您更好理解實現方式。' 
              },
              { 
                title: '智能推薦', 
                description: '根據對話內容，智能推薦相關服務和解決方案。' 
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 hover:border-neonTurquoise/50 transition-all duration-300"
              >
                <h3 className="text-xl font-orbitron font-semibold mb-3 neon-text">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technology Behind */}
        <div className="glass-panel p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            <span className="neon-text">技術</span>解析
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-orbitron font-semibold mb-4">大型語言模型</h3>
              <p className="text-gray-300 mb-6">
                我們的AI助手基於最先進的大型語言模型，經過專業領域知識的微調，能夠理解複雜的技術問題，並提供準確、專業的解答。
              </p>
              
              <h3 className="text-xl font-orbitron font-semibold mb-4">自然語言處理</h3>
              <p className="text-gray-300">
                採用領先的NLP技術，精準識別用戶意圖，分析情感和上下文，實現更自然、流暢的人機對話體驗。
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-orbitron font-semibold mb-4">知識圖譜</h3>
              <p className="text-gray-300 mb-6">
                構建豐富的技術知識圖譜，將相關概念、方法和最佳實踐有機連接，為AI提供更全面的知識基礎。
              </p>
              
              <h3 className="text-xl font-orbitron font-semibold mb-4">持續學習</h3>
              <p className="text-gray-300">
                我們的AI系統能夠從每次對話中學習，不斷優化回答的準確性和相關性，提供越來越精準的服務。
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-orbitron font-bold mb-6">
            體驗只是開始，<span className="neon-text">實際合作創造更大價值</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            讓我們的專業團隊為您提供全方位的技術支持和服務
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="cyber-button text-lg">
              進一步了解
            </button>
            <button className="bg-transparent px-6 py-3 border border-gray-500 text-gray-300 rounded-md font-orbitron hover:bg-white/5 transition-colors">
              預約顧問
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;