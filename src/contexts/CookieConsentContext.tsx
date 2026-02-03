import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CookiePreferences {
  necessary: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface CookieConsentContextType {
  hasConsented: boolean;
  preferences: CookiePreferences;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Partial<CookiePreferences>) => void;
  openSettings: () => void;
  closeSettings: () => void;
  openBanner: () => void;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = "cookie-consent";

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [hasConsented, setHasConsented] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences({ ...defaultPreferences, ...parsed.preferences });
        setHasConsented(true);
        setShowBanner(false);
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveToStorage = (prefs: CookiePreferences) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        preferences: prefs,
        timestamp: new Date().toISOString(),
      })
    );
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
    saveToStorage(allAccepted);
  };

  const rejectAll = () => {
    const allRejected: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(allRejected);
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
    saveToStorage(allRejected);
  };

  const savePreferences = (prefs: Partial<CookiePreferences>) => {
    const newPreferences: CookiePreferences = {
      ...preferences,
      ...prefs,
      necessary: true, // Always true
    };
    setPreferences(newPreferences);
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
    saveToStorage(newPreferences);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const openBanner = () => {
    setShowBanner(true);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        hasConsented,
        preferences,
        showBanner,
        showSettings,
        acceptAll,
        rejectAll,
        savePreferences,
        openSettings,
        closeSettings,
        openBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
};
