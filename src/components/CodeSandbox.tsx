import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface CodeSandboxProps {
  initialCode: string;
  language: string;
}

const CodeSandbox: React.FC<CodeSandboxProps> = ({ initialCode, language }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('// 點擊執行查看結果');
  
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };
  
  const runCode = () => {
    try {
      // For demo purposes, just display the code
      // In a real implementation, you would use something like iframe sandboxes
      // or WebAssembly to actually run the code safely
      setOutput(`// 代碼已執行!\n\n/* 輸出結果：\n * 這是一個模擬的輸出\n * 在實際應用中，這裡會顯示代碼的真實執行結果\n */`);
      
      // Add a small animation on the run button
      const runButton = document.getElementById('run-code-button');
      if (runButton) {
        runButton.classList.add('scale-95', 'opacity-80');
        setTimeout(() => {
          runButton.classList.remove('scale-95', 'opacity-80');
        }, 150);
      }
    } catch (error) {
      setOutput(`// 錯誤：\n${error}`);
    }
  };
  
  return (
    <div className="rounded-lg overflow-hidden bg-deepBlue/50 border border-neonTurquoise/20">
      <div className="flex items-center justify-between bg-deepBlue px-4 py-2 border-b border-neonTurquoise/20">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs font-mono text-gray-400">{language} 沙盒</span>
        <button 
          id="run-code-button"
          onClick={runCode} 
          className="flex items-center space-x-1 bg-neonTurquoise/20 hover:bg-neonTurquoise/30 text-neonTurquoise px-3 py-1 rounded-md text-sm transition-all duration-200"
        >
          <Play size={14} />
          <span>執行</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neonTurquoise/20">
        <div className="p-4">
          <h4 className="text-xs font-mono text-gray-400 mb-2">代碼編輯器</h4>
          <textarea 
            value={code}
            onChange={handleCodeChange}
            className="w-full h-40 bg-deepBlue/70 text-gray-300 font-mono p-2 rounded border border-neonTurquoise/20 focus:outline-none focus:border-neonTurquoise/50 resize-none"
          />
        </div>
        
        <div className="p-4">
          <h4 className="text-xs font-mono text-gray-400 mb-2">執行結果</h4>
          <pre className="w-full h-40 bg-deepBlue/70 text-gray-300 font-mono p-2 rounded border border-neonTurquoise/20 overflow-auto">
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeSandbox;