import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Plateforme sécurisée et certifiée
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Louez en toute{" "}
              <span className="text-gradient">confiance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Bailo simplifie la location immobilière avec un parcours sécurisé, 
              transparent et rapide pour locataires et propriétaires.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                Commencer gratuitement
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Découvrir
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {["Inscription gratuite", "Sans engagement", "Support 24/7"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/70">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Illustration */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-2xl shadow-elevated p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-gradient flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Dossier validé</p>
                    <p className="text-sm text-muted-foreground">En 24h chrono</p>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-full bg-green-gradient rounded-full" />
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-card rounded-xl shadow-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">🏠</span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground text-sm">+2,500</p>
                    <p className="text-xs text-muted-foreground">Locations réussies</p>
                  </div>
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">98%</p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
