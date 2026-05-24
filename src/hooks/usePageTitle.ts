import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const BASE_URL = "https://www.bailo.be";
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

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
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
  const { t, language } = useLanguage();

  const suffix = typeof suffixOrOptions === "string" ? suffixOrOptions : "Bailo";
  const options = typeof suffixOrOptions === "object" ? suffixOrOptions : maybeOptions;

  useEffect(() => {
    const translated = t(titleKey);
    // If the key was not found, t() returns the key itself — use raw value instead
    const title = translated === titleKey ? titleKey : translated;
    const fullTitle = suffix ? `${title} | ${suffix}` : title;
    document.title = fullTitle;

    // Meta description (only meaningful for known pageTitle.* keys)
    const descKey = titleKey.replace("pageTitle.", "metaDesc.");
    const desc = t(descKey);
    const hasDesc = desc && desc !== descKey;
    if (hasDesc) {
      setMeta("name", "description", desc);
    }

    // Canonical URL
    const url = options?.path ? `${BASE_URL}${options.path}` : BASE_URL;
    setCanonical(url);

    // OG tags
    const ogImage = options?.ogImage || DEFAULT_OG_IMAGE;
    const ogType = options?.ogType || "website";
    const ogLocale = language === "fr" ? "fr_BE" : "en_GB";

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:locale", ogLocale);
    if (hasDesc) setMeta("property", "og:description", desc);

    // Twitter Card tags
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:image", ogImage);
    if (hasDesc) setMeta("name", "twitter:description", desc);

  }, [titleKey, suffix, t, language, options?.path, options?.ogImage, options?.ogType]);
};

export default usePageTitle;
