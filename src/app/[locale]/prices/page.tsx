'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCard from '@/components/PriceCard';
import { priceCategories } from '@/data/prices';

export default function PricesPage() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  return (
    <>
      <Header />
      <main className="pt-44 md:pt-48 pb-16 min-h-screen prices-page-bg font-[family-name:var(--font-display)]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Back button */}
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors mb-10"
            >
              <ArrowLeft size={20} />
              {t('back')}
            </Link>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {priceCategories.map((category) => (
                <PriceCard key={category.id} category={category} />
              ))}
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
