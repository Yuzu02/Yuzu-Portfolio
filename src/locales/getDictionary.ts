// src/locales/getDictionary.ts
import { Translations } from 'translations';
import en from './en';
import es from './es';

export const getDictionary = (locale: "en" | "es"): Translations => {
  switch (locale) {
    case 'en':
      return en;
    case 'es':
      return es;
  }
};
