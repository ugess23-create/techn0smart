'use client';

import { useTranslations } from 'next-intl';
import { Battery, Smartphone, Square } from 'lucide-react';
import type { PriceCategory } from '@/data/prices';

const iconMap = {
  battery: Battery,
  display: Smartphone,
  backGlass: Square,
};

export default function PriceCard({ category }: { category: PriceCategory }) {
  const t = useTranslations('pricing');
  const Icon = iconMap[category.icon];

  return (
    <div className="relative rounded-2xl overflow-hidden price-card-bg p-6 md:p-8 border border-accent-cyan/20 shadow-[0_0_60px_rgba(34,211,238,0.08)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-accent-cyan/20">
        <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
          <Icon className="text-accent-cyan" size={24} strokeWidth={1.8} />
        </div>
        <h3 className="text-text-primary text-lg md:text-xl font-bold tracking-tight">
          {t(`categories.${category.titleKey}`)}
        </h3>
      </div>

      {/* Items */}
      <ul className="space-y-2.5">
        {category.items.map((item, i) => (
          <li
            key={i}
            className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0 group"
          >
            <span className="text-text-primary/90 text-sm md:text-base flex items-center gap-2 font-medium">
              <span className="text-accent-cyan">•</span>
              {item.model}
            </span>
            <span className="text-accent-cyan text-base md:text-lg font-bold whitespace-nowrap group-hover:text-white transition-colors">
              {item.price} €
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
