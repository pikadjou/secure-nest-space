import { Button } from "@/components/ui/button";
import { Check, X, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    description: "Pour débuter sereinement",
    price: "Gratuit",
    period: "",
    featured: false,
    features: [
      { text: "Création de dossier locataire", included: true },
      { text: "3 candidatures par mois", included: true },
      { text: "Messagerie avec propriétaires", included: true },
      { text: "Alertes annonces basiques", included: true },
      { text: "Dossier prioritaire", included: false },
      { text: "Candidatures illimitées", included: false },
      { text: "Support prioritaire", included: false },
    ],
  },
  {
    name: "Premium",
    description: "Pour maximiser vos chances",
    price: "9,99€",
    period: "/mois",
    featured: true,
    features: [
      { text: "Création de dossier locataire", included: true },
      { text: "Candidatures illimitées", included: true },
      { text: "Messagerie avec propriétaires", included: true },
      { text: "Alertes personnalisées", included: true },
      { text: "Dossier prioritaire", included: true },
      { text: "Vérification express 24h", included: true },
      { text: "Support prioritaire 7j/7", included: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tarifs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choisissez votre{" "}
            <span className="text-primary">formule</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des options flexibles pour s'adapter à vos besoins.
            Sans engagement, résiliable à tout moment.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 lg:p-10 animate-fade-in ${
                plan.featured
                  ? "bg-primary text-primary-foreground shadow-elevated scale-105"
                  : "bg-card text-card-foreground shadow-card"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-gradient text-accent-foreground text-sm font-semibold shadow-soft">
                    <Crown className="w-4 h-4" />
                    Populaire
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl lg:text-5xl font-bold">{plan.price}</span>
                <span className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.featured ? "bg-secondary" : "bg-secondary/20"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.featured ? "text-secondary-foreground" : "text-secondary"}`} />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={!feature.included ? (plan.featured ? "text-primary-foreground/50" : "text-muted-foreground") : ""}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.featured ? "Commencer Premium" : "Commencer gratuitement"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
