'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900/95 backdrop-blur-md border-b border-primary-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center">
              <span className="text-primary-900 font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-text-primary hidden sm:block">
              Techn<span className="text-accent-blue">0</span>smart
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
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
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary-700">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-secondary hover:text-text-primary hover:bg-primary-800 transition-colors duration-200 py-3 px-4 rounded-lg"
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
