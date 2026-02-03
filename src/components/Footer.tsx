import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { useLanguage } from "@/contexts/LanguageContext";
import siteData from "@/data/site.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">bailo</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {siteData.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.label}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.product")}</h4>
            <ul className="space-y-3">
              {siteData.footerLinks.product.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {siteData.footerLinks.company.map((link) => (
                <li key={link.labelKey}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {t(link.labelKey)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {siteData.footerLinks.legal.map((link) => (
                <li key={link.labelKey}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {t(link.labelKey)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>{siteData.contact.email}</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>{siteData.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{siteData.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              {t("footer.rights")}
            </p>
            <p className="text-primary-foreground/50 text-sm">
              {t("footer.madeWith")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <CookieSettingsButton />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
