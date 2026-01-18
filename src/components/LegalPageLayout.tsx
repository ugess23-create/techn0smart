'use client';

import Header from './Header';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
  backLabel?: string;
}

export default function LegalPageLayout({ title, children, backLabel = 'Zurück' }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              {backLabel}
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              {title}
            </h1>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-primary-800 rounded-2xl p-6 md:p-10 border border-primary-700">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
