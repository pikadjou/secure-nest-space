import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Target, Shield, Heart } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, titleKey: "about.values.trust.title", descKey: "about.values.trust.desc" },
    { icon: Users, titleKey: "about.values.transparency.title", descKey: "about.values.transparency.desc" },
    { icon: Target, titleKey: "about.values.innovation.title", descKey: "about.values.innovation.desc" },
    { icon: Heart, titleKey: "about.values.community.title", descKey: "about.values.community.desc" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("about.subtitle")}
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-soft">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("about.mission.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.mission.content")}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              {t("about.values.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border/50 shadow-soft"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(value.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("about.story.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.story.content")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
