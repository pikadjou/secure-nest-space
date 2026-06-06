import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.profile.step1.title",
    descKey: "tutorials.profile.step1.desc",
    fieldsKey: "tutorials.profile.step1.fields",
    tipKey: "tutorials.profile.step1.tip",
    screenshotSrc: "/src/assets/tutorials/profile/basic-info.png",
    screenshotUrl: "dashboard.bailo.be/user/my-profile",
  },
  {
    titleKey: "tutorials.profile.step2.title",
    descKey: "tutorials.profile.step2.desc",
    fieldsKey: "tutorials.profile.step2.fields",
    tipKey: "tutorials.profile.step2.tip",
    screenshotSrc: "/src/assets/tutorials/profile/role-selection.png",
    screenshotUrl: "dashboard.bailo.be/user/my-profile",
  },
  {
    titleKey: "tutorials.profile.step3.title",
    descKey: "tutorials.profile.step3.desc",
    fieldsKey: "tutorials.profile.step3.fields",
    tipKey: "tutorials.profile.step3.tip",
    screenshotSrc: "/src/assets/tutorials/profile/kyc-verification.png",
    screenshotUrl: "dashboard.bailo.be/user/my-profile",
  },
];

const TutorialProfile = () => {
  usePageTitle("pageTitle.tutorials.profile", { path: "/tutorials/profile" });

  return (
    <TutorialLayout
      titleKey="tutorials.profile.title"
      subtitleKey="tutorials.profile.subtitle"
      pageTitleKey="pageTitle.tutorials.profile"
      accessStepsKey="tutorials.profile.access.steps"
      accessUrlKey="tutorials.profile.access.url"
      accessScreenshotSrc="/src/assets/tutorials/profile/access.png"
      steps={steps}
    />
  );
};

export default TutorialProfile;
