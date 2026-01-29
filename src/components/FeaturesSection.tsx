import { Shield, UserCheck, Zap, Star, Eye, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import siteData from "@/data/site.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  UserCheck,
  Zap,
  Star,
  Eye,
  Lock,
};

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("features.title")}{" "}
            <span className="text-primary">Bailo</span> ?
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features grid - 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.titleKey}
                className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {IconComponent && <IconComponent className="w-7 h-7 text-primary-foreground" />}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-hero-gradient rounded-2xl p-8 lg:p-12 text-center shadow-elevated">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            {t("features.cta.title")}
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            {t("features.cta.subtitle")}
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-accent-gradient text-accent-foreground font-bold px-8 py-3 rounded-xl shadow-soft hover:shadow-card hover:scale-[1.02] transition-all"
          >
            {t("features.cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
