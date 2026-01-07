
import React, { useState, useEffect } from 'react';
import WordmarkWhite from './Logos/WordmarkWhite.svg';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the top
      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      const diff = currentScrollY - lastScrollY;

      // Asymmetric thresholds: Hide quickly (50px), show slowly (100px)
      if (diff > 50) {
        setIsVisible(false);
        setLastScrollY(currentScrollY);
      } else if (diff < -100) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 transition-transform duration-500 ease-in-out flex justify-center px-4 ${isVisible ? 'translate-y-0' : '-translate-y-32'}`}>
      <div className="bg-[#111111] text-white rounded-full px-8 shadow-2xl border border-white/10 w-full max-w-7xl flex items-center justify-between backdrop-blur-md bg-opacity-60 relative h-[46px] md:h-[62px]">

        <div className="flex-1"></div>

        {/* Center - Wordmark overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src={WordmarkWhite}
            alt="ThrottleCove wordmark"
            className="pointer-events-auto h-full py-[2px] w-auto scale-[3.4] transform-gpu"
            draggable={false}
          />
        </div>

        {/* Right - Language Toggle */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 h-[22px] md:h-[28px] rounded-full border border-white/10 hover:bg-white/5 transition-all text-[8px] md:text-[10px] font-bold uppercase tracking-wider bg-black/40"
          >
            <Languages size={12} className="text-[#FF4438]" />
            <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
