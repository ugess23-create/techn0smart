'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Zap, Shield, Users } from 'lucide-react';
import CallbackModal from './CallbackModal';

export default function Hero() {
  const t = useTranslations('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center gradient-hero pt-20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 animate-fade-in-up">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-accent-blue font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t('subtitle')}
            </p>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('description')}
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-lg px-8 py-4 rounded-xl animate-pulse-glow"
              >
                <span className="flex items-center gap-2">
                  <Zap size={20} />
                  {t('cta')}
                </span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-text-secondary">
                <Users size={20} className="text-accent-cyan" />
                <span>{t('trusted')}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Shield size={20} className="text-accent-cyan" />
                <span>Garantie</span>
              </div>
            </div>

            {/* Device icons */}
            <div className="mt-16 grid grid-cols-5 gap-4 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {['💻', '📱', '🎮', '🖥️', '🎧'].map((icon, index) => (
                <div
                  key={index}
                  className="w-16 h-16 md:w-20 md:h-20 bg-primary-800 rounded-2xl flex items-center justify-center text-2xl md:text-3xl border border-primary-700 hover:border-accent-blue hover:scale-110 transition-all duration-300"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-text-secondary rounded-full" />
          </div>
        </div>
      </section>

      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
