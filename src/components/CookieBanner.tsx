import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { X, Cookie, Shield, BarChart3, Megaphone, Settings } from "lucide-react";
import { useCookieConsent, CookiePreferences } from "@/contexts/CookieConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const CookieBanner = () => {
  const { t } = useLanguage();
  const {
    showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
    preferences,
  } = useCookieConsent();

  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Cannot disable necessary cookies
    setLocalPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    savePreferences(localPreferences);
  };

  if (!showBanner && !showSettings) return null;

  const cookieTypes = [
    {
      key: "necessary" as const,
      icon: Shield,
      titleKey: "cookies.types.necessary.title",
      descKey: "cookies.types.necessary.desc",
      required: true,
    },
    {
      key: "analytics" as const,
      icon: BarChart3,
      titleKey: "cookies.types.analytics.title",
      descKey: "cookies.types.analytics.desc",
      required: false,
    },
    {
      key: "marketing" as const,
      icon: Megaphone,
      titleKey: "cookies.types.marketing.title",
      descKey: "cookies.types.marketing.desc",
      required: false,
    },
    {
      key: "preferences" as const,
      icon: Settings,
      titleKey: "cookies.types.preferences.title",
      descKey: "cookies.types.preferences.desc",
      required: false,
    },
  ];

  return (
    <>
      {/* Main Banner */}
      {showBanner && !showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-elevated p-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t("cookies.banner.title")}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("cookies.banner.description")}{" "}
                  <Link to="/cookies" className="text-primary hover:underline">
                    {t("cookies.banner.learnMore")}
                  </Link>
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default" onClick={acceptAll}>
                    {t("cookies.banner.acceptAll")}
                  </Button>
                  <Button variant="outline" onClick={rejectAll}>
                    {t("cookies.banner.rejectAll")}
                  </Button>
                  <Button variant="ghost" onClick={openSettings}>
                    {t("cookies.banner.customize")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={(open) => !open && closeSettings()}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary" />
              {t("cookies.settings.title")}
            </DialogTitle>
            <DialogDescription>
              {t("cookies.settings.description")}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {cookieTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={type.key}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <Label
                        htmlFor={type.key}
                        className="text-sm font-medium text-foreground cursor-pointer"
                      >
                        {t(type.titleKey)}
                      </Label>
                      <Switch
                        id={type.key}
                        checked={localPreferences[type.key]}
                        onCheckedChange={() => handleToggle(type.key)}
                        disabled={type.required}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t(type.descKey)}
                    </p>
                    {type.required && (
                      <span className="inline-block mt-1 text-xs text-primary font-medium">
                        {t("cookies.settings.required")}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={rejectAll} className="w-full sm:w-auto">
              {t("cookies.banner.rejectAll")}
            </Button>
            <Button variant="outline" onClick={acceptAll} className="w-full sm:w-auto">
              {t("cookies.banner.acceptAll")}
            </Button>
            <Button onClick={handleSave} className="w-full sm:w-auto">
              {t("cookies.settings.save")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;
