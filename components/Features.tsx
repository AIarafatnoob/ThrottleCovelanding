import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import emresTC from './Assets/emresTC.jpg';
import emres from './Assets/Features/EmergecyResponse.jpg'
import motomed from './Assets/Features/MotoMedic.jpg';
import garagevid from './Assets/Features/Mocks/M1.mp4'
import remindersvid from './Assets/Features/Mocks/Smart reminders.mp4'
import sosvid from './Assets/Features/Mocks/SOS.mp4';
import vaultvid from './Assets/Features/Mocks/quick access.mp4';
import resaleCert from './Assets/Features/resale cirtificate.png';
import storeImg from './Assets/Features/Store.png';
import profilevid from './Assets/Features/Mocks/rider rank.mp4';
import { Smartphone, Wrench, FileCheck, ShoppingBag, ShieldAlert, BellRing, UserCircle, PlusCircle, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = useMemo(() => [
    {
      id: 1,
      title: t('features.items.vault.title'),
      subtitle: t('features.items.vault.subtitle'),
      description: t('features.items.vault.description'),
      icon: <Smartphone className="w-5 h-5" />,
      image: emresTC,
      video: vaultvid
    },
    {
      id: 2,
      title: t('features.items.motoMedic.title'),
      subtitle: t('features.items.motoMedic.subtitle'),
      description: t('features.items.motoMedic.description'),
      icon: <Wrench className="w-5 h-5" />,
      image: motomed,
      // Using smart reminders video as placeholder for MotoMedic if specific one isn't available
      // or keeping it as is but removing external link for safety
      video: ""
    },
    {
      id: 3,
      title: t('features.items.store.title'),
      subtitle: t('features.items.store.subtitle'),
      description: t('features.items.store.description'),
      icon: <ShoppingBag className="w-5 h-5" />,
      image: storeImg,
    },
    {
      id: 4,
      title: t('features.items.sos.title'),
      subtitle: t('features.items.sos.subtitle'),
      description: t('features.items.sos.description'),
      icon: <ShieldAlert className="w-5 h-5" />,
      image: emres,
      video: sosvid
    },
    {
      id: 5,
      title: t('features.items.resale.title'),
      subtitle: t('features.items.resale.subtitle'),
      description: t('features.items.resale.description'),
      icon: <FileCheck className="w-5 h-5" />,
      image: resaleCert,
    },
    {
      id: 7,
      title: t('features.items.reminders.title'),
      subtitle: t('features.items.reminders.subtitle'),
      description: t('features.items.reminders.description'),
      icon: <BellRing className="w-5 h-5" />,
      image: motomed, // Reusing local image for poster
      video: remindersvid
    },
    {
      id: 8,
      title: t('features.items.profile.title'),
      subtitle: t('features.items.profile.subtitle'),
      description: t('features.items.profile.description'),
      icon: <UserCircle className="w-5 h-5" />,
      image: emres, // Reusing local image for poster
      video: profilevid
    },
    {
      id: 9,
      title: t('features.items.garage.title'),
      subtitle: t('features.items.garage.subtitle'),
      description: t('features.items.garage.description'),
      icon: <PlusCircle className="w-5 h-5" />,
      image: emresTC, // Reusing local image for poster
      video: garagevid
    }
  ], [t]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, [features.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  }, [features.length]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, [handleNext, isHovered]);

  return (
    <section id="features" className="py-24 bg-[#050505] overflow-hidden relative border-b border-white/5 min-h-[850px] flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4438] opacity-[0.05] blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[#FF4438] uppercase tracking-[0.2em] mb-4"
          >
            {t('features.tag')}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tight leading-[0.9]"
          >
            {t('features.title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">{t('features.subtitle')}</span>
          </motion.h3>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full overflow-visible py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 relative flex items-center justify-center">

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-10 z-[40] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-xl group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#FF4438] translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-10 z-[40] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-xl group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#FF4438] translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Cards Wrapper */}
          <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
            <AnimatePresence initial={false} mode="popLayout">
              {features.map((feature, index) => {
                // Calculate distance from active index
                let distance = index - activeIndex;
                const total = features.length;

                // Proper modular distance for infinite loop feel
                if (distance > total / 2) distance -= total;
                if (distance < -total / 2) distance += total;

                const isActive = distance === 0;
                const isVisible = Math.abs(distance) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.8, x: distance * 400 }}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1.05 : 0.85,
                      x: distance * (window.innerWidth < 768 ? 200 : 280),
                      zIndex: isActive ? 30 : 20,
                      filter: isActive ? 'blur(0px)' : 'blur(4px)',
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      opacity: { duration: 0.4 }
                    }}
                    className="absolute cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <FeatureCard feature={feature} isActive={isActive} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {features.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden transition-all duration-500 rounded-full h-1.5 ${isActive ? 'w-10 bg-white/10' : 'w-2 bg-white/20 hover:bg-white/40'}`}
              >
                {isActive && !isHovered && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 bg-[#FF4438]"
                  />
                )}
                {isActive && isHovered && (
                  <div className="absolute inset-0 bg-[#FF4438]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: any; isActive: boolean }> = ({ feature, isActive }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (isActive && feature.video && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
    // Collapse description when card becomes inactive
    if (!isActive) {
      setShowDescription(false);
    }
  }, [isActive, feature.video]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: isActive ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative w-[280px] md:w-[256px] h-[480px] md:h-[432px] rounded-[30px] overflow-hidden group border border-white/10 select-none bg-[#111] shadow-2xl transition-all duration-500 ${isActive ? 'shadow-[#FF4438]/30 border-[#FF4438]/30' : 'grayscale-[0.5]'}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background Media */}
      {!feature.video ? (
        <img
          src={feature.image}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 scale-100 transition-all duration-1000"
          draggable={false}
        />
      ) : (
        <video
          ref={videoRef}
          src={feature.video}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive && isVideoReady ? 'opacity-100' : 'opacity-40'}`}
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setIsVideoReady(true)}
        />
      )}

      {/* Gradient Overlay - Dark gradient at bottom only */}
      <div className={`absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none transition-opacity duration-500 ${showDescription ? 'opacity-100' : 'opacity-90'}`}></div>

      {/* Glow Effect on Active Card */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4438]/20 via-transparent to-transparent pointer-events-none"></div>
      )}

      {/* Content - Constrained to bottom */}
      <div
        className={`absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'}`}
        style={{ transform: 'translateZ(50px)' }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FF4438] flex items-center justify-center text-white shadow-xl shrink-0">
            {feature.icon}
          </div>
          <span className="text-[#FF4438] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">{feature.subtitle}</span>
        </div>

        <h4 className="text-xl md:text-2xl font-black text-white mb-1 leading-none uppercase italic tracking-tighter">
          {feature.title}
        </h4>

        {/* View More Button */}
        {isActive && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDescription(!showDescription);
            }}
            className="flex items-center gap-1 text-white/70 hover:text-white text-[10px] md:text-xs uppercase tracking-widest font-bold mt-1 group/btn w-fit"
          >
            {showDescription ? t('features.viewLess') : t('features.viewMore')}
            <motion.span
              animate={{ rotate: showDescription ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={14} />
            </motion.span>
          </button>
        )}

        <AnimatePresence>
          {showDescription && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="text-gray-300 text-xs md:text-sm pt-2 pb-1 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Features;
