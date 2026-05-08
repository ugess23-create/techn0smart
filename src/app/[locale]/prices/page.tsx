'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft, Battery, Smartphone, Square } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCard from '@/components/PriceCard';
import { priceCategories } from '@/data/prices';

const iconMap = {
  battery: Battery,
  display: Smartphone,
  backGlass: Square,
};

export default function PricesPage() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const [activeId, setActiveId] = useState(priceCategories[0].id);

  const activeCategory = priceCategories.find((c) => c.id === activeId) ?? priceCategories[0];

  return (
    <>
      <Header variant="static" />
      <main className="pt-10 pb-16 min-h-screen prices-page-bg font-[family-name:var(--font-display)]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back button */}
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors mb-10"
            >
              <ArrowLeft size={20} />
              {t('back')}
            </Link>

            {/* Category tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              {priceCategories.map((category) => {
                const Icon = iconMap[category.icon];
                const isActive = category.id === activeId;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveId(category.id)}
                    className={`relative p-5 md:p-6 rounded-2xl border transition-all duration-300 group overflow-hidden text-left ${
                      isActive
                        ? 'bg-accent-cyan/10 border-accent-cyan shadow-[0_0_30px_rgba(34,211,238,0.25)]'
                        : 'bg-primary-800/50 border-primary-700 hover:border-accent-blue'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive
                            ? 'bg-gradient-to-br from-accent-blue to-accent-cyan'
                            : 'bg-primary-700 group-hover:bg-gradient-to-br group-hover:from-accent-blue group-hover:to-accent-cyan'
                        }`}
                      >
                        <Icon
                          size={26}
                          className={isActive ? 'text-primary-900' : 'text-accent-cyan group-hover:text-primary-900'}
                        />
                      </div>
                      <h3
                        className={`text-base md:text-lg font-semibold leading-snug ${
                          isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                        }`}
                      >
                        {t(`shortCategories.${category.titleKey}`)}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected category prices */}
            <div className="max-w-2xl mx-auto" key={activeCategory.id}>
              <div className="animate-[fadeInUp_0.3s_ease-out]">
                <PriceCard category={activeCategory} />
              </div>
            </div>

            {/* Note */}
            <p className="text-center text-text-muted text-sm mt-12 max-w-2xl mx-auto">
              {t('disclaimer')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
