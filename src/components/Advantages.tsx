'use client';

import { useTranslations } from 'next-intl';
import { Zap, Shield, Banknote, Award } from 'lucide-react';

const advantages = [
  { key: 'fast', icon: Zap },
  { key: 'warranty', icon: Shield },
  { key: 'price', icon: Banknote },
  { key: 'experience', icon: Award },
];

export default function Advantages() {
  const t = useTranslations('advantages');

  return (
    <section id="advantages" className="section gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {advantages.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className="relative p-8 rounded-2xl bg-primary-800/50 border border-primary-700 hover:border-accent-blue transition-all duration-300 group overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Number */}
                <div className="absolute -top-2 right-0 w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center text-xl font-bold text-primary-500">
                  {index + 1}
                </div>

                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-xl flex items-center justify-center">
                  <Icon size={28} className="text-primary-900" />
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-text-secondary">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
