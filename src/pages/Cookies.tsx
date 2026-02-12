import LegalPage from "@/components/LegalPage";
import legalData from "@/data/legal.json";
import usePageTitle from "@/hooks/usePageTitle";

const Cookies = () => {
  usePageTitle("pageTitle.cookies", { path: "/cookies" });
  return (
    <LegalPage
      titleKey={legalData.cookies.titleKey}
      lastUpdatedKey={legalData.cookies.lastUpdatedKey}
      sections={legalData.cookies.sections}
    />
  );
};

export default Cookies;
