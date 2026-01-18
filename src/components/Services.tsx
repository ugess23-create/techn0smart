'use client';

import { useTranslations } from 'next-intl';
import { Laptop, Smartphone, Gamepad2, Monitor, Headphones } from 'lucide-react';

const services = [
  { key: 'laptop', icon: Laptop },
  { key: 'phone', icon: Smartphone },
  { key: 'console', icon: Gamepad2 },
  { key: 'monitor', icon: Monitor },
  { key: 'headphones', icon: Headphones },
];

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="section bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map(({ key, icon: Icon }) => (
            <div key={key} className="card group text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 rounded-2xl flex items-center justify-center group-hover:from-accent-blue/30 group-hover:to-accent-cyan/30 transition-colors duration-300">
                <Icon size={32} className="text-accent-blue" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t(`${key}.title`)}
              </h3>
              <p className="text-text-secondary text-sm">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
