import React, { useEffect, useRef } from 'react';
import { Brain, Code, MessageSquare, Database, Layout, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const modulesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('module-visible');
        } else {
          entry.target.classList.remove('module-visible');
        }
      });
    }, { threshold: 0.1 });
    
    modulesRef.current.forEach((module) => {
      if (module) observer.observe(module);
    });
    
    return () => {
      modulesRef.current.forEach((module) => {
        if (module) observer.unobserve(module);
      });
    };
  }, []);
  
  const handleCall = () => {
    window.location.href = 'tel:0988105413';
  };
  
  // Generate random data flow lines for hero section
  const heroDataFlows = Array.from({ length: 10 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 30 + 20}%`,
    top: `${i * 10}%`,
    delay: `${Math.random() * 5}s`
  }));
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated data flow lines */}
        {heroDataFlows.map((flow, i) => (
          <div 
            key={i}
            className="data-flow" 
            style={{ 
              left: flow.left, 
              width: flow.width, 
              top: flow.top,
              animationDelay: flow.delay
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="module-hidden" 
            ref={(el) => (modulesRef.current[0] = el)}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-center leading-tight mb-6">
              <span className="block">打造未來</span>
              <span className="neon-text">AI技術驅動的數位體驗</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto mb-10">
              我們運用尖端技術，為企業打造智能化、高效率的解決方案，驅動業務增長和數位轉型
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/services" className="cyber-button">
                探索服務 <ChevronRight className="inline ml-2" size={18} />
              </Link>
              <Link to="/ai-chat" className="bg-transparent px-6 py-3 border border-gray-500 text-gray-300 rounded-md font-orbitron hover:bg-white/5 transition-colors">
                體驗AI對話
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 module-hidden" 
            ref={(el) => (modulesRef.current[1] = el)}
          >
            {[
              { label: '完成專案', value: '150+' },
              { label: '合作客戶', value: '80+' },
              { label: '技術專家', value: '25+' },
              { label: '持續支援', value: '24/7' }
            ].map((stat, index) => (
              <div key={index} className="glass-panel p-6 text-center">
                <div className="text-3xl font-orbitron font-bold neon-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-16 module-hidden" 
            ref={(el) => (modulesRef.current[2] = el)}
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">我們的<span className="neon-text">專業服務</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">打造全方位的數位解決方案，從系統開發到智能機器人，一站式滿足您的需求</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Code size={24} />, 
                title: '系統開發', 
                description: '從需求分析到系統實現，打造高效、安全、穩定的企業級應用系統。' 
              },
              { 
                icon: <MessageSquare size={24} />, 
                title: '對話機器人', 
                description: '基於NLP技術的智能對話系統，提升客服效率和顧客體驗。' 
              },
              { 
                icon: <Database size={24} />, 
                title: 'CMS管理', 
                description: '直覺化的內容管理系統，讓您輕鬆管理網站內容，無需技術背景。' 
              },
              { 
                icon: <Brain size={24} />, 
                title: '客製化系統', 
                description: '根據企業獨特需求，量身打造專屬系統，解決業務痛點。' 
              },
              { 
                icon: <Layout size={24} />, 
                title: '形象網站', 
                description: '融合藝術設計與技術，打造獨特的品牌數位形象，吸引目標客群。' 
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 hover:border-neonTurquoise/50 transition-all duration-300 module-hidden" 
                ref={(el) => (modulesRef.current[3 + index] = el)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-lg bg-deepBlue/50 border border-neonTurquoise/30 text-neonTurquoise inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-neonTurquoise hover:gap-2 transition-all group"
                >
                  了解更多 <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div 
            className="glass-panel p-8 md:p-12 relative overflow-hidden module-hidden" 
            ref={(el) => (modulesRef.current[8] = el)}
          >
            {/* Holographic effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neonTurquoise/0 via-neonTurquoise/5 to-neonTurquoise/0 hologram-effect"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">為何選擇<span className="neon-text">我們</span></h2>
                <p className="text-gray-300 max-w-2xl mx-auto">我們結合頂尖技術與豐富經驗，為客戶創造最大價值</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    title: '技術領先', 
                    description: '採用最新AI與雲端技術，確保解決方案具有前瞻性和競爭力。' 
                  },
                  { 
                    title: '專業團隊', 
                    description: '擁有豐富經驗的專業團隊，每位成員都是各自領域的專家。' 
                  },
                  { 
                    title: '客戶為本', 
                    description: '深入理解客戶需求，提供超越期待的服務與解決方案。' 
                  },
                  { 
                    title: '敏捷開發', 
                    description: '採用敏捷方法論，快速迭代、持續交付，縮短上市時間。' 
                  },
                  { 
                    title: '全面支援', 
                    description: '提供24/7技術支援，確保系統穩定運行，快速解決問題。' 
                  },
                  { 
                    title: '持續創新', 
                    description: '不斷研發創新技術，為客戶帶來更多商業價值。' 
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="border border-neonTurquoise/20 rounded-lg p-6 bg-deepBlue/20 hover:bg-deepBlue/30 transition-all duration-300 module-hidden" 
                    ref={(el) => (modulesRef.current[9 + index] = el)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-lg font-orbitron font-semibold mb-3 neon-text">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div 
            className="text-center module-hidden" 
            ref={(el) => (modulesRef.current[15] = el)}
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
              準備好<span className="neon-text">開始您的數位轉型</span>了嗎？
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              聯繫我們，探討如何運用AI技術為您的企業創造更多價值
            </p>
            <button 
              onClick={handleCall}
              className="cyber-button text-lg px-8 py-4"
            >
              立即諮詢
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;