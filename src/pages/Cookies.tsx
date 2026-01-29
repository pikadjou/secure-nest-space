import LegalPage from "@/components/LegalPage";
import legalData from "@/data/legal.json";

const Cookies = () => {
  return (
    <LegalPage
      titleKey={legalData.cookies.titleKey}
      lastUpdatedKey={legalData.cookies.lastUpdatedKey}
      sections={legalData.cookies.sections}
    />
  );
};

export default Cookies;
