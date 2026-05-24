import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchBanner from "@/components/LaunchBanner";
import usePageTitle from "@/hooks/usePageTitle";

const Launch = () => {
  usePageTitle("pageTitle.launch", { path: "/launch" });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center pt-16 lg:pt-20">
        <div className="w-full">
          <LaunchBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Launch;
