/* eslint-disable */
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr-FR',
    resources: {
      'fr-FR': {},
      'en-EN': {},
    },
    defaultNS: 'common',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18next;
