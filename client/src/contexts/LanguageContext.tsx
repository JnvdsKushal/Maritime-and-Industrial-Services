import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import fr from '@/translations/fr';
import en from '@/translations/en';
import type { Translations } from '@/translations/fr';

export type Language = 'fr' | 'en';

const STORAGE_KEY = 'emies-language';
const DEFAULT_LANGUAGE: Language = 'fr';

const dictionaries: Record<Language, Translations> = { fr, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'fr' || stored === 'en' ? stored : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Language) => setLanguageState(next);
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'fr' ? 'en' : 'fr'));

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: dictionaries[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
