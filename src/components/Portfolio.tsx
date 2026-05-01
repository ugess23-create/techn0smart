'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

type WorkItem = {
  id: number;
  title: string;
  before: string;
  after: string;
};

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
  {
    id: 4,
    title: 'Замена дисплея Samsung',
    before: '/images/portfolio/samsung-display-before.jpg',
    after: '/images/portfolio/samsung-display-after.jpg',
  },
];

const laptopWorks: WorkItem[] = [
  {
    id: 1,
    title: 'Чистка и замена термопасты',
    before: '/images/portfolio/laptop-cleaning-before.jpg',
    after: '/images/portfolio/laptop-cleaning-after.jpg',
  },
];

// ─── Before/After Slider (fits inside a square grid cell) ─────────────────────

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
      {/* Before */}
      <div className="absolute inset-0">
        <Image src={before} alt="До" fill className="object-contain pointer-events-none" sizes="(max-width: 768px) 50vw, 33vw" />
        <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-full">ДО</span>
      </div>

      {/* After */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <Image src={after} alt="После" fill className="object-contain pointer-events-none" sizes="(max-width: 768px) 50vw, 33vw" />
        <span className="absolute bottom-2 right-2 text-[10px] font-bold text-white bg-accent-blue/90 px-2 py-0.5 rounded-full">ПОСЛЕ</span>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-md z-10 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center">
          <ChevronLeft size={9} className="text-primary-900" />
          <ChevronRight size={9} className="text-primary-900" />
        </div>
      </div>
    </div>
  );
}

// ─── Grid cell with carousel of works ─────────────────────────────────────────

function WorkCell({ works }: { works: WorkItem[] }) {
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
    <div
      className="relative aspect-square rounded-xl overflow-hidden cursor-ew-resize group bg-primary-800"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <BeforeAfterSlider key={work.id} before={work.before} after={work.after} />

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-3 pt-6 pb-2 pointer-events-none">
        <p className="text-white text-xs font-medium leading-tight">{work.title}</p>
      </div>

      {/* Prev/Next arrows — only if multiple works */}
      {works.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 z-30 w-6 h-6 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={14} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 z-30 w-6 h-6 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={14} className="text-white" />
          </button>

          {/* Dots */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex gap-1 pointer-events-none">
            {works.map((_, i) => (
              <span key={i} className={`rounded-full transition-all ${i === index ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`} />
            ))}
          </div>
        </>
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
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Smartphones cell */}
          <WorkCell works={phoneWorks} />

          {/* Laptops cell */}
          <WorkCell works={laptopWorks} />

          {/* Consoles placeholder */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-800 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🎮</div>
              <p className="text-text-secondary text-sm">Consoles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
