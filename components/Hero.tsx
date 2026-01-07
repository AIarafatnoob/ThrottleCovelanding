import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Music2 } from 'lucide-react';
import { useState } from 'react';
import GarageDoorCta from './GarageDoorCta';
import heroimg from './Assets/Garagev2.png';
import { useLanguage } from '../context/LanguageContext';

const GmailReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center h-5"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <motion.div
        initial={false}
        animate={{ width: isRevealed ? 'auto' : 20, opacity: 1 }}
        className="overflow-hidden flex items-center bg-black/50 rounded-full"
      >
        <a
          href="mailto:Throttlecove@gmail.com"
          className={`flex items-center text-white/40 hover:text-[#FF4438] transition-colors duration-300 ${isRevealed ? 'pr-3 pl-2 py-1' : ''}`}
        >
          <Mail size={18} className="flex-shrink-0" />
          {isRevealed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              className="ml-2 text-[10px] font-medium whitespace-nowrap text-white"
            >
              Throttlecove@gmail.com
            </motion.span>
          )}
        </a>
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>
        <img
          src={heroimg}
          alt="Dark Garage Motorcycle"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-[10px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 font-sans">
                {t('hero.title')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t('hero.garage')}</span>
              </h1>

              <div className="h-1 w-24 bg-[#FF4438] mb-8"></div>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl font-light">
                {t('hero.description')}
                <span className="text-white font-semibold ml-2">{t('hero.throttleUp')}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-stretch">

                <div id="hero-cta-container" className="w-full max-w-[300px]">
                  <GarageDoorCta
                    className="w-full h-14"
                    enableScrollClose={true}
                  />
                </div>

                <button className="h-14 px-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-3 uppercase tracking-wide text-xs w-[150px]">
                  {t('hero.viewDemo')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Compact Socials - Pinned to bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-10 z-30 flex items-center gap-5 hidden md:flex"
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mr-2">{t('hero.connect') || 'Follow Us'}</div>
        <div className="h-[1px] w-8 bg-white/10"></div>
        <a href="https://www.facebook.com/profile.php?id=61585442360804" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all duration-300 transform hover:scale-110"><Facebook size={18} /></a>
        <a href="https://www.instagram.com/throttlec0ve/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all duration-300 transform hover:scale-110"><Instagram size={18} /></a>
        <a href="https://www.youtube.com/@ThrottleCove" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all duration-300 transform hover:scale-110"><Youtube size={18} /></a>
        <a href="https://x.com/ThrottleCove" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all duration-300 transform hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@throttlecove" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all duration-300 transform hover:scale-110"><Music2 size={18} /></a>
        <GmailReveal />
      </motion.div>

      {/* Mobile Socials - Center Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center gap-6 md:hidden"
      >
        <a href="https://www.facebook.com/profile.php?id=61585442360804" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all transform hover:scale-110"><Facebook size={20} /></a>
        <a href="https://www.instagram.com/throttlec0ve/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all transform hover:scale-110"><Instagram size={20} /></a>
        <a href="https://www.youtube.com/@ThrottleCove" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all transform hover:scale-110"><Youtube size={20} /></a>
        <a href="https://x.com/ThrottleCove" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all transform hover:scale-110">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@throttlecove" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF4438] transition-all transform hover:scale-110"><Music2 size={20} /></a>
        <div className="flex items-center justify-center">
          <a href="mailto:Throttlecove@gmail.com" className="text-white/40 hover:text-[#FF4438] transition-all transform hover:scale-110">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
