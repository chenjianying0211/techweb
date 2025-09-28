import React, { useState } from 'react';
import CaseStudyCard from '../components/CaseStudyCard';

// Case study data
const caseStudies = [
  {
    id: 1,
    title: '金融科技智能客服系統',
    description: '為某大型銀行開發AI驅動的智能客服系統，減少65%的客戶等待時間，提升用戶滿意度。',
    beforeImage: 'https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/8636626/pexels-photo-8636626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: '對話機器人'
  },
  {
    id: 2,
    title: '電商平台全面升級',
    description: '重構老舊電商系統，導入現代化技術架構，使網站載入速度提升300%，訂單轉換率增加25%。',
    beforeImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: '系統開發'
  },
  {
    id: 3,
    title: '時尚品牌形象網站',
    description: '為國際時尚品牌打造沉浸式體驗網站，整合3D產品展示和線上預約，提升品牌形象和用戶參與度。',
    beforeImage: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: '形象網站'
  },
  {
    id: 4,
    title: '醫療保健數據管理系統',
    description: '開發醫療機構的患者數據管理平台，實現數據安全共享、智能分析，提升診斷效率和患者體驗。',
    beforeImage: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: '客製化系統'
  },
  {
    id: 5,
    title: '內容管理系統優化',
    description: '為媒體公司量身打造新一代CMS系統，簡化工作流程，提升內容發布效率，強化SEO表現。',
    beforeImage: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'CMS管理'
  },
  {
    id: 6,
    title: '旅遊業AI推薦引擎',
    description: '為旅遊平台開發智能推薦系統，根據用戶偏好和行為提供個性化旅遊建議，提升預訂率。',
    beforeImage: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    afterImage: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: '對話機器人'
  }
];

const categories = ['所有案例', '對話機器人', 'CMS管理', '客製化系統', '系統開發', '形象網站'];

const CaseStudies: React.FC = () => {
  const handleCall = () => {
    window.location.href = 'tel:0988105413';
  };
  
  const [activeCategory, setActiveCategory] = useState('所有案例');
  
  const filteredCases = activeCategory === '所有案例' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeCategory);
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="neon-text">成功案例</span>
            <span className="block mt-2">看見我們的實力</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            探索我們如何運用創新技術，為各行業客戶解決挑戰，創造商業價值
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button 
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-orbitron text-sm transition-all ${
                activeCategory === category 
                  ? 'bg-neonTurquoise text-deepBlue shadow-[0_0_15px_rgba(0,245,160,0.5)]' 
                  : 'bg-deepBlue/50 text-gray-300 border border-gray-700 hover:border-neonTurquoise/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCases.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.id}
              title={caseStudy.title}
              description={caseStudy.description}
              beforeImage={caseStudy.beforeImage}
              afterImage={caseStudy.afterImage}
              category={caseStudy.category}
            />
          ))}
        </div>
        
        {/* Process Section */}
        <div className="glass-panel p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            我們的<span className="neon-text">案例研究流程</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: '問題分析', 
                description: '深入了解客戶面臨的業務挑戰和技術限制，明確專案目標和成功指標。' 
              },
              { 
                title: '解決方案', 
                description: '運用創新思維和先進技術，設計並實施最適合客戶需求的定制化解決方案。' 
              },
              { 
                title: '成果評估', 
                description: '量化分析專案實施成效，包括技術指標和業務價值，確保達成預期目標。' 
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="border border-neonTurquoise/20 rounded-lg p-6 bg-deepBlue/20 relative overflow-hidden hover:border-neonTurquoise/50 transition-all duration-500"
              >
                {/* Background number */}
                <span className="absolute -right-4 -bottom-6 text-[120px] font-orbitron font-bold text-neonTurquoise/5">
                  {index + 1}
                </span>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-orbitron font-semibold mb-4 neon-text">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            客戶<span className="neon-text">心得回饋</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                quote: 'IFWINAI團隊不僅技術實力強，更能深入理解我們的業務需求，提供超越期待的解決方案。', 
                author: '林總經理', 
                company: '金融科技公司' 
              },
              { 
                quote: '與IFWINAI合作是明智的選擇，他們打造的電商平台不僅視覺出眾，更帶來顯著的業績增長。', 
                author: '王執行長', 
                company: '電子商務集團' 
              },
              { 
                quote: 'IFWINAI開發的AI客服系統極大地提升了我們的服務效率，客戶滿意度創歷史新高。', 
                author: '陳總監', 
                company: '國際零售品牌' 
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 relative"
              >
                {/* Quote marks */}
                <div className="absolute top-4 left-4 text-4xl text-neonTurquoise/20">"</div>
                <div className="absolute bottom-4 right-4 text-4xl text-neonTurquoise/20">"</div>
                
                <div className="relative z-10 p-4">
                  <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-neonTurquoise text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="glass-panel p-8 md:p-12 text-center">
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            想成為下一個<span className="neon-text">成功案例</span>嗎？
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            無論您的項目規模大小，我們都能提供最適合的解決方案，幫助您實現業務目標。
          </p>
          <button onClick={handleCall} className="cyber-button text-lg px-8 py-4">
            預約免費諮詢
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;