import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ThankYouModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [stage, setStage] = useState<'initial' | 'betaJoined'>('initial');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setStage('initial');
        }
    }, [isOpen]);

    const handleJoinBeta = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStage('betaJoined');
        }, 1500);
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
                <motion.div
                    key={stage}
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative z-10 w-full max-w-[420px] bg-[#111] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                >
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-20">
                        <X size={20} />
                    </button>

                    <div className="p-8 flex flex-col items-center text-center">
                        {stage === 'initial' ? (
                            <>
                                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                                    <Check size={32} className="text-green-500" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{t('thankYouModal.title')}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {t('thankYouModal.message')}
                                </p>

                                <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                                <h4 className="text-white font-semibold mb-4">{t('thankYouModal.betaPrompt')}</h4>

                                <div className="flex gap-3 w-full">
                                    <button
                                        onClick={onClose}
                                        className="flex-1 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                                    >
                                        {t('thankYouModal.no')}
                                    </button>
                                    <button
                                        onClick={handleJoinBeta}
                                        disabled={isLoading}
                                        className="flex-1 py-3 rounded-xl bg-[#FF4438] text-white hover:bg-red-600 transition-colors text-sm font-bold flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? <Loader2 size={16} className="animate-spin" /> : null}
                                        {t('thankYouModal.yes')}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="py-8">
                                <div className="w-20 h-20 rounded-full bg-[#FF4438]/10 flex items-center justify-center mb-6 mx-auto border border-[#FF4438]/20 animate-pulse">
                                    <Check size={40} className="text-[#FF4438]" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{t('thankYouModal.betaSuccessTitle')}</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {t('thankYouModal.betaSuccessMessage')}
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-8 px-8 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ThankYouModal;
