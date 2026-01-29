import LegalPage from "@/components/LegalPage";
import legalData from "@/data/legal.json";

const Terms = () => {
  return (
    <LegalPage
      titleKey={legalData.terms.titleKey}
      lastUpdatedKey={legalData.terms.lastUpdatedKey}
      sections={legalData.terms.sections}
    />
  );
};

export default Terms;
