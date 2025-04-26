import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enAuth from './locales/en/auth.json';
import enValidation from './locales/en/validation.json';

import esCommon from './locales/es/common.json';
import esAuth from './locales/es/auth.json';
import esValidation from './locales/es/validation.json';

export const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
    validation: enValidation,
  },
  es: {
    common: esCommon,
    auth: esAuth,
    validation: esValidation,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 