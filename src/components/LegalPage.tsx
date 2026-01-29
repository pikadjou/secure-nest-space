import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalSection {
  titleKey: string;
  contentKey: string;
}

interface LegalPageProps {
  titleKey: string;
  lastUpdatedKey: string;
  sections: LegalSection[];
}

const LegalPage = ({ titleKey, lastUpdatedKey, sections }: LegalPageProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("legal.backHome")}
            </Button>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t(titleKey)}
            </h1>
            <p className="text-muted-foreground">
              {t(lastUpdatedKey)}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <section key={index} className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {t(section.titleKey)}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t(section.contentKey)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
