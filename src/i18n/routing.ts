import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en', 'uk', 'ru', 'fr', 'pl'],
  defaultLocale: 'de',
  localePrefix: 'as-needed'
});
