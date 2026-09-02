import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pushPageView } from "@/lib/gtm";

/**
 * Pushes a `page_view` event to the dataLayer on every client-side navigation.
 * GTM does not track SPA route changes on its own, so this keeps virtual page
 * views in sync with react-router.
 *
 * The push is deferred to the next macrotask so the page component's own
 * effects (usePageTitle) have already updated document.title.
 */
const GtmPageView = () => {
  const location = useLocation();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      pushPageView(location.pathname + location.search, document.title);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [location.pathname, location.search]);

  return null;
};

export default GtmPageView;
