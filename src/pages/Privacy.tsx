import LegalPage from "@/components/LegalPage";
import legalData from "@/data/legal.json";

const Privacy = () => {
  return (
    <LegalPage
      titleKey={legalData.privacy.titleKey}
      lastUpdatedKey={legalData.privacy.lastUpdatedKey}
      sections={legalData.privacy.sections}
    />
  );
};

export default Privacy;
