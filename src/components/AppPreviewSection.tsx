import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const AppPreviewSection = () => {
  const steps = [
    "Créez votre compte en 2 minutes",
    "Constituez votre dossier locataire",
    "Postulez aux annonces qui vous correspondent",
    "Signez votre bail en ligne",
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Comment ça marche ?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Votre location en{" "}
              <span className="text-primary">4 étapes</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Un processus clair et transparent pour trouver votre prochain logement 
              sans stress ni complications.
            </p>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <p className="text-foreground font-medium pt-1">{step}</p>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg">
              Créer mon dossier
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right - App Preview */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Phone mockup */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-elevated">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-primary px-6 py-3 flex justify-between items-center">
                    <span className="text-primary-foreground text-sm font-medium">bailo</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-primary-foreground/60" />
                      <div className="w-1 h-1 rounded-full bg-primary-foreground/60" />
                      <div className="w-1 h-1 rounded-full bg-primary-foreground/60" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="text-center py-4">
                      <div className="w-16 h-16 rounded-full bg-green-gradient mx-auto mb-3 flex items-center justify-center">
                        <Check className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <p className="font-semibold text-card-foreground">Dossier complet !</p>
                      <p className="text-sm text-muted-foreground">Prêt à postuler</p>
                    </div>
                    
                    <div className="space-y-3">
                      {["Pièce d'identité", "Justificatif de revenus", "Avis d'imposition"].map((doc) => (
                        <div key={doc} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                          <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                            <Check className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-sm text-card-foreground">{doc}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4">
                      <div className="bg-accent-gradient text-accent-foreground text-center py-3 rounded-xl font-semibold">
                        Voir les annonces
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
