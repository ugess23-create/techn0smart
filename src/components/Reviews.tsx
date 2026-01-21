'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

// Reviews in different languages with language indicator
const reviews = [
  {
    id: 1,
    name: 'Thomas M.',
    rating: 5,
    text: 'Hervorragender Service! Mein MacBook wurde innerhalb eines Tages repariert. Sehr professionell und freundlich. Absolute Empfehlung!',
    device: 'MacBook Pro',
    lang: 'DE',
    source: 'Google',
  },
  {
    id: 2,
    name: 'Олексій К.',
    rating: 5,
    text: 'Відмінний сервіс! Зламався екран на iPhone, відремонтували за день. Ціни адекватні, майстри ввічливі. Рекомендую всім!',
    device: 'iPhone 14 Pro',
    lang: 'UK',
    source: 'Google',
  },
  {
    id: 3,
    name: 'Андрей С.',
    rating: 5,
    text: 'Принёс PlayStation 5 с проблемой HDMI порта. Сделали быстро и качественно. Консоль работает как новая. Спасибо большое!',
    device: 'PlayStation 5',
    lang: 'RU',
    source: 'Google',
  },
  {
    id: 4,
    name: 'Anna K.',
    rating: 5,
    text: 'Super schnell und zuverlässig. Das Display meines iPhones wurde perfekt ersetzt. Faire Preise und ehrliche Beratung!',
    device: 'iPhone 13',
    lang: 'DE',
    source: 'Google',
  },
  {
    id: 5,
    name: 'Michael B.',
    rating: 5,
    text: 'Excellent service! They fixed my laptop keyboard in just one day. Very professional team and reasonable prices. Highly recommended!',
    device: 'Dell XPS 15',
    lang: 'EN',
    source: 'Google',
  },
  {
    id: 6,
    name: 'Марія Л.',
    rating: 5,
    text: 'Дуже задоволена сервісом! Замінили батарею на моєму Samsung за годину. Працює ідеально. Дякую за швидкість!',
    device: 'Samsung Galaxy S23',
    lang: 'UK',
    source: 'Google',
  },
  {
    id: 7,
    name: 'Дмитрий В.',
    rating: 5,
    text: 'Ремонтировал Nintendo Switch. Проблема была с джойконом. Починили быстро, цена приятная. Буду обращаться ещё!',
    device: 'Nintendo Switch',
    lang: 'RU',
    source: 'Google',
  },
  {
    id: 8,
    name: 'Sarah W.',
    rating: 5,
    text: 'My iPad screen was cracked and they replaced it perfectly. The quality is amazing and the price was fair. Great experience!',
    device: 'iPad Pro',
    lang: 'EN',
    source: 'Google',
  },
];

const langFlags: Record<string, string> = {
  DE: '🇩🇪',
  EN: '🇬🇧',
  RU: '🇷🇺',
  UK: '🇺🇦',
};

export default function Reviews() {
  const t = useTranslations('reviews');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="reviews" className="section gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        {/* Google Maps Badge */}
        <div className="flex justify-center mb-8">
          <a
            href="https://www.google.com/maps/place/Techn0smart/@50.1000915,8.7206114,32m/data=!3m1!1e3!4m6!3m5!1s0x47bd0df98fa565dd:0x252ecba3a9196d37!8m2!3d50.1001009!4d8.7206603!16s%2Fg%2F11lz6r3vf_?hl=ru-RU&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary-800 rounded-xl border border-primary-700 hover:border-accent-blue transition-colors"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-text-primary font-medium">5.0</span>
            <span className="text-text-secondary">|</span>
            <MapPin size={18} className="text-accent-blue" />
            <span className="text-text-secondary">Google Maps</span>
          </a>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 p-3 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors z-10 border border-primary-600"
            aria-label="Previous review"
          >
            <ChevronLeft size={28} className="text-text-primary" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 p-3 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors z-10 border border-primary-600"
            aria-label="Next review"
          >
            <ChevronRight size={28} className="text-text-primary" />
          </button>

          {/* Review card */}
          <div className="bg-primary-800 rounded-2xl p-8 md:p-12 border border-primary-700 relative overflow-hidden">
            {/* Quote icon */}
            <Quote size={100} className="absolute top-4 right-4 text-primary-700 opacity-50" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Language flag and source */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{langFlags[reviews[currentIndex].lang]}</span>
                <span className="text-xs text-text-secondary bg-primary-700 px-2 py-1 rounded">
                  {reviews[currentIndex].source}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i < reviews[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-primary-600'}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-text-primary mb-8 italic max-w-3xl">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-full flex items-center justify-center text-primary-900 font-bold text-xl">
                  {reviews[currentIndex].name.charAt(0)}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-text-primary text-lg">{reviews[currentIndex].name}</p>
                  <p className="text-text-secondary">{reviews[currentIndex].device}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent-blue w-8'
                    : 'bg-primary-600 hover:bg-primary-500 w-2'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
