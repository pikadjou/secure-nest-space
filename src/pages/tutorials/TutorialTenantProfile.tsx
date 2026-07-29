import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.tenantProfile.step1.title",
    descKey: "tutorials.tenantProfile.step1.desc",
    fieldsKey: "tutorials.tenantProfile.step1.fields",
    tipKey: "tutorials.tenantProfile.step1.tip",
    screenshotSrc: "/assets/tutorials/tenant-profile/tenant-info.webp",
    screenshotUrl: "dashboard.bailo.be/user/tenant",
  },
  {
    titleKey: "tutorials.tenantProfile.step2.title",
    descKey: "tutorials.tenantProfile.step2.desc",
    fieldsKey: "tutorials.tenantProfile.step2.fields",
    tipKey: "tutorials.tenantProfile.step2.tip",
    screenshotSrc: "/assets/tutorials/tenant-profile/visibility.webp",
    screenshotUrl: "dashboard.bailo.be/user/tenant",
  },
];

const TutorialTenantProfile = () => {
  usePageTitle("pageTitle.tutorials.tenantProfile", { path: "/tutorials/tenant-profile" });

  return (
    <TutorialLayout
      titleKey="tutorials.tenantProfile.title"
      subtitleKey="tutorials.tenantProfile.subtitle"
      pageTitleKey="pageTitle.tutorials.tenantProfile"
      accessStepsKey="tutorials.tenantProfile.access.steps"
      accessUrlKey="tutorials.tenantProfile.access.url"
      accessScreenshotSrc="/assets/tutorials/tenant-profile/access.webp"
      steps={steps}
    />
  );
};

export default TutorialTenantProfile;
