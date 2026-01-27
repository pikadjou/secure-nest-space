import { Button } from "@/components/ui/button";
import { Check, Crown, Shield, FileText, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      nameKey: "pricing.basic.name",
      descKey: "pricing.basic.desc",
      priceKey: "pricing.basic.price",
      period: "",
      featured: false,
      featuresKeys: [
        "pricing.feature.kyc",
        "pricing.feature.3reviews",
        "pricing.feature.profiles",
        "pricing.feature.emailSupport",
        "pricing.feature.6months",
      ],
      ctaKey: "pricing.basic.cta",
    },
    {
      nameKey: "pricing.premium.name",
      descKey: "pricing.premium.desc",
      priceKey: "pricing.premium.price",
      periodKey: "pricing.premium.period",
      featured: true,
      subtitleKey: "pricing.premium.subtitle",
      featuresKeys: [
        "pricing.feature.all",
        "pricing.feature.unlimited",
        "pricing.feature.photos",
        "pricing.feature.badge",
        "pricing.feature.fullHistory",
        "pricing.feature.analytics",
        "pricing.feature.prioritySupport",
        "pricing.feature.export",
        "pricing.feature.notifications",
      ],
      ctaKey: "pricing.premium.cta",
      trialKey: "pricing.premium.trial",
    },
  ];

  const trustBadges = [
    { icon: Shield, textKey: "pricing.trust.ssl" },
    { icon: FileText, textKey: "pricing.trust.invoice" },
    { icon: Headphones, textKey: "pricing.trust.support" },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("pricing.title")}{" "}
            <span className="text-primary">{t("pricing.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.nameKey}
              className={`relative rounded-2xl p-8 lg:p-10 animate-fade-in ${
                plan.featured
                  ? "bg-primary text-primary-foreground shadow-elevated ring-4 ring-accent/20"
                  : "bg-card text-card-foreground shadow-card border border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-gradient text-accent-foreground text-sm font-semibold shadow-soft">
                    <Crown className="w-4 h-4" />
                    {t("pricing.popular")}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{t(plan.nameKey)}</h3>
                <p className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {t(plan.descKey)}
                </p>
              </div>

              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold">{t(plan.priceKey)}</span>
                <span className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.periodKey ? t(plan.periodKey) : plan.period}
                </span>
              </div>
              
              {plan.subtitleKey && (
                <p className="text-sm text-primary-foreground/60 mb-6">{t(plan.subtitleKey)}</p>
              )}
              {!plan.subtitleKey && <div className="mb-6" />}

              <div className="mb-8">
                <p className={`text-sm font-medium mb-4 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {t("pricing.features")}
                </p>
                <ul className="space-y-3">
                  {plan.featuresKeys.map((featureKey) => (
                    <li key={featureKey} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.featured ? "bg-secondary" : "bg-secondary/20"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.featured ? "text-secondary-foreground" : "text-secondary"}`} />
                      </div>
                      <span className="text-sm">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {t(plan.ctaKey)}
              </Button>

              {plan.trialKey && (
                <p className="text-xs text-center mt-4 text-primary-foreground/60">
                  {t(plan.trialKey)}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {trustBadges.map((badge) => (
            <div key={badge.textKey} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-5 h-5 text-secondary" />
              <span className="text-sm">{t(badge.textKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
