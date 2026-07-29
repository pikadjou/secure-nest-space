import { useState } from "react";
import { Image, ZoomIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { screenshotDimensions } from "@/data/screenshotDimensions";

interface TutorialScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  url?: string;
}

const TutorialScreenshot = ({ src, alt, caption, url = "app.bailo.be" }: TutorialScreenshotProps) => {
  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const { t } = useLanguage();

  // Dimensions intrinsèques connues : elles sont posées sur le <img> pour que le
  // navigateur réserve la place avant le chargement (pas de saut de mise en page).
  const dimensions = screenshotDimensions[src];

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

        <div className={`bg-muted/10 ${dimensions && !hasError ? "" : "min-h-48"}`}>
          {!hasError ? (
            <button
              type="button"
              onClick={() => setIsZoomed(true)}
              aria-label={t("tutorials.screenshot.zoom")}
              className="group relative block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            >
              <img
                src={src}
                alt={alt}
                width={dimensions?.width}
                height={dimensions?.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
                onError={() => setHasError(true)}
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 bg-foreground/0 transition-all group-hover:opacity-100 group-hover:bg-foreground/10 group-focus-visible:opacity-100 group-focus-visible:bg-foreground/10">
                <span className="flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-sm font-medium text-foreground shadow-elevated">
                  <ZoomIn className="w-4 h-4" />
                  {t("tutorials.screenshot.zoom")}
                </span>
              </span>
            </button>
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

      {!hasError && (
        <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
          {/* Le centrage par défaut (left-50% + translate) réduit l'espace disponible à la
              moitié du viewport, ce qui écrase w-fit et affiche l'image sous sa taille réelle.
              On recentre via inset-x-0 + mx-auto pour que la largeur se calcule sur tout l'écran. */}
          <DialogContent className="left-0 right-0 translate-x-0 mx-auto w-fit max-w-[96vw] max-h-[92vh] overflow-auto p-3 pt-12">
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <img
              src={src}
              alt={alt}
              width={dimensions?.width}
              height={dimensions?.height}
              className="block w-auto max-w-full max-h-[80vh] rounded-md"
            />
          </DialogContent>
        </Dialog>
      )}
    </figure>
  );
};

export default TutorialScreenshot;
