import LegalPage from "@/components/LegalPage";
import legalData from "@/data/legal.json";
import usePageTitle from "@/hooks/usePageTitle";

const Privacy = () => {
  usePageTitle("pageTitle.privacy");
  return (
    <LegalPage
      titleKey={legalData.privacy.titleKey}
      lastUpdatedKey={legalData.privacy.lastUpdatedKey}
      sections={legalData.privacy.sections}
    />
  );
};

export default Privacy;
