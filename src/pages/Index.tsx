import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import usePageTitle from "@/hooks/usePageTitle";

const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
import Footer from "@/components/Footer";

const Index = () => {
  usePageTitle("pageTitle.home");

  return (
    <div className="min-h-screen bg-background">
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
