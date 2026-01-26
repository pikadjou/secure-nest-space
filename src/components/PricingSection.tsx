import { Button } from "@/components/ui/button";
import { Check, Crown, Shield, FileText, Headphones } from "lucide-react";

const plans = [
  {
    name: "Basique",
    description: "Parfait pour commencer votre parcours locatif",
    price: "Gratuit",
    period: "",
    featured: false,
    features: [
      "Profil vérifié KYC",
      "3 évaluations par mois",
      "Consultation des profils",
      "Support par email",
      "Historique 6 mois",
    ],
    cta: "Commencer gratuitement",
  },
  {
    name: "Premium",
    description: "L'abonnement complet pour les professionnels",
    price: "9,90€",
    period: "/mois",
    featured: true,
    subtitle: "Sans engagement • Annulation à tout moment",
    features: [
      "Tout du plan Basique",
      "Évaluations illimitées",
      "Photos illimitées",
      "Badge Premium visible",
      "Historique complet",
      "Analytics détaillés",
      "Support prioritaire 24/7",
      "Export des données",
      "Notifications avancées",
    ],
    cta: "Passer au Premium",
    trial: "Essai gratuit 14 jours • Aucune carte requise",
  },
];

const trustBadges = [
  { icon: Shield, text: "Paiement sécurisé SSL" },
  { icon: FileText, text: "Facture automatique" },
  { icon: Headphones, text: "Support client réactif" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choisissez votre{" "}
            <span className="text-primary">abonnement</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Commencez gratuitement ou passez Premium pour accéder à toutes les fonctionnalités avancées.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
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
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold">{plan.price}</span>
                <span className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div>
              
              {plan.subtitle && (
                <p className="text-sm text-primary-foreground/60 mb-6">{plan.subtitle}</p>
              )}
              {!plan.subtitle && <div className="mb-6" />}

              <div className="mb-8">
                <p className={`text-sm font-medium mb-4 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  Fonctionnalités incluses :
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.featured ? "bg-secondary" : "bg-secondary/20"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.featured ? "text-secondary-foreground" : "text-secondary"}`} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>

              {plan.trial && (
                <p className="text-xs text-center mt-4 text-primary-foreground/60">
                  {plan.trial}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {trustBadges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-5 h-5 text-secondary" />
              <span className="text-sm">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
