import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import frTranslations from "@/data/translations/fr.json";
import enTranslations from "@/data/translations/en.json";

export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  fr: frTranslations as Record<string, string>,
  en: enTranslations as Record<string, string>,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("bailo-language");
    return (saved as Language) || "fr";
  });

  useEffect(() => {
    localStorage.setItem("bailo-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
