'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle } from 'lucide-react';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

export default function FAQ() {
  const t = useTranslations('faq');

  return (
    <section id="faq" className="section bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('title')}</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqKeys.map((key) => (
            <div
              key={key}
              className="bg-primary-800 rounded-2xl border border-primary-700 p-8 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/10"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="text-accent-blue flex-shrink-0 mt-1" size={24} />
                <h3 className="font-semibold text-lg text-text-primary leading-tight">
                  {t(`${key}.question`)}
                </h3>
              </div>
              <div className="pl-9">
                <p className="text-2xl font-bold text-accent-blue">
                  {t(`${key}.answer`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
