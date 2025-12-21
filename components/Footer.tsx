import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import MasterLogo from './Logos/MasterWhite.svg';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black pt-5 pb-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Logo & Brand */}
          <div className="mb-1 -my-28 overflow-hidden">
            <img
              src={MasterLogo}
              alt="ThrottleCove Master Logo"
              className="w-64 md:w-96 h-auto opacity-95 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
          </div>

          {/* Description */}
          <p className="text-gray-500 text-base leading-relaxed mb-8 font-light max-w-xl -mt-16 md:-mt-24 relative z-10">
            {t('footer.description')}
          </p>

          {/* Bottom Row */}
          <div className="pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <p className="text-gray-600 text-xs uppercase tracking-widest">{t('footer.rights')}</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
            <p className="text-gray-600 text-xs uppercase tracking-widest">{t('footer.builtIn')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
