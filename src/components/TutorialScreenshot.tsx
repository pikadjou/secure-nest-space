import { useState } from "react";
import { Image } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TutorialScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  url?: string;
}

const TutorialScreenshot = ({ src, alt, caption, url = "app.bailo.be" }: TutorialScreenshotProps) => {
  const [hasError, setHasError] = useState(false);
  const { t } = useLanguage();

  return (
    <figure className="w-full">
      <div className="rounded-xl border border-border shadow-elevated overflow-hidden">
        <div className="flex items-center gap-3 bg-muted px-4 py-3 border-b border-border">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-background rounded-md px-3 py-1 text-xs text-muted-foreground text-center truncate">
            {url}
          </div>
        </div>

        <div className="bg-muted/10 min-h-48">
          {!hasError ? (
            <img
              src={src}
              alt={alt}
              className="w-full block"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-8 gap-4 text-center">
              <Image className="w-12 h-12 text-muted-foreground/40" />
              <p className="text-muted-foreground font-medium text-sm">
                {t("tutorials.screenshot.placeholder")}
              </p>
              <code className="text-xs text-muted-foreground/70 bg-muted rounded-md px-3 py-1.5 break-all">
                {src}
              </code>
            </div>
          )}
        </div>
      </div>

      {caption && (
        <figcaption className="text-sm text-muted-foreground italic text-center mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default TutorialScreenshot;
