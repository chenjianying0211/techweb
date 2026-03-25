#!/usr/bin/env node
/**
 * 自動生成網站 Sitemap
 * IFWIN 奕福穎科技公司
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 網站配置
const SITE_URL = 'http://quarterai.org';
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// 頁面配置
const pages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0',
    description: 'IFWIN 奕福穎科技公司首頁 - AI人工智慧解決方案專家'
  },
  {
    url: '/services',
    changefreq: 'monthly',
    priority: '0.9',
    description: '服務項目 - 系統開發、對話機器人、CMS管理等專業服務'
  },
  {
    url: '/cases',
    changefreq: 'monthly',
    priority: '0.8',
    description: '成功案例 - 客戶專案展示與成果分享'
  },
  {
    url: '/ai-chat',
    changefreq: 'weekly',
    priority: '0.7',
    description: 'AI對話體驗 - 智能客服系統展示'
  }
];

// 服務子類別
const serviceCategories = [
  { id: 'system-development', name: '系統開發', priority: '0.6' },
  { id: 'chatbot', name: '對話機器人', priority: '0.6' },
  { id: 'cms-management', name: 'CMS管理', priority: '0.6' },
  { id: 'custom-system', name: '客製化系統', priority: '0.6' },
  { id: 'corporate-website', name: '形象網站', priority: '0.6' }
];

// 案例分類
const caseCategories = [
  { id: 'fintech', name: '金融科技', priority: '0.5' },
  { id: 'ecommerce', name: '電子商務', priority: '0.5' },
  { id: 'fashion', name: '時尚品牌', priority: '0.5' },
  { id: 'healthcare', name: '醫療健康', priority: '0.5' },
  { id: 'logistics', name: '物流運輸', priority: '0.5' }
];

// 獲取當前日期
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

// 生成 XML
function generateSitemap() {
  const currentDate = getCurrentDate();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">

  <!-- IFWIN 奕福穎科技公司 - 自動生成於 ${currentDate} -->
`;

  // 主要頁面
  pages.forEach(page => {
    xml += `
  <!-- ${page.description} -->
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>`;
  });

  xml += `\n\n  <!-- 服務類別子頁面 -->`;

  // 服務子類別
  serviceCategories.forEach(category => {
    xml += `
  <url>
    <loc>${SITE_URL}/services#${category.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${category.priority}</priority>
    <mobile:mobile/>
  </url>`;
  });

  xml += `\n\n  <!-- 案例分類子頁面 -->`;

  // 案例分類
  caseCategories.forEach(category => {
    xml += `
  <url>
    <loc>${SITE_URL}/cases#${category.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${category.priority}</priority>
    <mobile:mobile/>
  </url>`;
  });

  xml += `\n\n  <!-- 系統文件 -->
  <url>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.1</priority>
  </url>

  <url>
    <loc>${SITE_URL}/robots.txt</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.1</priority>
  </url>

</urlset>`;

  return xml;
}

// 寫入文件
function writeSitemap() {
  try {
    const sitemapXml = generateSitemap();
    fs.writeFileSync(OUTPUT_FILE, sitemapXml, 'utf8');
    console.log(`✅ Sitemap 成功生成: ${OUTPUT_FILE}`);
    console.log(`📊 包含 ${pages.length + serviceCategories.length + caseCategories.length + 2} 個 URL`);
    console.log(`🌐 網站: ${SITE_URL}`);
  } catch (error) {
    console.error('❌ 生成 Sitemap 時發生錯誤:', error);
    process.exit(1);
  }
}

// 執行生成
writeSitemap();

export { generateSitemap, writeSitemap };