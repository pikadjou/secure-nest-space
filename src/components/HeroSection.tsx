import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Lock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const partners = ["NEXITY", "CENTURY21", "ORPI", "FONCIA", "LAFORÊT"];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-foreground text-sm font-medium">Vérification KYC</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-foreground text-sm font-medium">Évaluations certifiées</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-foreground text-sm font-medium">+10 000 utilisateurs</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              LA PLATEFORME DE{" "}
              <span className="text-primary">CONFIANCE</span>{" "}
              POUR VOS{" "}
              <span className="text-gradient">LOCATIONS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Évaluez et soyez évalué en toute sérénité. Bailo révolutionne la relation 
              locataire-propriétaire avec transparence et sécurité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="accent" size="xl">
                Découvrir la plateforme
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Voir la démonstration
              </Button>
            </div>
            
            {/* Partners logos */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground mb-4">Ils nous font confiance</p>
              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                {partners.map((partner) => (
                  <span 
                    key={partner} 
                    className="text-lg font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right content - Hero Image with floating badges */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={heroImage} 
                  alt="Plateforme Bailo - Gestion de locations sécurisée" 
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating badge - Security */}
              <div className="absolute -left-4 lg:-left-8 top-1/4 bg-card rounded-xl shadow-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-gradient flex items-center justify-center">
                    <Lock className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">100% Sécurisé</p>
                    <p className="text-xs text-muted-foreground">Données cryptées</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge - Rating */}
              <div className="absolute -right-4 lg:-right-8 bottom-1/4 bg-card rounded-xl shadow-card p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Note moyenne</p>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-card-foreground">4.8/5</span>
                    <Star className="w-5 h-5 text-accent fill-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
