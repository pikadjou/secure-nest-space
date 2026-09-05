import { BedDouble, Car, KeyRound, Pizza, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import siteData from "@/data/site.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BedDouble,
  Car,
  Pizza,
};

const TrustParadoxSection = () => {
  const { t } = useLanguage();

  return (
    <section id="paradox" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
            {t("paradox.title.first")}{" "}
            <span className="text-primary">{t("paradox.title.second")}</span>
          </h2>
        </div>

        {/* Trois évidences + la bascule */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.trustParadox.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.labelKey}
                className="group flex flex-col bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {IconComponent && <IconComponent className="w-7 h-7 text-primary-foreground" />}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-2">{t(item.labelKey)}</p>
                <h3 className="text-xl font-semibold text-card-foreground mb-6">
                  {t(item.actionKey)}
                </h3>
                <div className="flex gap-1 mt-auto" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            );
          })}

          <div
            className="group flex flex-col bg-hero-gradient rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <KeyRound className="w-7 h-7 text-accent-foreground" />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-2">
              {t("paradox.twist.question")}
            </p>
            <h3 className="text-3xl font-bold text-accent mb-6">{t("paradox.twist.answer")}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mt-auto">
              {t("paradox.twist.detail")}
            </p>
          </div>
        </div>

        {/* La chute */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-muted-foreground leading-relaxed mb-8">{t("paradox.mirror")}</p>
          <p className="text-xl md:text-2xl font-semibold text-foreground text-balance">
            {t("paradox.punchline.tenant")}{" "}
            <span className="text-secondary">{t("paradox.punchline.owner")}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustParadoxSection;
