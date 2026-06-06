import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TutorialScreenshot from "@/components/TutorialScreenshot";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight, CheckCircle2, Lightbulb, ArrowRight, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteData from "@/data/site.json";
import { isLaunchMode } from "@/lib/launch";

export interface TutorialStep {
  titleKey: string;
  descKey: string;
  fieldsKey: string;
  tipKey: string;
  screenshotSrc: string;
  screenshotUrl?: string;
}

interface TutorialLayoutProps {
  titleKey: string;
  subtitleKey: string;
  pageTitleKey: string;
  accessStepsKey: string;
  accessUrlKey: string;
  accessScreenshotSrc: string;
  steps: TutorialStep[];
}

const TutorialLayout = ({ titleKey, subtitleKey, pageTitleKey, accessStepsKey, accessUrlKey, accessScreenshotSrc, steps }: TutorialLayoutProps) => {
  const { t } = useLanguage();

  const splitBullets = (key: string) =>
    t(key)
      .split("·")
      .map((f) => f.trim())
      .filter(Boolean);

  const fields = splitBullets;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="pt-24 lg:pt-32 pb-12 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/70 mb-6 flex-wrap">
              <Link to="/" className="hover:text-primary-foreground transition-colors">
                {t("tutorials.breadcrumb.home")}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/tutorials" className="hover:text-primary-foreground transition-colors">
                {t("tutorials.index.title")}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary-foreground">{t(pageTitleKey)}</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t(titleKey)}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t(subtitleKey)}
              </p>
            </div>
          </div>
        </section>

        {/* Access section */}
        <section className="py-10 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <MousePointerClick className="w-4 h-4 text-secondary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{t("tutorials.access.title")}</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 flex flex-col gap-4">
                <ol className="space-y-3">
                  {splitBullets(accessStepsKey).map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-foreground text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2 w-fit">
                  <span className="font-mono">{t(accessUrlKey)}</span>
                </div>
              </div>
              <div className="lg:w-80 flex-shrink-0">
                <TutorialScreenshot
                  src={accessScreenshotSrc}
                  alt={t("tutorials.access.title")}
                  url={t(accessUrlKey)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
                        <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {t(step.titleKey)}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {t(step.descKey)}
                      </p>

                      <ul className="space-y-2">
                        {fields(step.fieldsKey).map((field, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{field}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-start gap-3 bg-accent/10 rounded-xl p-4 border border-accent/20">
                        <Lightbulb className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-accent-foreground">
                          {t(step.tipKey)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sm:ml-16">
                    <TutorialScreenshot
                      src={step.screenshotSrc}
                      alt={t(step.titleKey)}
                      caption={t(step.titleKey)}
                      url={step.screenshotUrl}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-3">
                {t("tutorials.cta.title")}
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                {t("tutorials.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  {isLaunchMode() ? (
                    <Link to="/launch">
                      {t("tutorials.cta.button")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  ) : (
                    <a href={siteData.externalUrls.signup}>
                      {t("tutorials.cta.button")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  )}
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/tutorials">
                    {t("tutorials.nav.back")}
                  </Link>
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

export default TutorialLayout;
