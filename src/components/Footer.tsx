import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    produit: [
      { label: t("footer.features"), href: "#features" },
      { label: t("footer.pricing"), href: "#pricing" },
      { label: t("footer.faq"), href: "#faq" },
      { label: t("footer.testimonials"), href: "#testimonials" },
    ],
    entreprise: [
      { label: t("footer.about"), href: "#" },
      { label: t("footer.blog"), href: "#" },
      { label: t("footer.careers"), href: "#" },
      { label: t("footer.press"), href: "#" },
    ],
    legal: [
      { label: t("footer.terms"), href: "#" },
      { label: t("footer.privacy"), href: "#" },
      { label: t("footer.legalNotice"), href: "#" },
      { label: t("footer.cookies"), href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">bailo</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.product")}</h4>
            <ul className="space-y-3">
              {footerLinks.produit.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
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
                <span>contact@bailo.fr</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>12 rue de la Paix, 75002 Paris</span>
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
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
