import { Shield, UserCheck, Zap, Star, Eye, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Parcours Sécurisé",
    description: "Vérification d'identité KYC et validation des documents pour une confiance mutuelle totale.",
    color: "bg-primary",
  },
  {
    icon: UserCheck,
    title: "Profils Vérifiés",
    description: "Chaque utilisateur dispose d'un profil vérifié avec historique complet des évaluations.",
    color: "bg-secondary",
  },
  {
    icon: Zap,
    title: "Simplicité d'Usage",
    description: "Interface intuitive et processus d'évaluation simplifié en quelques clics seulement.",
    color: "bg-accent",
  },
  {
    icon: Star,
    title: "Évaluations Fiables",
    description: "Système d'évaluation bidirectionnel avec photos et commentaires détaillés authentifiés.",
    color: "bg-primary",
  },
  {
    icon: Eye,
    title: "Transparence Totale",
    description: "Accès complet à l'historique des locations et des évaluations pour une décision éclairée.",
    color: "bg-secondary",
  },
  {
    icon: Lock,
    title: "Protection des Données",
    description: "Conformité RGPD et cryptage de toutes vos données personnelles et sensibles.",
    color: "bg-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pourquoi choisir{" "}
            <span className="text-primary">Bailo</span> ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Une plateforme conçue pour révolutionner la confiance dans l'immobilier locatif.
            Découvrez nos avantages qui font la différence.
          </p>
        </div>

        {/* Features grid - 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-hero-gradient rounded-2xl p-8 lg:p-12 text-center shadow-elevated">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Rejoignez plus de 10 000 utilisateurs satisfaits
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Commencez dès aujourd'hui à construire votre réputation locative
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-accent-gradient text-accent-foreground font-bold px-8 py-3 rounded-xl shadow-soft hover:shadow-card hover:scale-[1.02] transition-all"
          >
            Commencer maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
