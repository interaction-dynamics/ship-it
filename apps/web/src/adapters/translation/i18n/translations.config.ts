import type { Config } from '@/adapters/translation/_types/config';

export const translationConfig: Config = {
  languages: [
    { label: 'English', locale: 'en' },
    { label: 'Français', locale: 'fr' }
  ],
  defaultLocale: 'fr',
  namespaces: ['common', 'dashboard', 'pricing', 'email', 'footer', 'faq', 'landing'],
  defaultNamespace: 'common'
};
