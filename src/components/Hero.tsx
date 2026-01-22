'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Zap, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import CallbackModal from './CallbackModal';

export default function Hero() {
  const t = useTranslations('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-20 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/3 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Layout */}
          <div className="grid lg:grid-cols-12 gap-4 items-center min-h-[70vh]">

            {/* Left - MacBook PNG */}
            <div className="lg:col-span-4 relative hidden lg:flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/images/macbooks-hero.png"
                  alt="MacBook"
                  width={520}
                  height={290}
                  className="object-contain relative z-10 opacity-90"
                  style={{
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                  }}
                  priority
                />
              </div>
            </div>

            {/* Center - Text Content */}
            <div className="lg:col-span-4 text-center py-8">
              {/* Main title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
                {t('title')}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {t('titleLine2')}
              </h2>

              {/* Slogan */}
              <p className="text-xl sm:text-2xl text-accent-cyan font-medium mb-4">
                {t('slogan')}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-md mx-auto">
                {t('description')}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-base sm:text-lg px-8 py-4 rounded-xl mb-8"
              >
                <span className="flex items-center justify-center gap-2">
                  <Zap size={20} />
                  {t('cta')}
                </span>
              </button>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm">
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Users size={18} className="text-accent-cyan" />
                  <span>{t('trusted')}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Shield size={18} className="text-accent-cyan" />
                  <span>Garantie</span>
                </div>
              </div>
            </div>

            {/* Right - iPhone PNG */}
            <div className="lg:col-span-4 relative hidden lg:flex justify-center items-center">
              <div className="relative">
                <Image
                  src="/images/iphone-hero.png"
                  alt="iPhone"
                  width={280}
                  height={500}
                  className="object-contain relative z-10 opacity-90"
                  style={{
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile devices - only on small screens */}
          <div className="lg:hidden flex justify-center items-center gap-6 mb-8">
            <Image
              src="/images/macbooks-hero.png"
              alt="MacBook"
              width={200}
              height={112}
              className="object-contain opacity-90"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
              }}
            />
            <Image
              src="/images/iphone-hero.png"
              alt="iPhone"
              width={80}
              height={160}
              className="object-contain opacity-90"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
              }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 bg-gray-600 rounded-full" />
          </div>
        </div>
      </section>

      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
