import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20">
      {/* Data flow lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="data-flow" 
            style={{
              top: `${15 + i * 20}%`,
              height: '1px',
              animationDelay: `${i * 1.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="glass-panel mx-4 lg:mx-auto max-w-7xl overflow-hidden">
        <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain size={32} className="text-neonTurquoise" />
              <span className="text-2xl font-orbitron font-bold neon-text">TechAI</span>
            </div>
            <p className="text-gray-300 mb-6">
              專注於提供尖端AI技術解決方案，幫助企業實現數位轉型並釋放數據的全部潛力。
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neonTurquoise transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neonTurquoise transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neonTurquoise transition-colors">
                <Twitter size={20} />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-xl font-orbitron font-semibold mb-6 neon-text">服務項目</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-neonTurquoise transition-colors">系統開發</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-neonTurquoise transition-colors">對話機器人</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-neonTurquoise transition-colors">CMS管理</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-neonTurquoise transition-colors">客製化系統</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-neonTurquoise transition-colors">形象網站</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-orbitron font-semibold mb-6 neon-text">快速鏈接</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-neonTurquoise transition-colors">首頁</Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-300 hover:text-neonTurquoise transition-colors">成功案例</Link>
              </li>
              <li>
                <Link to="/ai-chat" className="text-gray-300 hover:text-neonTurquoise transition-colors">AI對話體驗</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-neonTurquoise transition-colors">關於我們</Link>
              </li>
              <li>
                <a href="tel:0988105413" className="text-gray-300 hover:text-neonTurquoise transition-colors">聯絡我們</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-orbitron font-semibold mb-6 neon-text">聯絡資訊</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start gap-3">
                <MapPin size={20} className="text-neonTurquoise flex-shrink-0 mt-1" />
                <span className="text-gray-300">台北市信義區松高路89號101大樓55樓</span>
              </li> */}
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-neonTurquoise flex-shrink-0" />
                <span className="text-gray-300">+886 988105413</span>
              </li>
              {/* <li className="flex items-center gap-3">
                <Mail size={20} className="text-neonTurquoise flex-shrink-0" />
                <span className="text-gray-300">contact@techai.com.tw</span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 TechAI. 版權所有.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-400 text-sm hover:text-neonTurquoise transition-colors">隱私政策</Link>
              <Link to="#" className="text-gray-400 text-sm hover:text-neonTurquoise transition-colors">服務條款</Link>
              <Link to="#" className="text-gray-400 text-sm hover:text-neonTurquoise transition-colors">Cookie政策</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;