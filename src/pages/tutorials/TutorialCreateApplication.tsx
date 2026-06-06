import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.createApplication.step1.title",
    descKey: "tutorials.createApplication.step1.desc",
    fieldsKey: "tutorials.createApplication.step1.fields",
    tipKey: "tutorials.createApplication.step1.tip",
    screenshotSrc: "/src/assets/tutorials/application-create/select-estate.png",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/create",
  },
  {
    titleKey: "tutorials.createApplication.step2.title",
    descKey: "tutorials.createApplication.step2.desc",
    fieldsKey: "tutorials.createApplication.step2.fields",
    tipKey: "tutorials.createApplication.step2.tip",
    screenshotSrc: "/src/assets/tutorials/application-create/lease-details.png",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/create",
  },
  {
    titleKey: "tutorials.createApplication.step3.title",
    descKey: "tutorials.createApplication.step3.desc",
    fieldsKey: "tutorials.createApplication.step3.fields",
    tipKey: "tutorials.createApplication.step3.tip",
    screenshotSrc: "/src/assets/tutorials/application-create/add-tenants.png",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/create",
  },
];

const TutorialCreateApplication = () => {
  usePageTitle("pageTitle.tutorials.createApplication", { path: "/tutorials/create-application" });

  return (
    <TutorialLayout
      titleKey="tutorials.createApplication.title"
      subtitleKey="tutorials.createApplication.subtitle"
      pageTitleKey="pageTitle.tutorials.createApplication"
      accessStepsKey="tutorials.createApplication.access.steps"
      accessUrlKey="tutorials.createApplication.access.url"
      accessScreenshotSrc="/src/assets/tutorials/application-create/access.png"
      steps={steps}
    />
  );
};

export default TutorialCreateApplication;
