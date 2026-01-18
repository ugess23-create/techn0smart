'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqKeys.map((key, index) => (
            <div
              key={key}
              className="bg-primary-800 rounded-xl border border-primary-700 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-700/50 transition-colors"
              >
                <span className="font-medium text-text-primary pr-4">
                  {t(`${key}.question`)}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-accent-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-text-secondary">
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
