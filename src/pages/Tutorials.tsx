import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import usePageTitle from "@/hooks/usePageTitle";
import { BookOpen, User, Building, FileText, CheckCircle, FolderOpen, Star, ArrowRight } from "lucide-react";

const tutorials = [
  { key: "profile", href: "/tutorials/profile", icon: User, color: "bg-primary", role: "common" },
  { key: "ownerProfile", href: "/tutorials/owner-profile", icon: Building, color: "bg-secondary", role: "owner" },
  { key: "tenantProfile", href: "/tutorials/tenant-profile", icon: User, color: "bg-accent", role: "tenant" },
  { key: "createEstate", href: "/tutorials/create-estate", icon: Building, color: "bg-primary", role: "owner" },
  { key: "createApplication", href: "/tutorials/create-application", icon: FileText, color: "bg-secondary", role: "common" },
  { key: "validateApplication", href: "/tutorials/validate-application", icon: CheckCircle, color: "bg-accent", role: "owner" },
  { key: "manageApplication", href: "/tutorials/manage-application", icon: FolderOpen, color: "bg-primary", role: "common" },
  { key: "reviews", href: "/tutorials/reviews", icon: Star, color: "bg-secondary", role: "common" },
] as const;

const roleBadgeClass: Record<string, string> = {
  common: "bg-muted text-muted-foreground",
  owner: "bg-secondary/15 text-secondary-foreground",
  tenant: "bg-accent/15 text-accent-foreground",
};

const Tutorials = () => {
  usePageTitle("pageTitle.tutorials", { path: "/tutorials" });
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">{t("tutorials.index.badge")}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t("tutorials.index.title")}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t("tutorials.index.subtitle")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="text-muted-foreground font-medium">{t("tutorials.index.role.title")} :</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                {t("tutorials.index.role.common")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 text-secondary-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                {t("tutorials.index.role.owner")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent-foreground">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {t("tutorials.index.role.tenant")}
              </span>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {tutorials.map((tuto) => {
                const Icon = tuto.icon;
                return (
                  <Link
                    key={tuto.key}
                    to={tuto.href}
                    className="group bg-card border border-border rounded-2xl p-6 hover:shadow-elevated hover:border-primary/30 transition-all flex flex-col gap-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${tuto.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${roleBadgeClass[tuto.role]}`}>
                        {t(`tutorials.index.role.${tuto.role}`)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {t(`tutorials.index.card.${tuto.key}.title`)}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {t(`tutorials.index.card.${tuto.key}.desc`)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorials;
