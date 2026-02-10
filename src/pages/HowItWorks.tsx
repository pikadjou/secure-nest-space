import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Building, Users, FileText, Star, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import siteData from "@/data/site.json";
import usePageTitle from "@/hooks/usePageTitle";

// Images
import verificationImg from "@/assets/how-it-works/verification.jpg";
import propertiesImg from "@/assets/how-it-works/properties.jpg";
import profilesImg from "@/assets/how-it-works/profiles.jpg";
import relationshipImg from "@/assets/how-it-works/relationship.jpg";
import documentsImg from "@/assets/how-it-works/documents.jpg";
import reviewsImg from "@/assets/how-it-works/reviews.jpg";
import reputationImg from "@/assets/how-it-works/reputation.jpg";

const HowItWorks = () => {
  usePageTitle("pageTitle.howItWorks");
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Shield,
      image: verificationImg,
      titleKey: "howItWorks.step1.title",
      descKey: "howItWorks.step1.desc",
      features: [
        "howItWorks.step1.feature1",
        "howItWorks.step1.feature2",
        "howItWorks.step1.feature3",
      ],
      color: "bg-primary",
    },
    {
      number: "02",
      icon: Building,
      image: propertiesImg,
      titleKey: "howItWorks.step2.title",
      descKey: "howItWorks.step2.desc",
      features: [
        "howItWorks.step2.feature1",
        "howItWorks.step2.feature2",
        "howItWorks.step2.feature3",
      ],
      color: "bg-secondary",
    },
    {
      number: "03",
      icon: Users,
      image: profilesImg,
      titleKey: "howItWorks.step3.title",
      descKey: "howItWorks.step3.desc",
      features: [
        "howItWorks.step3.feature1",
        "howItWorks.step3.feature2",
        "howItWorks.step3.feature3",
      ],
      color: "bg-accent",
    },
    {
      number: "04",
      icon: Users,
      image: relationshipImg,
      titleKey: "howItWorks.step4.title",
      descKey: "howItWorks.step4.desc",
      features: [
        "howItWorks.step4.feature1",
        "howItWorks.step4.feature2",
        "howItWorks.step4.feature3",
      ],
      color: "bg-primary",
    },
    {
      number: "05",
      icon: FileText,
      image: documentsImg,
      titleKey: "howItWorks.step5.title",
      descKey: "howItWorks.step5.desc",
      features: [
        "howItWorks.step5.feature1",
        "howItWorks.step5.feature2",
        "howItWorks.step5.feature3",
      ],
      color: "bg-secondary",
    },
    {
      number: "06",
      icon: Star,
      image: reviewsImg,
      titleKey: "howItWorks.step6.title",
      descKey: "howItWorks.step6.desc",
      features: [
        "howItWorks.step6.feature1",
        "howItWorks.step6.feature2",
        "howItWorks.step6.feature3",
      ],
      color: "bg-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {t("howItWorks.hero.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t("howItWorks.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={siteData.externalUrls.signup}>
                  {t("howItWorks.hero.cta")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-lg font-semibold text-foreground">{t("howItWorks.trust.verified")}</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-accent" />
              <span className="text-lg font-semibold text-foreground">{t("howItWorks.trust.ratings")}</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-secondary" />
              <span className="text-lg font-semibold text-foreground">{t("howItWorks.trust.reputation")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div
                  key={step.number}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
                >
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <div className={`absolute -inset-4 ${step.color} opacity-10 rounded-3xl blur-xl`} />
                      <img
                        src={step.image}
                        alt={`Étape ${step.number} : ${t(step.titleKey)}`}
                        className="relative w-full rounded-2xl shadow-elevated"
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                      <div className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {t(step.titleKey)}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {t(step.descKey)}
                    </p>
                    <ul className="space-y-3">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reputation Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <img
                  src={reputationImg}
                  alt={`Système de réputation Bailo : ${t("howItWorks.reputation.title")}`}
                  className="w-full rounded-2xl shadow-elevated"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex-1">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {t("howItWorks.reputation.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t("howItWorks.reputation.desc")}
                </p>
                <div className="bg-card rounded-xl p-6 border border-border/50">
                  <h3 className="font-semibold text-foreground mb-3">{t("howItWorks.reputation.benefits.title")}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      {t("howItWorks.reputation.benefits.item1")}
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      {t("howItWorks.reputation.benefits.item2")}
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      {t("howItWorks.reputation.benefits.item3")}
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      {t("howItWorks.reputation.benefits.item4")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              {t("howItWorks.cta.title")}
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              {t("howItWorks.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={siteData.externalUrls.signup}>
                  {t("howItWorks.cta.button")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href={siteData.externalUrls.demo}>
                  {t("howItWorks.cta.demo")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
