import LegalPage from "@/components/LegalPage";
import legalData from "@/data/legal.json";

const LegalNotice = () => {
  return (
    <LegalPage
      titleKey={legalData.legalNotice.titleKey}
      lastUpdatedKey={legalData.legalNotice.lastUpdatedKey}
      sections={legalData.legalNotice.sections}
    />
  );
};

export default LegalNotice;
