'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Battery, Smartphone, Square } from 'lucide-react';
import Link from 'next/link';

const items = [
  { key: 'battery', icon: Battery },
  { key: 'display', icon: Smartphone },
  { key: 'backGlass', icon: Square },
];

export default function Pricing() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  return (
    <section id="pricing" className="section bg-primary-900 font-[family-name:var(--font-display)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Three Advantages-style cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {items.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="relative p-8 rounded-2xl bg-primary-800/50 border border-primary-700 hover:border-accent-blue transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-xl flex items-center justify-center">
                    <Icon size={28} className="text-primary-900" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary leading-snug">
                    {t(`shortCategories.${key}`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <p className="text-text-secondary text-center mb-8 text-base md:text-lg leading-relaxed">
            {t('description')}
          </p>

          <div className="flex justify-center">
            <Link
              href={`/${locale}/prices`}
              className="inline-flex items-center gap-3 bg-accent-cyan hover:bg-accent-cyan/90 text-primary-900 font-bold text-lg md:text-xl px-10 md:px-12 py-5 md:py-6 rounded-xl transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:-translate-y-0.5"
            >
              {t('viewPrices')}
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
