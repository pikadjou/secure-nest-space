import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, Mail, CheckCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import siteData from "@/data/site.json";
import { z } from "zod";

const emailSchema = z.string().trim().email().max(255);

const API_URL =
  "https://bailo-api-support-gggre3bbd8d2bpf8.francecentral-01.azurewebsites.net/api/interested";

const TURNSTILE_SITE_KEY = "0x4AAAAAACl_a8tEiEnQAgym";

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const LaunchBanner = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderTurnstile = useCallback(() => {
    if (turnstileRef.current && window.turnstile && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        theme: "light",
        size: "normal",
      });
    }
  }, []);

  useEffect(() => {
    if (window.turnstile) {
      renderTurnstile();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderTurnstile();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [renderTurnstile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      setMessage(t("launch.error.invalidEmail"));
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setMessage(t("launch.error.turnstile"));
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data, turnstileToken }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || t("launch.error.generic"));
      } else {
        setStatus("success");
        setMessage(t("launch.success"));
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage(t("launch.error.generic"));
    }

    // Reset turnstile for next attempt
    setTurnstileToken(null);
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">{t("launch.badge")}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("launch.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("launch.description")}
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder={t("launch.emailPlaceholder")}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "loading"}
                  className="h-12"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={status === "loading" || !turnstileToken}
                className="shrink-0"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Mail className="w-4 h-4" />
                )}
                {t("launch.cta")}
              </Button>
            </div>
            <div className="flex justify-center mt-4">
              <div ref={turnstileRef} />
            </div>
          </form>

          {/* Status message */}
          {status === "success" && (
            <div className="flex items-center justify-center gap-2 text-secondary font-medium animate-fade-in">
              <CheckCircle className="w-5 h-5" />
              <span>{message}</span>
            </div>
          )}
          {status === "error" && (
            <p className="text-destructive text-sm animate-fade-in">{message}</p>
          )}

          {/* Social links */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-3">{t("launch.social")}</p>
            <div className="flex justify-center gap-4">
              {siteData.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all text-sm font-medium text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchBanner;
