import LegalPage from "@/components/LegalPage";
import legalData from "@/data/legal.json";
import usePageTitle from "@/hooks/usePageTitle";

const Terms = () => {
  usePageTitle("pageTitle.terms", { path: "/terms" });
  return (
    <LegalPage
      titleKey={legalData.terms.titleKey}
      lastUpdatedKey={legalData.terms.lastUpdatedKey}
      sections={legalData.terms.sections}
    />
  );
};

export default Terms;
