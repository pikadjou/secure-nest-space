import { useLanguage } from "@/contexts/LanguageContext";

const VIDEO_URL = "https://www.youtube-nocookie.com/embed/yHBvExEyMR4?rel=0";

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="video" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-6">
            {t("video.title.first")}{" "}
            <span className="text-primary">{t("video.title.second")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("video.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated border border-border/50 bg-muted">
            <iframe
              src={VIDEO_URL}
              title={t("video.iframeTitle")}
              className="w-full h-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
