import LegalPage from "@/components/LegalPage";
import legalData from "@/data/legal.json";
import usePageTitle from "@/hooks/usePageTitle";

const LegalNotice = () => {
  usePageTitle("pageTitle.legalNotice", { path: "/legal-notice" });
  return (
    <LegalPage
      titleKey={legalData.legalNotice.titleKey}
      lastUpdatedKey={legalData.legalNotice.lastUpdatedKey}
      sections={legalData.legalNotice.sections}
    />
  );
};

export default LegalNotice;
