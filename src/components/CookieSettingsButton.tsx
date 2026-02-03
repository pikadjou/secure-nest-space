import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieSettingsButton = () => {
  const { t } = useLanguage();
  const { openSettings, hasConsented } = useCookieConsent();

  if (!hasConsented) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={openSettings}
      className="text-muted-foreground hover:text-foreground"
    >
      <Cookie className="w-4 h-4 mr-2" />
      {t("cookies.manage")}
    </Button>
  );
};

export default CookieSettingsButton;
