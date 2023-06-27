import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish  from './locales/en/translation.json';
import translationRussian  from './locales/ru/translation.json';

export const defaultNS = 'translation';
export const resources = {
  en: {
    translation: translationEnglish,
  },
  ru: {
    translation: translationRussian,
  }
} as const;

i18next.use(initReactI18next).init({
  lng: 'en',
  ns: ['translation'],
  defaultNS,
  resources,
});

export default i18next;