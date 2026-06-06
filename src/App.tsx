import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";

const Blog = lazy(() => import("./pages/Blog"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const Support = lazy(() => import("./pages/Support"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const LegalNotice = lazy(() => import("./pages/LegalNotice"));
const Cookies = lazy(() => import("./pages/Cookies"));
const About = lazy(() => import("./pages/About"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Launch = lazy(() => import("./pages/Launch"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Tutorials = lazy(() => import("./pages/Tutorials"));
const TutorialProfile = lazy(() => import("./pages/tutorials/TutorialProfile"));
const TutorialOwnerProfile = lazy(() => import("./pages/tutorials/TutorialOwnerProfile"));
const TutorialTenantProfile = lazy(() => import("./pages/tutorials/TutorialTenantProfile"));
const TutorialCreateEstate = lazy(() => import("./pages/tutorials/TutorialCreateEstate"));
const TutorialCreateApplication = lazy(() => import("./pages/tutorials/TutorialCreateApplication"));
const TutorialValidateApplication = lazy(() => import("./pages/tutorials/TutorialValidateApplication"));
const TutorialManageApplication = lazy(() => import("./pages/tutorials/TutorialManageApplication"));
const TutorialReviews = lazy(() => import("./pages/tutorials/TutorialReviews"));
const Redirect = lazy(() => import("./pages/Redirect"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <CookieConsentProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Suspense fallback={<div className="min-h-screen" />}><Blog /></Suspense>} />
              <Route path="/blog/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><ArticleDetail /></Suspense>} />
              <Route path="/support" element={<Suspense fallback={<div className="min-h-screen" />}><Support /></Suspense>} />
              <Route path="/faq" element={<Suspense fallback={<div className="min-h-screen" />}><FAQ /></Suspense>} />
              <Route path="/terms" element={<Suspense fallback={<div className="min-h-screen" />}><Terms /></Suspense>} />
              <Route path="/privacy" element={<Suspense fallback={<div className="min-h-screen" />}><Privacy /></Suspense>} />
              <Route path="/legal-notice" element={<Suspense fallback={<div className="min-h-screen" />}><LegalNotice /></Suspense>} />
              <Route path="/cookies" element={<Suspense fallback={<div className="min-h-screen" />}><Cookies /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<div className="min-h-screen" />}><About /></Suspense>} />
              <Route path="/how-it-works" element={<Suspense fallback={<div className="min-h-screen" />}><HowItWorks /></Suspense>} />
              <Route path="/launch" element={<Suspense fallback={<div className="min-h-screen" />}><Launch /></Suspense>} />
              <Route path="/tutorials" element={<Suspense fallback={<div className="min-h-screen" />}><Tutorials /></Suspense>} />
              <Route path="/tutorials/profile" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialProfile /></Suspense>} />
              <Route path="/tutorials/owner-profile" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialOwnerProfile /></Suspense>} />
              <Route path="/tutorials/tenant-profile" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialTenantProfile /></Suspense>} />
              <Route path="/tutorials/create-estate" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialCreateEstate /></Suspense>} />
              <Route path="/tutorials/create-application" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialCreateApplication /></Suspense>} />
              <Route path="/tutorials/validate-application" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialValidateApplication /></Suspense>} />
              <Route path="/tutorials/manage-application" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialManageApplication /></Suspense>} />
              <Route path="/tutorials/reviews" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialReviews /></Suspense>} />
              <Route path="/go" element={<Suspense fallback={null}><Redirect /></Suspense>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<Suspense fallback={<div className="min-h-screen" />}><NotFound /></Suspense>} />
            </Routes>
            <CookieBanner />
          </BrowserRouter>
        </TooltipProvider>
      </CookieConsentProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
