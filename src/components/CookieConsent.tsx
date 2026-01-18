'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const t = useTranslations('cookie');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto">
        <div className="bg-primary-800 rounded-2xl p-4 md:p-6 border border-primary-700 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Icon & Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cookie size={20} className="text-accent-blue" />
              </div>
              <div>
                <p className="text-text-primary text-sm md:text-base">
                  {t('message')}{' '}
                  <Link
                    href="/cookie-policy"
                    className="text-accent-blue hover:underline"
                  >
                    {t('learnMore')}
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="btn-secondary text-sm px-4 py-2"
              >
                {t('decline')}
              </button>
              <button
                onClick={handleAccept}
                className="btn-primary text-sm px-4 py-2"
              >
                {t('accept')}
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={handleDecline}
              className="absolute top-2 right-2 md:hidden p-1 text-text-muted hover:text-text-primary"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
