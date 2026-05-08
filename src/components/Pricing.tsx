'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Battery, Smartphone, Square } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  return (
    <section id="pricing" className="section bg-primary-900 font-[family-name:var(--font-display)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="flex justify-center">
        <div className="w-full max-w-3xl bg-gradient-to-br from-primary-800 to-primary-700 rounded-2xl p-6 md:p-10 border border-accent-cyan/20 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
          {/* Quick preview icons — always 3 columns, full card width */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                <Battery className="text-accent-cyan" size={28} strokeWidth={1.8} />
              </div>
              <span className="text-text-secondary text-xs md:text-sm leading-tight">{t('categories.battery')}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                <Smartphone className="text-accent-cyan" size={28} strokeWidth={1.8} />
              </div>
              <span className="text-text-secondary text-xs md:text-sm leading-tight">{t('categories.display')}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                <Square className="text-accent-cyan" size={28} strokeWidth={1.8} />
              </div>
              <span className="text-text-secondary text-xs md:text-sm leading-tight">{t('categories.backGlass')}</span>
            </div>
          </div>

          <p
            className="text-text-secondary text-center mb-6 text-base md:text-lg leading-relaxed"
            style={{ textWrap: 'balance' }}
          >
            {t('description')}
          </p>

          <div className="flex justify-center">
            <Link
              href={`/${locale}/prices`}
              className="inline-flex items-center gap-2 bg-accent-cyan hover:bg-accent-cyan/90 text-primary-900 font-bold text-base md:text-lg px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-0.5"
            >
              {t('viewPrices')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
