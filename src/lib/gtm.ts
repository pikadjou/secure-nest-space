import type { CookiePreferences } from "@/contexts/CookieConsentContext";

export const GTM_ID = "GTM-PWLRRKVF";

type ConsentState = "granted" | "denied";

interface ConsentUpdate {
  ad_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
  analytics_storage: ConsentState;
  functionality_storage: ConsentState;
  personalization_storage: ConsentState;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    // Defined by the inline Consent Mode bootstrap in index.html
    gtag?: (...args: unknown[]) => void;
  }
}

const state = (allowed: boolean): ConsentState => (allowed ? "granted" : "denied");

/** Push an arbitrary event onto the GTM dataLayer. */
export const pushToDataLayer = (event: Record<string, unknown>) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

/**
 * Relay the user's cookie choices to Google Consent Mode v2.
 * Defaults are set to "denied" in index.html before GTM loads, so tags stay
 * cookieless until this update runs.
 */
export const updateGtmConsent = (preferences: CookiePreferences) => {
  if (typeof window === "undefined" || !window.gtag) return;

  const consent: ConsentUpdate = {
    ad_storage: state(preferences.marketing),
    ad_user_data: state(preferences.marketing),
    ad_personalization: state(preferences.marketing),
    analytics_storage: state(preferences.analytics),
    functionality_storage: state(preferences.preferences),
    personalization_storage: state(preferences.preferences),
  };

  window.gtag("consent", "update", consent);

  // Custom event so GTM triggers can react to a consent change.
  pushToDataLayer({ event: "cookie_consent_update", ...consent });
};

/** Push a virtual page view for client-side route changes (SPA). */
export const pushPageView = (path: string, title: string) => {
  pushToDataLayer({ event: "page_view", page_path: path, page_title: title });
};
