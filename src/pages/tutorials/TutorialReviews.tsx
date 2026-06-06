import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.reviews.step1.title",
    descKey: "tutorials.reviews.step1.desc",
    fieldsKey: "tutorials.reviews.step1.fields",
    tipKey: "tutorials.reviews.step1.tip",
    screenshotSrc: "/src/assets/tutorials/reviews/tenant-review.png",
    screenshotUrl: "dashboard.bailo.be/reviews/review/[tenantApplicationId]",
  },
  {
    titleKey: "tutorials.reviews.step2.title",
    descKey: "tutorials.reviews.step2.desc",
    fieldsKey: "tutorials.reviews.step2.fields",
    tipKey: "tutorials.reviews.step2.tip",
    screenshotSrc: "/src/assets/tutorials/reviews/owner-review.png",
    screenshotUrl: "dashboard.bailo.be/reviews/review/[tenantApplicationId]",
  },
  {
    titleKey: "tutorials.reviews.step3.title",
    descKey: "tutorials.reviews.step3.desc",
    fieldsKey: "tutorials.reviews.step3.fields",
    tipKey: "tutorials.reviews.step3.tip",
    screenshotSrc: "/src/assets/tutorials/reviews/estate-review.png",
    screenshotUrl: "dashboard.bailo.be/reviews/review/[tenantApplicationId]",
  },
  {
    titleKey: "tutorials.reviews.step4.title",
    descKey: "tutorials.reviews.step4.desc",
    fieldsKey: "tutorials.reviews.step4.fields",
    tipKey: "tutorials.reviews.step4.tip",
    screenshotSrc: "/src/assets/tutorials/reviews/view-review.png",
    screenshotUrl: "dashboard.bailo.be/reviews/view/[type]/[id]",
  },
];

const TutorialReviews = () => {
  usePageTitle("pageTitle.tutorials.reviews", { path: "/tutorials/reviews" });

  return (
    <TutorialLayout
      titleKey="tutorials.reviews.title"
      subtitleKey="tutorials.reviews.subtitle"
      pageTitleKey="pageTitle.tutorials.reviews"
      accessStepsKey="tutorials.reviews.access.steps"
      accessUrlKey="tutorials.reviews.access.url"
      accessScreenshotSrc="/src/assets/tutorials/reviews/access.png"
      steps={steps}
    />
  );
};

export default TutorialReviews;
