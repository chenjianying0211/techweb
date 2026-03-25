# 🚀 IFWIN 奕福穎科技公司官網

> **AI 人工智慧解決方案專家 | 系統開發 | 數位轉型**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-green?style=for-the-badge&logo=github)](http://quarterai.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-teal?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

## 📋 目錄
- [專案簡介](#-專案簡介)
- [技術架構](#-技術架構)
- [功能特色](#-功能特色)
- [快速開始](#-快速開始)
- [開發指令](#-開發指令)
- [部署流程](#-部署流程)
- [SEO 優化](#-seo-優化)
- [專案結構](#-專案結構)
- [更新流程](#-更新流程)
- [聯絡資訊](#-聯絡資訊)

## 🏢 專案簡介

IFWIN 奕福穎科技公司官網是一個現代化的 AI 技術解決方案展示網站，專注於：

- 🤖 **AI 人工智慧解決方案**
- 💻 **系統開發與整合**
- 🎨 **形象網站設計**
- 📱 **對話機器人開發**
- 🗄️ **CMS 管理系統**
- 🔧 **客製化系統開發**

**官網連結**: [http://quarterai.org/](http://quarterai.org/)

## 🛠️ 技術架構

### 前端技術棧
| 技術 | 版本 | 用途 |
|------|------|------|
| React | 18.3.1 | 主要 UI 框架 |
| TypeScript | 5.5.3 | 型別安全開發 |
| Vite | 5.4.2 | 建構工具 |
| React Router | 6.22.3 | 路由管理 |
| Tailwind CSS | 3.4.1 | 樣式框架 |
| Lucide React | 0.344.0 | 圖標庫 |

### 部署平台
- **GitHub Pages** - 靜態網站託管
- **自定義域名** - quarterai.org
- **GitHub Actions** - 自動化部署

## ✨ 功能特色

### 🎨 設計特色
- ✅ **響應式設計** - 支援各種裝置
- ✅ **暗色主題** - 科技感十足的視覺設計
- ✅ **粒子動畫** - 動態背景效果
- ✅ **數據流動畫** - 科技風格動效
- ✅ **浮動動畫** - 服務卡片動態效果

### 💼 業務功能
- ✅ **服務展示** - 詳細的服務項目說明
- ✅ **案例研究** - 成功專案展示
- ✅ **AI 對話體驗** - 智能客服展示
- ✅ **聯絡功能** - 一鍵撥打電話
- ✅ **SEO 優化** - 完整的搜尋引擎優化

### 🔍 SEO 功能
- ✅ **結構化數據** - JSON-LD 格式
- ✅ **Open Graph** - 社群媒體分享優化
- ✅ **Sitemap** - 自動生成網站地圖
- ✅ **Robots.txt** - 搜尋引擎爬蟲指引
- ✅ **Meta 標籤** - 完整的頁面資訊

## 🚀 快速開始

### 環境需求
- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### 安裝步驟

1. **複製專案**
```bash
git clone https://github.com/chenjianying0211/techweb.git
cd techweb
```

2. **安裝依賴**
```bash
npm install
```

3. **啟動開發伺服器**
```bash
npm run dev
```

4. **開啟瀏覽器**
前往 `http://localhost:5173` 查看網站

## 📝 開發指令

### 基本指令
```bash
# 啟動開發伺服器
npm run dev

# 建構生產版本
npm run build

# 預覽生產版本
npm run preview

# 程式碼檢查
npm run lint
```

### SEO 相關指令
```bash
# 生成 Sitemap
npm run sitemap

# 生成 Sitemap 並建構
npm run build:sitemap
```

### 部署相關指令
```bash
# 手動部署到 GitHub Pages
npm run deploy

# 預部署 (自動執行 build)
npm run predeploy
```

## 🚀 部署流程

### 自動部署 (推薦)
專案使用 GitHub Actions 自動部署，每次推送到 main 分支時會自動觸發：

1. **推送代碼**
```bash
git add .
git commit -m "你的更新訊息"
git push origin main
```

2. **等待部署**
- GitHub Actions 會自動開始部署流程
- 大約 2-5 分鐘後部署完成
- 可在 [Actions 頁面](https://github.com/chenjianying0211/techweb/actions) 查看進度

### 手動部署
```bash
# 建構並部署
npm run deploy
```

### 部署檢查清單
- ✅ 確認 `vite.config.ts` 中的 `base` 設定正確
- ✅ 確認 `public/CNAME` 文件包含正確的域名
- ✅ 確認 GitHub Pages 設定指向正確分支
- ✅ 確認自定義域名 DNS 設定正確

## 🔍 SEO 優化

### 完整的 SEO 配置

#### Meta 標籤優化
- ✅ Title 標籤包含關鍵字
- ✅ Description 完整描述
- ✅ Keywords 相關關鍵字
- ✅ Open Graph 社群分享
- ✅ Twitter Card 優化

#### 結構化數據
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IFWIN 奕福穎科技公司",
  "url": "http://quarterai.org/"
}
```

#### Sitemap 管理
網站包含完整的 Sitemap，涵蓋：
- 主要頁面 (4個)
- 服務分類 (5個)
- 案例分類 (5個)
- 系統文件 (2個)

**總計 16 個 URL**

#### 搜尋引擎提交
1. **Google Search Console**
   - 網址：https://search.google.com/search-console/
   - 提交：`http://quarterai.org/sitemap.xml`

2. **Bing Webmaster Tools**
   - 網址：https://www.bing.com/webmasters/
   - 提交：`http://quarterai.org/sitemap.xml`

## 📁 專案結構

```
techweb/
├── 📁 public/                    # 靜態資源
│   ├── 📄 CNAME                 # GitHub Pages 域名設定
│   ├── 📄 robots.txt            # 搜尋引擎爬蟲規則
│   ├── 📄 sitemap.xml           # 網站地圖
│   └── 📄 sitemap-index.xml     # 網站地圖索引
├── 📁 src/                      # 原始碼
│   ├── 📁 components/           # React 元件
│   │   ├── 📄 Header.tsx        # 網站標頭
│   │   ├── 📄 Footer.tsx        # 網站頁尾
│   │   ├── 📄 SEO.tsx           # SEO 優化元件
│   │   └── 📄 ...               # 其他元件
│   ├── 📁 pages/                # 頁面元件
│   │   ├── 📄 Home.tsx          # 首頁
│   │   ├── 📄 Services.tsx      # 服務頁面
│   │   ├── 📄 CaseStudies.tsx   # 案例頁面
│   │   └── 📄 AIChat.tsx        # AI 對話頁面
│   ├── 📄 App.tsx               # 主應用程式
│   ├── 📄 main.tsx              # 入口檔案
│   └── 📄 index.css             # 全域樣式
├── 📁 scripts/                  # 自動化腳本
│   └── 📄 generate-sitemap.js   # Sitemap 生成器
├── 📁 .github/workflows/        # GitHub Actions
│   └── 📄 deploy.yml            # 部署工作流程
├── 📄 package.json              # 專案配置
├── 📄 vite.config.ts            # Vite 配置
├── 📄 tailwind.config.js        # Tailwind CSS 配置
└── 📄 README.md                 # 專案文件 (本文件)
```

## 🔄 更新流程

### 日常更新流程

1. **拉取最新代碼**
```bash
git pull origin main
```

2. **進行修改**
- 編輯相關文件
- 測試功能

3. **本地測試**
```bash
npm run dev
```

4. **建構測試**
```bash
npm run build
npm run preview
```

5. **提交變更**
```bash
git add .
git commit -m "描述你的更改"
git push origin main
```

### 重要更新項目

#### 🔧 技術更新
- **依賴包更新**: 定期更新 npm 套件
- **安全性更新**: 修復已知漏洞
- **效能優化**: 改善載入速度

#### 📄 內容更新
- **服務項目**: 新增或修改服務內容
- **案例研究**: 新增成功案例
- **公司資訊**: 更新聯絡資訊

#### 🔍 SEO 更新
- **Sitemap 更新**: 自動/手動更新網站地圖
- **Meta 標籤**: 優化頁面描述
- **關鍵字**: 調整 SEO 關鍵字

### Sitemap 更新
```bash
# 手動更新 Sitemap
npm run sitemap

# 更新並重新建構
npm run build:sitemap
```

### 緊急更新流程

1. **建立 Hotfix 分支**
```bash
git checkout -b hotfix/urgent-fix
```

2. **進行修復**
```bash
# 修改檔案
git add .
git commit -m "hotfix: 修復緊急問題"
```

3. **合併到主分支**
```bash
git checkout main
git merge hotfix/urgent-fix
git push origin main
```

4. **刪除 Hotfix 分支**
```bash
git branch -d hotfix/urgent-fix
```

## 📊 效能監控

### 網站分析工具
- **Google Analytics** - 流量分析
- **Google Search Console** - 搜尋效能
- **PageSpeed Insights** - 效能評分
- **Lighthouse** - 全面性能檢測

### 效能指標目標
- **First Contentful Paint** < 2s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1
- **First Input Delay** < 100ms

## 🛡️ 安全性

### 安全措施
- ✅ **HTTPS 強制使用**
- ✅ **內容安全政策 (CSP)**
- ✅ **定期依賴更新**
- ✅ **程式碼審查**

### 安全性檢查
```bash
# 檢查安全漏洞
npm audit

# 修復可自動修復的漏洞
npm audit fix
```

## 🐛 常見問題

### 部署相關

**Q: GitHub Pages 部署失敗？**
A: 檢查以下項目：
- GitHub Actions 工作流程是否正常執行
- `vite.config.ts` 配置是否正確
- `public/CNAME` 文件是否存在

**Q: 自定義域名無法訪問？**
A: 檢查以下項目：
- DNS 設定是否正確指向 GitHub Pages
- `CNAME` 文件內容是否正確
- 等待 DNS 傳播 (可能需要 24-48 小時)

### SEO 相關

**Q: 搜尋引擎找不到網站？**
A: 確認以下項目：
- 已提交 Sitemap 到 Google Search Console
- Robots.txt 沒有封鎖搜尋引擎
- 網站已上線且可訪問

### 開發相關

**Q: 本地開發伺服器無法啟動？**
A: 嘗試以下解決方案：
```bash
# 清除快取
rm -rf node_modules package-lock.json
npm install

# 檢查 Node.js 版本
node --version  # 需要 >= 18.0.0
```

## 📞 聯絡資訊

### 🏢 公司資訊
- **公司名稱**: IFWIN 奕福穎科技公司
- **官方網站**: [http://quarterai.org/](http://quarterai.org/)
- **電話**: +886 988105413
- **服務項目**: AI 人工智慧、系統開發、數位轉型

### 🛠️ 技術支援
- **GitHub Repository**: [techweb](https://github.com/chenjianying0211/techweb)
- **Issue 回報**: [GitHub Issues](https://github.com/chenjianying0211/techweb/issues)
- **技術文件**: 本 README.md

### 📈 專案統計
- **建立日期**: 2025年1月
- **最後更新**: 2025年9月28日
- **技術棧**: React + TypeScript + Vite
- **部署平台**: GitHub Pages

---

<div align="center">

**🎯 專業 AI 解決方案，助力企業數位轉型**

Made with ❤️ by IFWIN 奕福穎科技公司

[🌐 官網](http://quarterai.org/) • [📱 聯絡我們](tel:+886988105413) • [💼 服務項目](http://quarterai.org/services)

</div>