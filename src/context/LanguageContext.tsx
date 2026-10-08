"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationContent, translations } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("naiven_lang") as Language | null;
      if (saved === "en" || saved === "es") {
        setLangState(saved);
      } else {
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (browserLang === "es") {
          setLangState("es");
        }
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsHydrated(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("naiven_lang", newLang);
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    const nextLang = lang === "en" ? "es" : "en";
    setLang(nextLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
