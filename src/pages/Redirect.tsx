import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SCOPE_MAP: Record<string, string> = {
  // Tutorials
  "tutorials":                    "/tutorials",
  "tutorial-profile":             "/tutorials/profile",
  "tutorial-owner-profile":       "/tutorials/owner-profile",
  "tutorial-tenant-profile":      "/tutorials/tenant-profile",
  "tutorial-estate":              "/tutorials/create-estate",
  "tutorial-create-application":  "/tutorials/create-application",
  "tutorial-validate-application":"/tutorials/validate-application",
  "tutorial-manage-application":  "/tutorials/manage-application",
  "tutorial-reviews":             "/tutorials/reviews",

  // Main pages
  "home":         "/",
  "how-it-works": "/how-it-works",
  "blog":         "/blog",
  "faq":          "/faq",
  "support":      "/support",
  "about":        "/about",
  "pricing":      "/#pricing",
  "features":     "/#features",
};

const Redirect = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const scope = params.get("scope") ?? "";

  useEffect(() => {
    const target = SCOPE_MAP[scope] ?? "/";
    navigate(target, { replace: true });
  }, [scope, navigate]);

  return null;
};

export default Redirect;
