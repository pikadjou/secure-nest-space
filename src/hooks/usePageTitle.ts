import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const usePageTitle = (titleKey: string, suffix: string = "Bailo") => {
  const { t } = useLanguage();

  useEffect(() => {
    const title = t(titleKey);
    document.title = suffix ? `${title} | ${suffix}` : title;

    // Set meta description from matching metaDesc key
    const descKey = titleKey.replace("pageTitle.", "metaDesc.");
    const desc = t(descKey);
    if (desc && desc !== descKey) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", desc);
    }
  }, [titleKey, suffix, t]);
};

export default usePageTitle;
