"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { type Locale, type TranslationKey, getTranslations } from "@/lib/translations";

type T = Record<TranslationKey, string>;

const LanguageContext = createContext<{
  locale: Locale;
  t: T;
  setLocale: (l: Locale) => void;
}>({
  locale: "en",
  t: getTranslations("en"),
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const t = getTranslations(locale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
