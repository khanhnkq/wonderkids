import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, TranslationSchema } from '../types/i18n';
import { en } from '../locales/en';
import { vi } from '../locales/vi';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKey = NestedKeyOf<TranslationSchema>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isEn: boolean;
  isVi: boolean;
}

const translations: Record<Language, TranslationSchema> = {
  en,
  vi,
};

const STORAGE_KEY = 'wonderkids_lang';
const DEFAULT_LANGUAGE: Language = 'en';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === 'vi' || savedLang === 'en') {
        return savedLang;
      }
    } catch {
      // Ignore localStorage errors
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    } catch {
      // Ignore storage errors
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = useMemo(() => {
    return (key: string, params?: Record<string, string | number>): string => {
      const keys = key.split('.');
      let current: any = translations[language];

      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          // Fallback to English if key is missing in active language
          let fallback: any = translations['en'];
          for (const fbK of keys) {
            if (fallback && typeof fallback === 'object' && fbK in fallback) {
              fallback = fallback[fbK];
            } else {
              fallback = undefined;
              break;
            }
          }
          current = fallback ?? key;
          break;
        }
      }

      if (typeof current !== 'string') {
        return key;
      }

      let result = current;
      if (params) {
        Object.entries(params).forEach(([paramKey, value]) => {
          result = result.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(value));
        });
      }

      return result;
    };
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      isEn: language === 'en',
      isVi: language === 'vi',
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
