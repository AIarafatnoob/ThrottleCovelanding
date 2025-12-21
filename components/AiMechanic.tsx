import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, Loader2, Sparkles, Wrench } from 'lucide-react';
import { ChatMessage } from '../types';
import { useLanguage } from '../context/LanguageContext';

const AiMechanic: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: t('aiMechanic.welcome') }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.VITE_API_KEY || '' });

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: `System Instruction: ${t('aiMechanic.systemInstruction')} \n\nUser Question: ${userMessage}` }]
          }
        ]
      });

      const text = response.text || t('aiMechanic.interrupted');
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: t('aiMechanic.error') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-mechanic" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-300 font-medium text-xs mb-6 border border-white/10 uppercase tracking-wider">
              <Sparkles size={14} className="text-[#FF4438]" />
              <span>{t('aiMechanic.tag')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic">
              {t('aiMechanic.title')} <span className="text-[#FF4438]">{t('aiMechanic.subtitle')}</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
              {t('aiMechanic.description')}
            </p>
            <ul className="space-y-4">
              {(t('aiMechanic.features') as string[]).map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#FF4438]/20 flex items-center justify-center text-[#FF4438] text-xs">
                    <Wrench size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#111111] rounded-[30px] shadow-2xl border border-white/10 overflow-hidden h-[500px] flex flex-col relative">

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

              {/* Chat Header */}
              <div className="bg-[#151515] p-5 border-b border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF4438] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,68,56,0.3)]">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-wide">{t('aiMechanic.header')}</h4>
                  <p className="text-xs text-[#FF4438] font-medium flex items-center gap-2 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4438] animate-pulse"></span> {t('aiMechanic.online')}
                  </p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/40">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed backdrop-blur-sm ${msg.role === 'user'
                        ? 'bg-[#FF4438] text-white rounded-tr-none shadow-[0_5px_15px_rgba(255,68,56,0.2)]'
                        : 'bg-[#1a1a1a] border border-white/10 text-gray-300 rounded-tl-none'
                      }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                      <Loader2 size={16} className="animate-spin text-[#FF4438]" />
                      <span className="text-xs text-gray-500 uppercase tracking-wider">{t('aiMechanic.analyzing')}</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-[#151515] border-t border-white/5">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={t('aiMechanic.placeholder')}
                    className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4438]/50 focus:ring-1 focus:ring-[#FF4438]/50 text-white placeholder-gray-600 transition-all"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading}
                    className="bg-[#FF4438] text-white p-3 rounded-xl hover:bg-red-600 transition-all disabled:opacity-50 disabled:hover:bg-[#FF4438]"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiMechanic;