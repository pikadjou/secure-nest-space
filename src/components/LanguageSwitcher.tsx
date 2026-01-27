import { Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-primary-foreground/70">
        <Globe className="w-4 h-4" />
        <span className="text-sm">{t("footer.language")}</span>
      </div>
      <div className="flex gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              language === lang.code
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            <span>{lang.flag}</span>
            <span className="hidden sm:inline">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
