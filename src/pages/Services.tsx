import React, { useEffect, useRef } from 'react';
import { Code, MessageSquare, Database, Brain, Layout } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CodeSandbox from '../components/CodeSandbox';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('module-visible');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const sampleCode = `// 智能客戶分析系統示例
import { analyzeCustomerData } from './ai';

async function predictChurn(customerData) {
  // 使用AI模型預測客戶流失風險
  const riskScore = await analyzeCustomerData({
    purchaseHistory: customerData.purchases,
    engagementLevel: customerData.engagement,
    supportTickets: customerData.tickets
  });
  
  // 根據風險分數制定干預策略
  if (riskScore > 0.7) {
    return {
      risk: 'high',
      recommendedAction: '主動聯繫並提供專屬優惠'
    };
  } else if (riskScore > 0.4) {
    return {
      risk: 'medium',
      recommendedAction: '電子郵件營銷活動'
    };
  } else {
    return {
      risk: 'low',
      recommendedAction: '定期關注'
    };
  }
}

// 使用範例
const customer = {
  id: 'cust_123456',
  purchases: [...],
  engagement: 0.35,
  tickets: [...]
};

const result = await predictChurn(customer);
console.log(result);`;
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div 
          className="text-center mb-16 module-hidden" 
          ref={sectionRef}
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="neon-text">智能解決方案</span>
            <span className="block mt-2">滿足您的業務需求</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            我們提供全方位的技術服務，從系統開發到對話機器人，幫助企業提升效率、降低成本并實現數位轉型
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <ServiceCard 
            title="系統開發" 
            description="從需求分析到部署維護，我們提供全流程的企業級應用系統開發服務，打造高效、安全、可擴展的解決方案。" 
            icon={<Code size={24} />}
            techStack={['React', 'Vue.js', 'Node.js', 'Python', 'AWS', 'Docker', 'CI/CD']}
            index={0}
            demoComponent={<CodeSandbox initialCode={sampleCode} language="JavaScript" />}
          />
          
          <ServiceCard 
            title="對話機器人" 
            description="基於先進的自然語言處理技術，打造智能客服機器人，提升客戶服務效率，降低人力成本。" 
            icon={<MessageSquare size={24} />}
            techStack={['GPT-4', 'NLP', 'Machine Learning', 'Dialog Management', 'API整合']}
            index={1}
          />
          
          <ServiceCard 
            title="CMS管理" 
            description="直覺化的內容管理系統，讓您輕鬆管理網站內容、產品資訊和數位資產，無需專業技術背景。" 
            icon={<Database size={24} />}
            techStack={['Headless CMS', 'API驅動', '多語系支援', '版本控制', '媒體管理']}
            index={2}
          />
          
          <ServiceCard 
            title="客製化系統" 
            description="根據企業獨特需求，量身打造專屬系統，解決特定業務痛點，提升營運效率。" 
            icon={<Brain size={24} />}
            techStack={['ERP', 'CRM', '庫存管理', '人資系統', '數據分析', 'API整合']}
            index={3}
          />
          
          <ServiceCard 
            title="形象網站" 
            description="融合藝術設計與技術開發，打造視覺衝擊力強、使用者體驗佳的品牌形象網站。" 
            icon={<Layout size={24} />}
            techStack={['響應式設計', 'UX/UI', 'SEO優化', '動畫效果', '跨瀏覽器支援']}
            index={4}
          />
        </div>
        
        {/* Process Section */}
        <div className="glass-panel p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-orbitron font-bold mb-6 text-center">
            我們的<span className="neon-text">開發流程</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute h-0.5 bg-gradient-to-r from-neonTurquoise/50 to-deepBlue top-1/2 left-[12%] right-[12%] -z-1"></div>
            
            {[
              { number: '01', title: '需求分析', description: '深入了解業務需求，定義系統功能與目標' },
              { number: '02', title: '設計規劃', description: '制定技術方案，設計系統架構與用戶體驗' },
              { number: '03', title: '開發實現', description: '敏捷迭代開發，定期交付可用功能' },
              { number: '04', title: '測試部署', description: '嚴格測試，確保系統品質，順利上線' }
            ].map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-deepBlue border-2 border-neonTurquoise flex items-center justify-center mb-4 relative">
                    <div className="absolute inset-0 rounded-full bg-neonTurquoise/20 animate-pulse"></div>
                    <span className="text-2xl font-orbitron font-bold text-neonTurquoise">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            我們使用的<span className="neon-text">尖端技術</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '人工智能', '機器學習', '雲端運算', '大數據分析', 
              '區塊鏈', 'IoT物聯網', '微服務架構', 'DevOps自動化'
            ].map((tech, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 text-center hover:border-neonTurquoise/50 transition-all duration-300"
              >
                <span className="text-lg font-orbitron">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="glass-panel p-8 md:p-12 text-center">
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            準備好實現您的<span className="neon-text">數位願景</span>了嗎？
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            讓我們合作，將您的想法轉化為現實。我們的專家團隊隨時準備為您服務。
          </p>
          <button className="cyber-button text-lg px-8 py-4">
            立即聯繫我們
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;