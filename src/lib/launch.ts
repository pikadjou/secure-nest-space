import siteData from "@/data/site.json";

export const isLaunchMode = (): boolean => siteData.launch === true;

/**
 * Returns the launch page path if in launch mode, otherwise the original URL.
 */
export const getLaunchUrl = (originalUrl: string): string => {
  if (isLaunchMode()) {
    return "/launch";
  }
  return originalUrl;
};
