
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MotoMedic from './components/MotoMedic';
import Footer from './components/Footer';
import GarageDoorCta from './components/GarageDoorCta';
import ShareButton from './components/ShareButton';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 700px of scroll
      if (window.scrollY > 700) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    // Trigger immediately in case we load already scrolled down
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4438] selection:text-white pb-20 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MotoMedic />
      </main>
      <Footer />
      {/* ShareButton is now integrated into the sticky CTA bar */}

      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed bottom-[calc(1.2rem+env(safe-area-inset-bottom))] left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none"
          >
            <div className="flex items-center gap-2 md:gap-3 pointer-events-auto">
              <div className="shadow-2xl rounded-full overflow-hidden">
                <GarageDoorCta className="w-[230px] sm:w-[300px] h-12 md:h-14" />
              </div>
              <ShareButton
                isFloating={false}
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
