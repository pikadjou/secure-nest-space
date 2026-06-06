import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.validateApplication.step1.title",
    descKey: "tutorials.validateApplication.step1.desc",
    fieldsKey: "tutorials.validateApplication.step1.fields",
    tipKey: "tutorials.validateApplication.step1.tip",
    screenshotSrc: "/src/assets/tutorials/application-validate/parties.png",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/detail/[id]",
  },
  {
    titleKey: "tutorials.validateApplication.step2.title",
    descKey: "tutorials.validateApplication.step2.desc",
    fieldsKey: "tutorials.validateApplication.step2.fields",
    tipKey: "tutorials.validateApplication.step2.tip",
    screenshotSrc: "/src/assets/tutorials/application-validate/lease-details.png",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/detail/[id]",
  },
  {
    titleKey: "tutorials.validateApplication.step3.title",
    descKey: "tutorials.validateApplication.step3.desc",
    fieldsKey: "tutorials.validateApplication.step3.fields",
    tipKey: "tutorials.validateApplication.step3.tip",
    screenshotSrc: "/src/assets/tutorials/application-validate/actions.png",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/detail/[id]",
  },
];

const TutorialValidateApplication = () => {
  usePageTitle("pageTitle.tutorials.validateApplication", { path: "/tutorials/validate-application" });

  return (
    <TutorialLayout
      titleKey="tutorials.validateApplication.title"
      subtitleKey="tutorials.validateApplication.subtitle"
      pageTitleKey="pageTitle.tutorials.validateApplication"
      accessStepsKey="tutorials.validateApplication.access.steps"
      accessUrlKey="tutorials.validateApplication.access.url"
      accessScreenshotSrc="/src/assets/tutorials/application-validate/access.png"
      steps={steps}
    />
  );
};

export default TutorialValidateApplication;
