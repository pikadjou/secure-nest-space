import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.createEstate.step1.title",
    descKey: "tutorials.createEstate.step1.desc",
    fieldsKey: "tutorials.createEstate.step1.fields",
    tipKey: "tutorials.createEstate.step1.tip",
    screenshotSrc: "/src/assets/tutorials/estate/general-info.png",
    screenshotUrl: "dashboard.bailo.be/estates/my-estate-form/new",
  },
  {
    titleKey: "tutorials.createEstate.step2.title",
    descKey: "tutorials.createEstate.step2.desc",
    fieldsKey: "tutorials.createEstate.step2.fields",
    tipKey: "tutorials.createEstate.step2.tip",
    screenshotSrc: "/src/assets/tutorials/estate/features.png",
    screenshotUrl: "dashboard.bailo.be/estates/my-estate-form/new",
  },
  {
    titleKey: "tutorials.createEstate.step3.title",
    descKey: "tutorials.createEstate.step3.desc",
    fieldsKey: "tutorials.createEstate.step3.fields",
    tipKey: "tutorials.createEstate.step3.tip",
    screenshotSrc: "/src/assets/tutorials/estate/availability.png",
    screenshotUrl: "dashboard.bailo.be/estates/my-estate-form/new",
  },
];

const TutorialCreateEstate = () => {
  usePageTitle("pageTitle.tutorials.createEstate", { path: "/tutorials/create-estate" });

  return (
    <TutorialLayout
      titleKey="tutorials.createEstate.title"
      subtitleKey="tutorials.createEstate.subtitle"
      pageTitleKey="pageTitle.tutorials.createEstate"
      accessStepsKey="tutorials.createEstate.access.steps"
      accessUrlKey="tutorials.createEstate.access.url"
      accessScreenshotSrc="/src/assets/tutorials/estate/access.png"
      steps={steps}
    />
  );
};

export default TutorialCreateEstate;
