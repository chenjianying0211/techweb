import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, MenuIcon, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:0988105413';
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-deepBlue/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <Brain size={32} className="text-neonTurquoise" />
          <span className="text-2xl font-orbitron font-bold neon-text">TechAI</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-lg font-orbitron transition-all hover:text-neonTurquoise ${
                isActive ? 'text-neonTurquoise' : 'text-gray-300'
              }`
            }
          >
            首頁
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-lg font-orbitron transition-all hover:text-neonTurquoise ${
                isActive ? 'text-neonTurquoise' : 'text-gray-300'
              }`
            }
          >
            服務
          </NavLink>
          <NavLink 
            to="/cases" 
            className={({ isActive }) => 
              `text-lg font-orbitron transition-all hover:text-neonTurquoise ${
                isActive ? 'text-neonTurquoise' : 'text-gray-300'
              }`
            }
          >
            案例
          </NavLink>
          <NavLink 
            to="/ai-chat" 
            className={({ isActive }) => 
              `text-lg font-orbitron transition-all hover:text-neonTurquoise ${
                isActive ? 'text-neonTurquoise' : 'text-gray-300'
              }`
            }
          >
            AI對話
          </NavLink>
          <button 
            onClick={handleCall}
            className="cyber-button"
          >
            聯絡我們
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neonTurquoise"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-deepBlue/95 backdrop-blur-lg transition-all duration-300 z-40 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-2xl font-orbitron transition-all hover:text-neonTurquoise ${
                isActive ? 'text-neonTurquoise' : 'text-gray-300'
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            首頁
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-2xl font-orbitron transition-all hover:text-neonTurquoise ${
                isActive ? 'text-neonTurquoise' : 'text-gray-300'
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            服務
          </NavLink>
          <NavLink 
            to="/cases" 
            className={({ isActive }) => 
              `text-2xl font-orbitron transition-all hover:text-neonTurquoise ${
                isActive ? 'text-neonTurquoise' : 'text-gray-300'
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            案例
          </NavLink>
          <NavLink 
            to="/ai-chat" 
            className={({ isActive }) => 
              `text-2xl font-orbitron transition-all hover:text-neonTurquoise ${
                isActive ? 'text-neonTurquoise' : 'text-gray-300'
              }`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            AI對話
          </NavLink>
          <button 
            onClick={() => {
              handleCall();
              setMobileMenuOpen(false);
            }}
            className="cyber-button mt-4"
          >
            聯絡我們
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;