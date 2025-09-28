import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "IFWIM 奕福穎科技公司 | AI 人工智慧解決方案 | 系統開發專家",
  description = "IFWIM 奕福穎科技公司專注於提供尖端AI人工智慧技術解決方案，包括系統開發、對話機器人、CMS管理、客製化系統開發服務。讓您的企業實現數位轉型，釋放數據的全部潛力。",
  keywords = "IFWIM, ifwim, 奕福穎科技公司, 奕福穎, 人工智慧, AI, 系統開發, 對話機器人, CMS管理, 客製化系統, 形象網站, 數位轉型, 台灣AI公司",
  ogTitle,
  ogDescription,
  canonical
}) => {
  useEffect(() => {
    // 更新 document title
    document.title = title;
    
    // 更新或創建 meta 標籤
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.content = content;
        document.head.appendChild(element);
      }
    };
    
    // 更新基本 SEO meta 標籤
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // 更新 Open Graph meta 標籤
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    
    // 更新 Twitter Card meta 標籤
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    
    // 更新 canonical URL
    if (canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalElement) {
        canonicalElement.href = canonical;
      } else {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        canonicalElement.href = canonical;
        document.head.appendChild(canonicalElement);
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription, canonical]);

  return null;
};

export default SEO;