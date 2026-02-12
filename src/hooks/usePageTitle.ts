import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE_URL = "https://www.bailo.fr";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

interface PageMetaOptions {
  path?: string;
  ogImage?: string;
  ogType?: string;
}

export const usePageTitle = (
  titleKey: string,
  suffixOrOptions?: string | PageMetaOptions,
  maybeOptions?: PageMetaOptions
) => {
  const { t } = useLanguage();

  const suffix = typeof suffixOrOptions === "string" ? suffixOrOptions : "Bailo";
  const options = typeof suffixOrOptions === "object" ? suffixOrOptions : maybeOptions;

  useEffect(() => {
    const title = t(titleKey);
    const fullTitle = suffix ? `${title} | ${suffix}` : title;
    document.title = fullTitle;

    // Meta description
    const descKey = titleKey.replace("pageTitle.", "metaDesc.");
    const desc = t(descKey);
    const hasDesc = desc && desc !== descKey;
    if (hasDesc) {
      setMeta("name", "description", desc);
    }

    // OG tags
    const ogImage = options?.ogImage || DEFAULT_OG_IMAGE;
    const ogType = options?.ogType || "website";
    const url = options?.path ? `${BASE_URL}${options.path}` : BASE_URL;

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    if (hasDesc) setMeta("property", "og:description", desc);

    // Twitter tags
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:image", ogImage);
    if (hasDesc) setMeta("name", "twitter:description", desc);
  }, [titleKey, suffix, t, options?.path, options?.ogImage, options?.ogType]);
};

export default usePageTitle;
