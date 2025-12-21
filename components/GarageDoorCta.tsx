import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Box, Check, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface GarageDoorCtaProps {
  className?: string;
  enableScrollClose?: boolean;
}

const GarageDoorCta: React.FC<GarageDoorCtaProps> = ({ className = "", enableScrollClose = false }) => {
  const { t } = useLanguage();
  const [isGarageOpen, setIsGarageOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const garageRef = useRef<HTMLDivElement>(null);

  // Handle auto-closing logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (garageRef.current && !garageRef.current.contains(event.target as Node)) {
        setIsGarageOpen(false);
      }
    };

    const handleScroll = () => {
      // Close if scrolled 70% of the viewport height (only if enabled)
      if (enableScrollClose && window.scrollY > window.innerHeight * 0.7) {
        setIsGarageOpen(false);
      }
    };

    if (isGarageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isGarageOpen, enableScrollClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setIsGarageOpen(false);
        setFormState('idle');
        setEmail('');
      }, 2000);
    }, 1500);
  };

  return (
    <div
      ref={garageRef}
      className={`relative rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,68,56,0.3)] group/garage border border-[#FF4438] bg-[#0a0a0a] ${className}`}
    >

      {/* Interior (Input Form) */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full h-full flex items-center justify-between pl-5 pr-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={formState === 'success' ? t('cta.success') : t('cta.placeholder')}
          className="flex-1 bg-transparent border-none outline-none text-white text-sm font-medium placeholder-gray-500 min-w-0"
          required
        />
        <button
          type="submit"
          disabled={formState === 'submitting' || formState === 'success'}
          className={`h-10 w-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${formState === 'success' ? 'bg-green-500' : 'bg-[#FF4438] hover:bg-red-600'}`}
        >
          {formState === 'submitting' ? (
            <Loader2 size={18} className="animate-spin text-white" />
          ) : formState === 'success' ? (
            <Check size={18} className="text-white" />
          ) : (
            <ArrowRight size={18} className="text-white" />
          )}
        </button>
      </form>

      {/* Exterior (Garage Door) */}
      <motion.button
        onClick={() => setIsGarageOpen(true)}
        initial={{ y: 0 }}
        animate={{ y: isGarageOpen ? '-100%' : '0%' }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        className="absolute inset-0 w-full h-full bg-[#FF4438] flex items-center justify-center gap-3 z-10 cursor-pointer"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Garage Panel Texture (Grooves) */}
        <div className="absolute inset-0 flex flex-col justify-between py-1 opacity-20 pointer-events-none">
          <div className="w-full h-[1px] bg-black shadow-sm"></div>
          <div className="w-full h-[1px] bg-black shadow-sm"></div>
          <div className="w-full h-[1px] bg-black shadow-sm"></div>
          <div className="w-full h-[1px] bg-black shadow-sm"></div>
          <div className="w-full h-[1px] bg-black shadow-sm"></div>
        </div>

        <Box size={18} className="text-white relative z-20" />
        <span className="text-white font-bold uppercase tracking-wide text-xs relative z-20">{t('cta.openGarage')}</span>
      </motion.button>
    </div>
  );
};

export default GarageDoorCta;
