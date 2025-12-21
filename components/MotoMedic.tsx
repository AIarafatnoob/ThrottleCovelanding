import React, { useState } from 'react';
import { Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import MedicUnavailableModal from './MedicUnavailableModal';
import motomedic from './Assets/Features/motomedicsquad.png';
import { useLanguage } from '../context/LanguageContext';

const MotoMedic: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const { t } = useLanguage();

    return (
        <section id="moto-medic" className="py-16 bg-black text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-black"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">

                    <div className="md:w-1/2 order-2 md:order-1">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#FF4438] blur-[80px] opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-700"></div>
                            <img
                                src={motomedic}
                                alt="Mechanic on Bike"
                                className="relative rounded-[30px] border border-white/10 z-10 w-full grayscale hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Floating Trust Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-[#111111] text-white p-6 rounded-[24px] border border-white/10 shadow-2xl z-20 max-w-xs backdrop-blur-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <CheckCircle className="text-[#FF4438]" fill="currentColor" size={24} stroke="black" />
                                    <span className="font-bold text-lg">{t('motoMedic.genuine')}</span>
                                </div>
                                <p className="text-sm text-gray-400">{t('motoMedic.genuineDesc')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 order-1 md:order-2">
                        <h2 className="text-[#FF4438] font-bold tracking-widest uppercase text-sm mb-4">{t('motoMedic.tag')}</h2>
                        <h3 className="text-5xl md:text-6xl font-black mb-8 leading-none uppercase italic">
                            {t('motoMedic.title')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">{t('motoMedic.subtitle')}</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light border-l-2 border-[#FF4438] pl-6">
                            {t('motoMedic.description')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-5 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-[#FF4438]/50 transition-colors">
                                    <Clock className="text-[#FF4438]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1 text-white">{t('motoMedic.officeService')}</h4>
                                    <p className="text-gray-500 text-sm">{t('motoMedic.officeServiceDesc')}</p>
                                </div>
                            </div>

                            <div className="flex gap-5 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-[#FF4438]/50 transition-colors">
                                    <MapPin className="text-[#FF4438]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1 text-white">{t('motoMedic.dhakaService')}</h4>
                                    <p className="text-gray-500 text-sm">{t('motoMedic.dhakaServiceDesc')}</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            className="mt-12 bg-[#FF4438] text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all flex items-center gap-2 group uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(255,68,56,0.3)] hover:shadow-[0_0_30px_rgba(255,68,56,0.5)]"
                        >
                            {t('motoMedic.bookBtn')}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>

            <MedicUnavailableModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
};

export default MotoMedic;
