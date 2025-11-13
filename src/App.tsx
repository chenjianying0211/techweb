import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

// 外部連結重定向組件
function ExternalRedirect({ url }: { url: string }) {
  useEffect(() => {
    // 立即跳轉
    window.location.replace(url);
  }, [url]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-deepBlue text-gray-100 font-exo overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cases" element={<CaseStudies />} />
              <Route
                path="/demo"
                element={<ExternalRedirect url="https://lin.ee/AK9Lwdb" />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
