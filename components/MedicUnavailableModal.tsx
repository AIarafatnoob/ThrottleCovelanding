import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MedicUnavailableModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const MedicUnavailableModal: React.FC<MedicUnavailableModalProps> = ({ isOpen, onClose }) => {
   const { t } = useLanguage();
   const [stage, setStage] = useState<'loading' | 'form' | 'success'>('loading');
   const [email, setEmail] = useState('');

   // Reset state when modal opens
   useEffect(() => {
      if (isOpen) {
         setStage('loading');
         // Simulate 2 second search/loading
         const timer = setTimeout(() => {
            setStage('form');
         }, 2000);
         return () => clearTimeout(timer);
      }
   }, [isOpen]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) return;
      // Simulate submission
      setStage('success');
      setTimeout(() => {
         onClose();
      }, 2000);
   };

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
         {/* Backdrop */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
         />

         {/* Modal Container */}
         <AnimatePresence mode="wait">
            {stage === 'loading' ? (
               <motion.div
                  key="loader"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative z-10 w-[120px] h-[120px] bg-[#111] rounded-3xl border border-white/10 flex flex-col items-center justify-center shadow-2xl"
               >
                  <div className="relative">
                     <div className="absolute inset-0 bg-[#FF4438] blur-xl opacity-20 animate-pulse"></div>
                     <Loader2 size={40} className="text-[#FF4438] animate-spin relative z-10" />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-3 uppercase tracking-widest font-bold animate-pulse">{t('modal.searching')}</p>
               </motion.div>
            ) : (
               <motion.div
                  key="content"
                  initial={{ scale: 0.9, opacity: 0, height: 120 }}
                  animate={{ scale: 1, opacity: 1, height: 'auto' }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative z-10 w-full max-w-[380px] bg-[#111] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
               >
                  {/* Close Button */}
                  <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-20">
                     <X size={20} />
                  </button>

                  <div className="p-8 flex flex-col items-center text-center">
                     {stage === 'success' ? (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-8">
                           <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4 mx-auto border border-green-500/20">
                              <Check size={32} className="text-green-500" />
                           </div>
                           <h3 className="text-xl font-bold text-white mb-2">{t('modal.successTitle')}</h3>
                           <p className="text-gray-400 text-sm">{t('modal.successDesc')}</p>
                        </motion.div>
                     ) : (
                        <>
                           <div className="w-12 h-12 rounded-full bg-[#FF4438]/10 flex items-center justify-center mb-6 border border-[#FF4438]/20">
                              <Loader2 size={24} className="text-[#FF4438]" />
                           </div>

                           <h3 className="text-lg font-bold text-white mb-3">{t('modal.highDemand')}</h3>
                           <p className="text-gray-400 text-sm leading-relaxed mb-8">
                              {t('modal.highDemandDesc')}
                           </p>

                           <form onSubmit={handleSubmit} className="w-full">
                              <div className="relative">
                                 <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('modal.placeholder')}
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF4438] transition-colors pr-12"
                                    required
                                 />
                                 <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#FF4438] rounded-lg text-white hover:bg-red-600 transition-colors"
                                 >
                                    <ArrowRight size={16} />
                                 </button>
                              </div>
                              <p className="text-[10px] text-gray-600 mt-3 text-center">
                                 {t('modal.priority')}
                              </p>
                           </form>
                        </>
                     )}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default MedicUnavailableModal;
