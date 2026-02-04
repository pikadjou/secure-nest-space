import { Button } from "@/components/ui/button";
import { Check, Gift, Zap, Building, Calendar, Shield, FileText, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import siteData from "@/data/site.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  FileText,
  Headphones,
};

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("pricing.title")}{" "}
            <span className="text-primary">{t("pricing.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Tenant Free Banner */}
        <div className="max-w-md mx-auto mb-16 p-6 rounded-2xl bg-secondary/10 border border-secondary/30 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Check className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-bold text-secondary">{t("pricing.tenantFree")}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{t("pricing.tenantFreeDesc")}</p>
        </div>

        {/* Main pricing grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          
          {/* Free Offer Card */}
          <div className="relative rounded-2xl p-8 bg-card text-card-foreground shadow-card border-2 border-secondary animate-fade-in">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold shadow-soft">
                <Gift className="w-4 h-4" />
                {t("pricing.freeOffer.badge")}
              </div>
            </div>

            <div className="mt-4 mb-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{t("pricing.freeOffer.title")}</h3>
              <p className="text-primary font-semibold text-lg">{t("pricing.freeOffer.duration")}</p>
            </div>

            <p className="text-muted-foreground text-center mb-6">
              {t("pricing.freeOffer.desc")}
            </p>

            <Button variant="secondary" size="lg" className="w-full mb-4" asChild>
              <a href={siteData.externalUrls.signup}>{t("pricing.freeOffer.cta")}</a>
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              {t("pricing.freeOffer.conversion")}
            </p>
          </div>

          {/* Per Property Card */}
          <div className="relative rounded-2xl p-8 bg-primary text-primary-foreground shadow-elevated ring-4 ring-accent/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Building className="w-6 h-6" />
              <h3 className="text-2xl font-bold">{t("pricing.perProperty.title")}</h3>
            </div>

            <div className="text-center mb-2">
              <span className="text-5xl font-bold">{t(siteData.pricing.perProperty.priceKey)}</span>
              <span className="text-primary-foreground/70">{t(siteData.pricing.perProperty.periodKey)}</span>
            </div>

            <p className="text-sm text-primary-foreground/60 text-center mb-2">
              {t(siteData.pricing.perProperty.descKey)}
            </p>
            <p className="text-xs text-primary-foreground/50 text-center mb-6">
              {t(siteData.pricing.perProperty.prorataKey)}
            </p>

            <div className="mb-6">
              <p className="text-sm font-medium mb-4 text-primary-foreground/80">
                {t("pricing.features.title")}
              </p>
              <ul className="space-y-3">
                {siteData.pricing.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-secondary">
                      <Check className="w-3 h-3 text-secondary-foreground" />
                    </div>
                    <span className="text-sm">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Annual option */}
            <div className="bg-primary-foreground/10 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">{t("pricing.annual.title")}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{t(siteData.pricing.annual.priceKey)}</span>
                <span className="text-primary-foreground/70">{t(siteData.pricing.annual.periodKey)}</span>
                <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                  {t(siteData.pricing.annual.savingsKey)}
                </span>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-2">
                {t(siteData.pricing.annual.descKey)}
              </p>
            </div>
          </div>

          {/* Boost Card */}
          <div className="relative rounded-2xl p-8 bg-card text-card-foreground shadow-card border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-gradient text-accent-foreground text-sm font-semibold shadow-soft">
                <Zap className="w-4 h-4" />
                {t("pricing.boost.badge")}
              </div>
            </div>

            <div className="mt-4 mb-4 text-center">
              <h3 className="text-2xl font-bold mb-2">{t("pricing.boost.title")}</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-primary">{t(siteData.pricing.boost.priceKey)}</span>
                <span className="text-muted-foreground">{t(siteData.pricing.boost.durationKey)}</span>
              </div>
            </div>

            <p className="text-muted-foreground text-center mb-6">
              {t("pricing.boost.desc")}
            </p>

            <ul className="space-y-3 mb-6">
              {siteData.pricing.boost.features.map((featureKey) => (
                <li key={featureKey} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-accent/20">
                    <Zap className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm">{t(featureKey)}</span>
                </li>
              ))}
            </ul>

            <Button variant="accent" size="lg" className="w-full mb-4" asChild>
              <a href={siteData.externalUrls.signup}>{t("pricing.boost.cta")}</a>
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              {t("pricing.boost.nonRefundable")}
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2">{t("pricing.payment.provider")}</p>
          <p className="text-xs text-muted-foreground">{t("pricing.payment.methods")}</p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8">
          {siteData.trustBadges.map((badge) => {
            const IconComponent = iconMap[badge.icon];
            return (
              <div key={badge.textKey} className="flex items-center gap-2 text-muted-foreground">
                {IconComponent && <IconComponent className="w-5 h-5 text-secondary" />}
                <span className="text-sm">{t(badge.textKey)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
