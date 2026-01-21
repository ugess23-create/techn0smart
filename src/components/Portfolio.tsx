'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder portfolio items - replace with real images
const portfolioItems = [
  {
    id: 1,
    title: 'iPhone Screen Replacement',
    category: 'Smartphones',
    image: '/images/portfolio/placeholder-1.jpg',
  },
  {
    id: 2,
    title: 'MacBook Pro Repair',
    category: 'Laptops',
    image: '/images/portfolio/placeholder-2.jpg',
  },
  {
    id: 3,
    title: 'PS5 HDMI Fix',
    category: 'Consoles',
    image: '/images/portfolio/placeholder-3.jpg',
  },
  {
    id: 4,
    title: 'Monitor Backlight Repair',
    category: 'Monitors',
    image: '/images/portfolio/placeholder-4.jpg',
  },
  {
    id: 5,
    title: 'Nintendo Switch Fix',
    category: 'Consoles',
    image: '/images/portfolio/placeholder-5.jpg',
  },
];

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === portfolioItems.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="portfolio" className="section bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-800 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">
                    {item.category === 'Smartphones' && '📱'}
                    {item.category === 'Laptops' && '💻'}
                    {item.category === 'Consoles' && '🎮'}
                    {item.category === 'Monitors' && '🖥️'}
                  </div>
                  <p className="text-text-secondary text-sm">{item.category}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-text-primary font-medium">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 p-2 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors"
          >
            <ChevronLeft size={32} className="text-text-primary" />
          </button>

          <div
            className="relative max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-primary-800 rounded-2xl p-4">
              <div className="aspect-video bg-gradient-to-br from-primary-700 to-primary-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {portfolioItems[selectedImage].category === 'Smartphones' && '📱'}
                    {portfolioItems[selectedImage].category === 'Laptops' && '💻'}
                    {portfolioItems[selectedImage].category === 'Consoles' && '🎮'}
                    {portfolioItems[selectedImage].category === 'Monitors' && '🖥️'}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {portfolioItems[selectedImage].title}
                  </h3>
                  <p className="text-text-secondary">
                    {portfolioItems[selectedImage].category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 p-2 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors"
          >
            <ChevronRight size={32} className="text-text-primary" />
          </button>

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors"
          >
            <X size={24} className="text-text-primary" />
          </button>
        </div>
      )}
    </section>
  );
}
