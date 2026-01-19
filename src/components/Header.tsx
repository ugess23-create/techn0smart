'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#services', label: t('services') },
    { href: '#advantages', label: t('advantages') },
    { href: '#portfolio', label: t('portfolio') },
    { href: '#reviews', label: t('reviews') },
    { href: '#faq', label: t('faq') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="relative px-4 py-2 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/30 border border-gray-700/30 group-hover:border-accent-cyan/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500 ease-out">
              <Image
                src="/logo.png"
                alt="Technosmart"
                width={280}
                height={80}
                className="h-14 md:h-18 w-auto drop-shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-200 hover:text-accent-cyan transition-colors duration-300 text-sm font-semibold tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-200 hover:text-accent-cyan hover:bg-gray-800/50 transition-colors duration-300 py-3 px-4 rounded-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
