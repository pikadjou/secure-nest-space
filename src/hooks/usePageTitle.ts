import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const usePageTitle = (titleKey: string, suffix: string = "Bailo") => {
  const { t } = useLanguage();

  useEffect(() => {
    const title = t(titleKey);
    document.title = suffix ? `${title} | ${suffix}` : title;
  }, [titleKey, suffix, t]);
};

export default usePageTitle;
