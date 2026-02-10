import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Lock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import siteData from "@/data/site.json";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex items-center pt-24 pb-12 overflow-hidden bg-background">
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
                <span className="text-foreground text-sm font-medium">{t("hero.badge.kyc")}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-foreground text-sm font-medium">{t("hero.badge.ratings")}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-foreground text-sm font-medium">{t("hero.badge.users")}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {t("hero.title.platform")}{" "}
              <span className="text-primary">{t("hero.title.trust")}</span>{" "}
              {t("hero.title.for")}{" "}
              <span className="text-gradient">{t("hero.title.rentals")}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("hero.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="accent" size="xl" asChild>
                <a href={siteData.externalUrls.platform}>
                  {t("hero.cta.discover")}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={siteData.externalUrls.demo}>{t("hero.cta.demo")}</a>
              </Button>
            </div>
            
            {/* Partners logos */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground mb-4">{t("hero.partners")}</p>
              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                {siteData.partners.map((partner) => (
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
                  alt="Tableau de bord Bailo montrant la gestion sécurisée des locations entre propriétaires et locataires" 
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                  fetchPriority="high"
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
                    <p className="font-semibold text-card-foreground text-sm">{t("hero.secure")}</p>
                    <p className="text-xs text-muted-foreground">{t("hero.encrypted")}</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge - Rating */}
              <div className="absolute -right-4 lg:-right-8 bottom-1/4 bg-card rounded-xl shadow-card p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">{t("hero.avgRating")}</p>
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
