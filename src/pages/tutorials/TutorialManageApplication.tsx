import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.manageApplication.step1.title",
    descKey: "tutorials.manageApplication.step1.desc",
    fieldsKey: "tutorials.manageApplication.step1.fields",
    tipKey: "tutorials.manageApplication.step1.tip",
    screenshotSrc: "/assets/tutorials/application-manage/overview.webp",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/detail/[id]",
  },
  {
    titleKey: "tutorials.manageApplication.step2.title",
    descKey: "tutorials.manageApplication.step2.desc",
    fieldsKey: "tutorials.manageApplication.step2.fields",
    tipKey: "tutorials.manageApplication.step2.tip",
    screenshotSrc: "/assets/tutorials/application-manage/tabs.webp",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/detail/[id]",
  },
  {
    titleKey: "tutorials.manageApplication.step3.title",
    descKey: "tutorials.manageApplication.step3.desc",
    fieldsKey: "tutorials.manageApplication.step3.fields",
    tipKey: "tutorials.manageApplication.step3.tip",
    screenshotSrc: "/assets/tutorials/application-manage/upload-document.webp",
    screenshotUrl: "dashboard.bailo.be/tenant-applications/detail/[id]/documents",
  },
];

const TutorialManageApplication = () => {
  usePageTitle("pageTitle.tutorials.manageApplication", { path: "/tutorials/manage-application" });

  return (
    <TutorialLayout
      titleKey="tutorials.manageApplication.title"
      subtitleKey="tutorials.manageApplication.subtitle"
      pageTitleKey="pageTitle.tutorials.manageApplication"
      accessStepsKey="tutorials.manageApplication.access.steps"
      accessUrlKey="tutorials.manageApplication.access.url"
      accessScreenshotSrc="/assets/tutorials/application-manage/access.webp"
      steps={steps}
    />
  );
};

export default TutorialManageApplication;
