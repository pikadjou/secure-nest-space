import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.ownerProfile.step1.title",
    descKey: "tutorials.ownerProfile.step1.desc",
    fieldsKey: "tutorials.ownerProfile.step1.fields",
    tipKey: "tutorials.ownerProfile.step1.tip",
    screenshotSrc: "/src/assets/tutorials/owner-profile/owner-info.png",
    screenshotUrl: "dashboard.bailo.be/user/owner",
  },
  {
    titleKey: "tutorials.ownerProfile.step2.title",
    descKey: "tutorials.ownerProfile.step2.desc",
    fieldsKey: "tutorials.ownerProfile.step2.fields",
    tipKey: "tutorials.ownerProfile.step2.tip",
    screenshotSrc: "/src/assets/tutorials/owner-profile/visibility.png",
    screenshotUrl: "dashboard.bailo.be/user/owner",
  },
];

const TutorialOwnerProfile = () => {
  usePageTitle("pageTitle.tutorials.ownerProfile", { path: "/tutorials/owner-profile" });

  return (
    <TutorialLayout
      titleKey="tutorials.ownerProfile.title"
      subtitleKey="tutorials.ownerProfile.subtitle"
      pageTitleKey="pageTitle.tutorials.ownerProfile"
      accessStepsKey="tutorials.ownerProfile.access.steps"
      accessUrlKey="tutorials.ownerProfile.access.url"
      accessScreenshotSrc="/src/assets/tutorials/owner-profile/access.png"
      steps={steps}
    />
  );
};

export default TutorialOwnerProfile;
