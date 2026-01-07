import React, { useState, useEffect } from 'react';
import { Check, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface ShareButtonProps {
    isFloating?: boolean;
    className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ isFloating = true, className = "" }) => {
    const { t } = useLanguage();
    const [referralId, setReferralId] = useState<string>('');
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        // Initialize or retrieve referral ID
        try {
            let storedId = localStorage.getItem('tc_ref_id');
            if (!storedId) {
                storedId = Math.random().toString(36).substring(2, 9).toUpperCase();
                localStorage.setItem('tc_ref_id', storedId);
            }
            setReferralId(storedId);
        } catch (error) {
            console.error('Storage access denied:', error);
            // Fallback ID if storage is blocked
            setReferralId('THROTTLE');
        }
    }, []);

    const handleShare = async () => {
        const shareUrl = `${window.location.origin}?ref=${referralId}`;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'ThrottleCove',
                    text: 'Join the first comprehensive digital garage for Bangladesh!',
                    url: shareUrl,
                });
            } else if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(shareUrl);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            } else {
                // Fallback for non-secure contexts (HTTP) or unsupported browsers
                const tempInput = document.createElement('input');
                tempInput.value = shareUrl;
                document.body.appendChild(tempInput);
                tempInput.select();
                const successful = document.execCommand('copy');
                document.body.removeChild(tempInput);

                if (successful) {
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                } else {
                    // Final fallback: just alert or show a prompt
                    window.prompt('Copy this link to share:', shareUrl);
                }
            }
        } catch (error) {
            console.error('Error sharing:', error);
            // Fallback prompt if clipboard fails
            window.prompt('Copy this link to share:', shareUrl);
        }
    };

    const buttonContent = (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className={`pointer-events-auto flex items-center justify-center rounded-full bg-[#FF4438] shadow-[0_0_25px_rgba(255,68,56,0.6)] border border-[#FF4438]/50 group transition-all duration-300 overflow-hidden relative ${className}`}
        >
            {/* Gloss Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

            {isCopied ? (
                <Check size={16} className="text-white relative z-10" />
            ) : (
                <Share2 size={16} className="text-white relative z-10" />
            )}
        </motion.button>
    );

    if (!isFloating) {
        return (
            <div className="relative">
                <AnimatePresence>
                    {isCopied && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute bottom-full right-0 mb-4 bg-white text-black px-4 py-2 rounded-xl shadow-2xl text-sm font-bold border border-gray-200 whitespace-nowrap z-[130]"
                        >
                            {t('cta.shareSuccess')}
                        </motion.div>
                    )}
                </AnimatePresence>
                {buttonContent}
            </div>
        );
    }

    return (
        <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[120] flex flex-col items-end gap-3 pointer-events-none">
            <AnimatePresence>
                {isCopied && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="bg-white text-black px-4 py-2 rounded-xl shadow-2xl text-sm font-bold border border-gray-200 mb-2"
                    >
                        {t('cta.shareSuccess')}
                    </motion.div>
                )}
            </AnimatePresence>
            {buttonContent}
        </div>
    );
};

export default ShareButton;
