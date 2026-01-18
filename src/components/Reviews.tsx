'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Placeholder reviews - replace with real ones
const reviews = [
  {
    id: 1,
    name: 'Thomas M.',
    rating: 5,
    text: 'Hervorragender Service! Mein MacBook wurde innerhalb eines Tages repariert. Sehr professionell und freundlich.',
    device: 'MacBook Pro',
  },
  {
    id: 2,
    name: 'Anna K.',
    rating: 5,
    text: 'Super schnell und zuverlässig. Das Display meines iPhones wurde perfekt ersetzt. Kann ich nur empfehlen!',
    device: 'iPhone 13',
  },
  {
    id: 3,
    name: 'Michael S.',
    rating: 5,
    text: 'Meine PS5 hatte einen HDMI-Defekt. Wurde in 2 Tagen repariert und funktioniert wieder einwandfrei!',
    device: 'PlayStation 5',
  },
  {
    id: 4,
    name: 'Julia W.',
    rating: 5,
    text: 'Faire Preise und ehrliche Beratung. Mein alter Monitor wurde repariert statt mir einen neuen zu verkaufen.',
    device: 'Dell Monitor',
  },
  {
    id: 5,
    name: 'Stefan B.',
    rating: 5,
    text: 'Meine Sony Kopfhörer sind wie neu. Die Reparatur hat sich absolut gelohnt. Vielen Dank!',
    device: 'Sony WH-1000XM4',
  },
];

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

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors z-10 border border-primary-600"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} className="text-text-primary" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors z-10 border border-primary-600"
            aria-label="Next review"
          >
            <ChevronRight size={24} className="text-text-primary" />
          </button>

          {/* Review card */}
          <div className="bg-primary-800 rounded-2xl p-6 md:p-10 border border-primary-700 relative overflow-hidden">
            {/* Quote icon */}
            <Quote size={80} className="absolute top-4 right-4 text-primary-700 opacity-50" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < reviews[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-primary-600'}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-text-primary mb-6 italic">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-full flex items-center justify-center text-primary-900 font-bold text-lg">
                  {reviews[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{reviews[currentIndex].name}</p>
                  <p className="text-text-secondary text-sm">{reviews[currentIndex].device}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent-blue w-8'
                    : 'bg-primary-600 hover:bg-primary-500'
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
