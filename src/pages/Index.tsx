import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import usePageTitle from "@/hooks/usePageTitle";
import siteData from "@/data/site.json";

const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
import Footer from "@/components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bailo",
  description: "Bailo révolutionne la relation locataire-propriétaire avec transparence et sécurité. Évaluez et soyez évalué en toute sérénité.",
  url: "https://www.bailo.fr",
  logo: "https://secure-nest-space.lovable.app/favicon.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: siteData.contact.email,
    telephone: siteData.contact.phone,
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 rue de la Paix",
    addressLocality: "Paris",
    postalCode: "75002",
    addressCountry: "FR",
  },
  sameAs: siteData.socialLinks.map((s) => s.href),
};

const Index = () => {
  usePageTitle("pageTitle.home");

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <FeaturesSection />
          <PricingSection />
          <BlogSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
