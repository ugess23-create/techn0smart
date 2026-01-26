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
              className="bg-primary-800 rounded-2xl border border-primary-700 p-6 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/10 aspect-square flex flex-col justify-center items-center text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="text-accent-blue flex-shrink-0" size={20} />
                <h3 className="text-sm text-accent-blue leading-tight">
                  {t(`${key}.question`)}
                </h3>
              </div>
              <p className="text-3xl font-bold text-text-primary">
                {t(`${key}.answer`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
