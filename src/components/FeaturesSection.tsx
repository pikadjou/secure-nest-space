import { Shield, Zap, Users, FileCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Parcours sécurisé",
    description: "Vos données sont protégées et vos transactions sécurisées à chaque étape.",
    color: "bg-primary",
  },
  {
    icon: FileCheck,
    title: "Dossier simplifié",
    description: "Constituez votre dossier en quelques clics, validé en moins de 24h.",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Mise en relation",
    description: "Connectez-vous directement avec des propriétaires vérifiés.",
    color: "bg-accent",
  },
  {
    icon: Zap,
    title: "Rapidité",
    description: "Trouvez votre logement et signez votre bail en un temps record.",
    color: "bg-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Pourquoi Bailo ?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Une expérience de location{" "}
            <span className="text-secondary">réinventée</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nous avons repensé chaque étape du processus de location pour vous offrir 
            simplicité, rapidité et sérénité.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
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
      </div>
    </section>
  );
};

export default FeaturesSection;
