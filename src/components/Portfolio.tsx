'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

type WorkItem = {
  id: number;
  titleKey: string;
  before: string;
  after: string;
};

const batteryWorks: WorkItem[] = [
  {
    id: 1,
    titleKey: 'batteryReplacement',
    before: '/images/portfolio/iphone-battery-before.jpg',
    after: '/images/portfolio/iphone-battery-after.jpg',
  },
];

const displayAndBackWorks: WorkItem[] = [
  {
    id: 1,
    titleKey: 'iphoneDisplay',
    before: '/images/portfolio/iphone-display-before.jpg',
    after: '/images/portfolio/iphone-display-after.jpg',
  },
  {
    id: 2,
    titleKey: 'samsungDisplay',
    before: '/images/portfolio/samsung-display-before.jpg',
    after: '/images/portfolio/samsung-display-after.jpg',
  },
  {
    id: 3,
    titleKey: 'iphoneBack',
    before: '/images/portfolio/iphone-back-before.jpg',
    after: '/images/portfolio/iphone-back-after.jpg',
  },
];

const laptopWorks: WorkItem[] = [
  {
    id: 1,
    titleKey: 'laptopCleaning',
    before: '/images/portfolio/laptop-cleaning-before.jpg',
    after: '/images/portfolio/laptop-cleaning-after.jpg',
  },
];

// ─── Before/After Slider ──────────────────────────────────────────────────────

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
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
  const onTouchStart = (e: React.TouchEvent) => { e.stopPropagation(); updateSlider(e.touches[0].clientX); };
  const onTouchMove = (e: React.TouchEvent) => { e.stopPropagation(); updateSlider(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 cursor-ew-resize select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      <div className="absolute inset-0">
        <Image src={before} alt="До" fill className="object-contain pointer-events-none" sizes="(max-width: 768px) 50vw, 33vw" />
      </div>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <Image src={after} alt="После" fill className="object-contain pointer-events-none" sizes="(max-width: 768px) 50vw, 33vw" />
      </div>

      <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-md z-10 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center">
          <ChevronLeft size={9} className="text-primary-900" />
          <ChevronRight size={9} className="text-primary-900" />
        </div>
      </div>
    </div>
  );
}

// ─── Card with carousel ───────────────────────────────────────────────────────

function WorkCell({ works }: { works: WorkItem[] }) {
  const t = useTranslations('portfolio');
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIndex(i => (i === 0 ? works.length - 1 : i - 1)); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIndex(i => (i === works.length - 1 ? 0 : i + 1)); };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? setIndex(i => (i === works.length - 1 ? 0 : i + 1)) : setIndex(i => (i === 0 ? works.length - 1 : i - 1));
    touchStartX.current = null;
  };

  const work = works[index];

  return (
    <div className="flex flex-col gap-3 font-[family-name:var(--font-display)]">
      {/* Image area with slider */}
      <div
        className="relative aspect-square rounded-xl overflow-hidden bg-primary-800 group"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <BeforeAfterSlider key={work.id} before={work.before} after={work.after} />

        {works.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight size={16} className="text-white" />
            </button>

            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 pointer-events-none">
              {works.map((_, i) => (
                <span key={i} className={`rounded-full transition-all ${i === index ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Before / After labels */}
      <div className="flex items-center justify-between px-1">
        <span className="text-accent-cyan text-base md:text-lg font-bold uppercase tracking-[0.2em]">{t('before')}</span>
        <span className="text-text-muted text-xs">←  →</span>
        <span className="text-accent-blue text-base md:text-lg font-bold uppercase tracking-[0.2em]">{t('after')}</span>
      </div>

      {/* Title — animated on change */}
      <p
        key={work.id}
        className="text-text-primary text-base md:text-lg font-semibold text-center leading-snug animate-[fadeInUp_0.4s_ease-out]"
      >
        {t(`works.${work.titleKey}`)}
      </p>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section id="portfolio" className="section bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <WorkCell works={batteryWorks} />
          <WorkCell works={displayAndBackWorks} />
          <WorkCell works={laptopWorks} />
        </div>
      </div>
    </section>
  );
}
