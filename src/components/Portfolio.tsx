'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

type WorkItem = {
  id: number;
  title: string;
  before: string;
  after: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const phoneWorks: WorkItem[] = [
  {
    id: 1,
    title: 'Замена задней крышки iPhone',
    before: '/images/portfolio/iphone-back-before.jpg',
    after: '/images/portfolio/iphone-back-after.jpg',
  },
  {
    id: 2,
    title: 'Замена дисплея iPhone',
    before: '/images/portfolio/iphone-display-before.jpg',
    after: '/images/portfolio/iphone-display-after.jpg',
  },
  {
    id: 3,
    title: 'Замена батареи iPhone',
    before: '/images/portfolio/iphone-battery-before.jpg',
    after: '/images/portfolio/iphone-battery-after.jpg',
  },
];

const laptopWorks: WorkItem[] = [
  {
    id: 1,
    title: 'Чистка ноутбука и замена термопасты',
    before: '/images/portfolio/laptop-cleaning-before.jpg',
    after: '/images/portfolio/laptop-cleaning-after.jpg',
  },
];

// ─── Before/After Slider ──────────────────────────────────────────────────────

type SliderProps = {
  before: string;
  after: string;
  title: string;
  aspectClass?: string;
};

function BeforeAfterSlider({ before, after, title, aspectClass = 'aspect-[3/4]' }: SliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 0), 100);
    setSliderPos(pos);
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updateSlider(e.clientX); };
  const onMouseUp = () => { isDragging.current = false; };
  const onTouchStart = (e: React.TouchEvent) => { e.preventDefault(); updateSlider(e.touches[0].clientX); };
  const onTouchMove = (e: React.TouchEvent) => { e.preventDefault(); updateSlider(e.touches[0].clientX); };

  return (
    <div className="rounded-2xl overflow-hidden bg-primary-800 shadow-xl">
      <div
        ref={containerRef}
        className={`relative ${aspectClass} select-none cursor-ew-resize overflow-hidden`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {/* Before */}
        <div className="absolute inset-0">
          <Image
            src={before}
            alt="До"
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider">
            ДО
          </div>
        </div>

        {/* After */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={after}
            alt="После"
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute bottom-3 right-3 bg-accent-blue/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider">
            ПОСЛЕ
          </div>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <ChevronLeft size={12} className="text-primary-900" />
          <ChevronRight size={12} className="text-primary-900" />
        </div>

        {/* Hint */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full pointer-events-none opacity-60 whitespace-nowrap">
          ← тяни для сравнения →
        </div>
      </div>

      {/* Title */}
      <div className="px-5 py-4 text-center border-t border-primary-700">
        <h3 className="text-text-primary font-semibold text-base">{title}</h3>
      </div>
    </div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

type CarouselProps = {
  items: WorkItem[];
  aspectClass?: string;
  maxWidthClass?: string;
};

function WorkCarousel({ items, aspectClass, maxWidthClass = 'max-w-xs sm:max-w-sm' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => setCurrentIndex(i => (i === 0 ? items.length - 1 : i - 1));
  const handleNext = () => setCurrentIndex(i => (i === items.length - 1 ? 0 : i + 1));

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev();
    touchStartX.current = null;
  };

  return (
    <div className={`${maxWidthClass} mx-auto`}>
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <BeforeAfterSlider
          key={items[currentIndex].id}
          before={items[currentIndex].before}
          after={items[currentIndex].after}
          title={items[currentIndex].title}
          aspectClass={aspectClass}
        />
      </div>

      {/* Navigation — only show if more than one item */}
      {items.length > 1 && (
        <div className="flex items-center justify-center gap-5 mt-6">
          <button
            onClick={handlePrev}
            className="p-2.5 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors"
            aria-label="Предыдущая работа"
          >
            <ChevronLeft size={22} className="text-text-primary" />
          </button>

          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-6 h-2.5 bg-accent-blue'
                    : 'w-2.5 h-2.5 bg-primary-600 hover:bg-primary-500'
                }`}
                aria-label={`Работа ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 bg-primary-800 rounded-full hover:bg-primary-700 transition-colors"
            aria-label="Следующая работа"
          >
            <ChevronRight size={22} className="text-text-primary" />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section id="portfolio" className="section bg-primary-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="space-y-16">
          {/* Phones block */}
          <div>
            <h3 className="text-center text-text-secondary text-sm font-semibold uppercase tracking-widest mb-8">
              📱 Смартфоны
            </h3>
            <WorkCarousel
              items={phoneWorks}
              aspectClass="aspect-[3/4]"
              maxWidthClass="max-w-xs sm:max-w-sm"
            />
          </div>

          {/* Laptops block */}
          <div>
            <h3 className="text-center text-text-secondary text-sm font-semibold uppercase tracking-widest mb-8">
              💻 Ноутбуки
            </h3>
            <WorkCarousel
              items={laptopWorks}
              aspectClass="aspect-video"
              maxWidthClass="max-w-lg sm:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
