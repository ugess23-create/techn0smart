'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Battery, Smartphone, Square, ChevronRight } from 'lucide-react';
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
        {/* Title with cyan accent underline */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="section-title relative inline-block mb-0">
            {t('title')}
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-20 h-[3px] bg-accent-cyan rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </h2>
          <p className="section-subtitle mt-8 mb-0">{t('subtitle')}</p>
        </div>

        {/* Stacked category cards */}
        <div className="max-w-2xl mx-auto flex flex-col gap-4 md:gap-5 mb-12">
          {items.map(({ key, icon: Icon }) => (
            <Link
              key={key}
              href={`/${locale}/prices?category=${key}`}
              className="group relative flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-primary-800/40 border border-accent-cyan/30 hover:border-accent-cyan transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_25px_rgba(34,211,238,0.08)] hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center flex-shrink-0 shadow-[0_0_25px_rgba(34,211,238,0.45)]">
                <Icon size={30} className="text-primary-900" strokeWidth={2.2} />
              </div>
              <h3 className="flex-1 text-lg md:text-xl font-semibold text-text-primary">
                {t(`shortCategories.${key}`)}
              </h3>
              <ChevronRight size={24} className="text-accent-cyan flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        {/* Big CTA button */}
        <div className="flex flex-col items-center">
          <Link
            href={`/${locale}/prices`}
            className="inline-flex items-center justify-between gap-6 w-full max-w-2xl bg-gradient-to-b from-[#5fdaf0] to-accent-cyan text-primary-900 font-bold text-xl md:text-2xl pl-10 pr-3 py-3 md:py-4 rounded-full transition-all hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:-translate-y-0.5"
          >
            <span className="flex-1 text-center">{t('viewPrices')}</span>
            <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0">
              <ArrowRight size={22} className="text-accent-cyan" />
            </span>
          </Link>

          <p className="text-text-muted text-xs md:text-sm leading-relaxed text-center mt-10 md:mt-12 max-w-3xl">
            {t('note')}
          </p>
        </div>
      </div>
    </section>
  );
}
