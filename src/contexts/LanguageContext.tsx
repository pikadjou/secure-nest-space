import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translations
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.features": "Fonctionnalités",
    "nav.pricing": "Abonnement",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.support": "Support",
    "nav.login": "Connexion",
    "nav.signup": "S'inscrire",

    // Hero Section
    "hero.badge.kyc": "Vérification KYC",
    "hero.badge.ratings": "Évaluations certifiées",
    "hero.badge.users": "+10 000 utilisateurs",
    "hero.title.platform": "LA PLATEFORME DE",
    "hero.title.trust": "CONFIANCE",
    "hero.title.for": "POUR VOS",
    "hero.title.rentals": "LOCATIONS",
    "hero.description": "Évaluez et soyez évalué en toute sérénité. Bailo révolutionne la relation locataire-propriétaire avec transparence et sécurité.",
    "hero.cta.discover": "Découvrir la plateforme",
    "hero.cta.demo": "Voir la démonstration",
    "hero.partners": "Ils nous font confiance",
    "hero.secure": "100% Sécurisé",
    "hero.encrypted": "Données cryptées",
    "hero.avgRating": "Note moyenne",

    // Features Section
    "features.title": "Pourquoi choisir",
    "features.subtitle": "Une plateforme conçue pour révolutionner la confiance dans l'immobilier locatif. Découvrez nos avantages qui font la différence.",
    "features.secure.title": "Parcours Sécurisé",
    "features.secure.desc": "Vérification d'identité KYC et validation des documents pour une confiance mutuelle totale.",
    "features.verified.title": "Profils Vérifiés",
    "features.verified.desc": "Chaque utilisateur dispose d'un profil vérifié avec historique complet des évaluations.",
    "features.simple.title": "Simplicité d'Usage",
    "features.simple.desc": "Interface intuitive et processus d'évaluation simplifié en quelques clics seulement.",
    "features.ratings.title": "Évaluations Fiables",
    "features.ratings.desc": "Système d'évaluation bidirectionnel avec photos et commentaires détaillés authentifiés.",
    "features.transparent.title": "Transparence Totale",
    "features.transparent.desc": "Accès complet à l'historique des locations et des évaluations pour une décision éclairée.",
    "features.privacy.title": "Protection des Données",
    "features.privacy.desc": "Conformité RGPD et cryptage de toutes vos données personnelles et sensibles.",
    "features.cta.title": "Rejoignez plus de 10 000 utilisateurs satisfaits",
    "features.cta.subtitle": "Commencez dès aujourd'hui à construire votre réputation locative",
    "features.cta.button": "Commencer maintenant",

    // Pricing Section
    "pricing.title": "Choisissez votre",
    "pricing.title.highlight": "abonnement",
    "pricing.subtitle": "Commencez gratuitement ou passez Premium pour accéder à toutes les fonctionnalités avancées.",
    "pricing.basic.name": "Basique",
    "pricing.basic.desc": "Parfait pour commencer votre parcours locatif",
    "pricing.basic.price": "Gratuit",
    "pricing.basic.cta": "Commencer gratuitement",
    "pricing.premium.name": "Premium",
    "pricing.premium.desc": "L'abonnement complet pour les professionnels",
    "pricing.premium.price": "9,90€",
    "pricing.premium.period": "/mois",
    "pricing.premium.subtitle": "Sans engagement • Annulation à tout moment",
    "pricing.premium.cta": "Passer au Premium",
    "pricing.premium.trial": "Essai gratuit 14 jours • Aucune carte requise",
    "pricing.popular": "Le plus populaire",
    "pricing.features": "Fonctionnalités incluses :",
    "pricing.feature.kyc": "Profil vérifié KYC",
    "pricing.feature.3reviews": "3 évaluations par mois",
    "pricing.feature.profiles": "Consultation des profils",
    "pricing.feature.emailSupport": "Support par email",
    "pricing.feature.6months": "Historique 6 mois",
    "pricing.feature.all": "Tout du plan Basique",
    "pricing.feature.unlimited": "Évaluations illimitées",
    "pricing.feature.photos": "Photos illimitées",
    "pricing.feature.badge": "Badge Premium visible",
    "pricing.feature.fullHistory": "Historique complet",
    "pricing.feature.analytics": "Analytics détaillés",
    "pricing.feature.prioritySupport": "Support prioritaire 24/7",
    "pricing.feature.export": "Export des données",
    "pricing.feature.notifications": "Notifications avancées",
    "pricing.trust.ssl": "Paiement sécurisé SSL",
    "pricing.trust.invoice": "Facture automatique",
    "pricing.trust.support": "Support client réactif",

    // Blog Section
    "blog.title": "Nos derniers",
    "blog.title.highlight": "articles",
    "blog.subtitle": "Conseils, guides et actualités pour réussir votre parcours locatif.",
    "blog.viewAll": "Voir tous les articles",
    "blog.hero.title": "Le Blog",
    "blog.hero.subtitle": "Conseils, guides et actualités pour réussir votre parcours locatif",
    "blog.search": "Rechercher un article...",
    "blog.all": "Tous",
    "blog.noResults": "Aucun article trouvé",

    // Footer
    "footer.description": "La plateforme qui simplifie la location immobilière pour tous.",
    "footer.product": "Produit",
    "footer.company": "Entreprise",
    "footer.legal": "Légal",
    "footer.contact": "Contact",
    "footer.features": "Fonctionnalités",
    "footer.pricing": "Tarifs",
    "footer.faq": "FAQ",
    "footer.testimonials": "Témoignages",
    "footer.about": "À propos",
    "footer.blog": "Blog",
    "footer.careers": "Carrières",
    "footer.press": "Presse",
    "footer.terms": "Conditions générales",
    "footer.privacy": "Politique de confidentialité",
    "footer.legalNotice": "Mentions légales",
    "footer.cookies": "Cookies",
    "footer.rights": "© 2024 Bailo. Tous droits réservés.",
    "footer.madeWith": "Fait avec ❤️ en France",
    "footer.language": "Langue",

    // FAQ
    "faq.badge": "Centre d'aide",
    "faq.title": "Questions Fréquentes",
    "faq.subtitle": "Retrouvez les réponses aux questions les plus courantes sur Bailo. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.",
    "faq.contact.title": "Vous n'avez pas trouvé votre réponse ?",
    "faq.contact.subtitle": "Notre équipe support est disponible pour vous aider avec toutes vos questions.",
    "faq.contact.button": "Contacter le support",
    "faq.cat.general": "Général",
    "faq.cat.payment": "Abonnement & Paiement",
    "faq.cat.features": "Fonctionnalités",
    "faq.cat.technical": "Technique & Support",
    "faq.q1": "Qu'est-ce que Bailo ?",
    "faq.a1": "Bailo est une plateforme dédiée à la danse qui vous permet de découvrir des cours, des événements et de rejoindre une communauté passionnée. Que vous soyez débutant ou danseur confirmé, Bailo vous accompagne dans votre parcours.",
    "faq.q2": "Bailo est-il gratuit ?",
    "faq.a2": "Bailo propose une version gratuite avec des fonctionnalités de base. Pour accéder à l'ensemble des fonctionnalités premium, des abonnements mensuels et annuels sont disponibles à des tarifs avantageux.",
    "faq.q3": "Comment créer un compte ?",
    "faq.a3": "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut de la page. Remplissez le formulaire avec vos informations personnelles, validez votre email et vous pourrez commencer à utiliser Bailo immédiatement.",
    "faq.q4": "Quels sont les moyens de paiement acceptés ?",
    "faq.a4": "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal et les virements bancaires pour les abonnements annuels. Tous les paiements sont sécurisés via notre partenaire Stripe.",
    "faq.q5": "Puis-je annuler mon abonnement à tout moment ?",
    "faq.a5": "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. L'annulation prendra effet à la fin de votre période de facturation en cours, et vous conserverez l'accès jusqu'à cette date.",
    "faq.q6": "Comment obtenir un remboursement ?",
    "faq.a6": "Si vous n'êtes pas satisfait, vous disposez de 14 jours après votre souscription pour demander un remboursement complet. Contactez notre support via la page de support avec votre ID Bailo pour initier la procédure.",
    "faq.q7": "Comment trouver des cours près de chez moi ?",
    "faq.a7": "Utilisez la fonction de recherche géolocalisée dans l'application. Activez votre localisation ou entrez manuellement votre ville pour découvrir tous les cours et événements disponibles dans votre région.",
    "faq.q8": "Puis-je publier mes propres événements ?",
    "faq.a8": "Oui, avec un compte Pro ou Business, vous pouvez créer et publier vos propres événements de danse. Accédez à votre tableau de bord, cliquez sur 'Créer un événement' et remplissez les informations requises.",
    "faq.q9": "Comment fonctionne le système de notation ?",
    "faq.a9": "Après chaque cours ou événement auquel vous participez, vous pouvez laisser une note de 1 à 5 étoiles accompagnée d'un commentaire. Ces avis aident la communauté à trouver les meilleures expériences.",
    "faq.q10": "L'application est-elle disponible sur mobile ?",
    "faq.a10": "Bailo est accessible via votre navigateur web sur mobile et ordinateur. Une application native iOS et Android est actuellement en développement et sera disponible prochainement.",
    "faq.q11": "J'ai oublié mon mot de passe, que faire ?",
    "faq.a11": "Cliquez sur 'Connexion' puis sur 'Mot de passe oublié'. Entrez votre adresse email et vous recevrez un lien pour réinitialiser votre mot de passe dans les minutes qui suivent.",
    "faq.q12": "Comment contacter le support ?",
    "faq.a12": "Vous pouvez contacter notre équipe support via la page dédiée en créant un ticket. Nous nous engageons à répondre sous 24h ouvrées. Pour les urgences, vous pouvez également nous joindre sur nos réseaux sociaux.",

    // Support
    "support.badge": "Support Client",
    "support.title": "Créer un ticket de support",
    "support.subtitle": "Décrivez votre problème ou votre question et notre équipe vous répondra rapidement.",
    "support.form.title": "Nouveau ticket",
    "support.form.subtitle": "Remplissez le formulaire ci-dessous. Les champs marqués d'un * sont obligatoires.",
    "support.form.lastName": "Nom",
    "support.form.firstName": "Prénom",
    "support.form.bailoId": "ID Bailo",
    "support.form.message": "Message",
    "support.form.messagePlaceholder": "Décrivez votre problème ou votre question en détail...",
    "support.form.attachments": "Pièces jointes (optionnel)",
    "support.form.attachmentsHelp": "Formats acceptés: JPG, PNG, GIF, PDF, DOC. Maximum 10MB par fichier, 5 fichiers maximum.",
    "support.form.addFiles": "Ajouter des fichiers",
    "support.form.filesCount": "fichiers",
    "support.form.submit": "Envoyer le ticket",
    "support.success.title": "Ticket envoyé avec succès !",
    "support.success.message": "Votre demande a été enregistrée. Notre équipe vous répondra dans les plus brefs délais.",
    "support.success.ticketNumber": "Numéro de ticket",
    "support.success.newTicket": "Créer un autre ticket",
    "support.success.backHome": "Retour à l'accueil",
    "support.error.fileTooLarge": "Fichier trop volumineux",
    "support.error.fileTooLargeDesc": "dépasse la limite de 10MB",
    "support.error.unsupportedType": "Type de fichier non supporté",
    "support.error.unsupportedTypeDesc": "n'est pas un format accepté (JPG, PNG, GIF, PDF, DOC)",
    "support.error.maxFiles": "Limite atteinte",
    "support.error.maxFilesDesc": "Vous ne pouvez pas ajouter plus de 5 pièces jointes",
    "support.validation.lastName": "Le nom doit contenir au moins 2 caractères",
    "support.validation.lastNameMax": "Le nom ne peut pas dépasser 50 caractères",
    "support.validation.firstName": "Le prénom doit contenir au moins 2 caractères",
    "support.validation.firstNameMax": "Le prénom ne peut pas dépasser 50 caractères",
    "support.validation.bailoId": "L'ID Bailo doit contenir au moins 5 caractères",
    "support.validation.bailoIdMax": "L'ID Bailo ne peut pas dépasser 20 caractères",
    "support.validation.message": "Le message doit contenir au moins 20 caractères",
    "support.validation.messageMax": "Le message ne peut pas dépasser 2000 caractères",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.support": "Support",
    "nav.login": "Login",
    "nav.signup": "Sign up",

    // Hero Section
    "hero.badge.kyc": "KYC Verification",
    "hero.badge.ratings": "Certified Ratings",
    "hero.badge.users": "+10,000 users",
    "hero.title.platform": "THE",
    "hero.title.trust": "TRUSTED",
    "hero.title.for": "PLATFORM FOR YOUR",
    "hero.title.rentals": "RENTALS",
    "hero.description": "Rate and be rated with peace of mind. Bailo revolutionizes the tenant-landlord relationship with transparency and security.",
    "hero.cta.discover": "Discover the platform",
    "hero.cta.demo": "Watch the demo",
    "hero.partners": "They trust us",
    "hero.secure": "100% Secure",
    "hero.encrypted": "Encrypted data",
    "hero.avgRating": "Average rating",

    // Features Section
    "features.title": "Why choose",
    "features.subtitle": "A platform designed to revolutionize trust in rental real estate. Discover our advantages that make the difference.",
    "features.secure.title": "Secure Process",
    "features.secure.desc": "KYC identity verification and document validation for complete mutual trust.",
    "features.verified.title": "Verified Profiles",
    "features.verified.desc": "Each user has a verified profile with complete review history.",
    "features.simple.title": "Easy to Use",
    "features.simple.desc": "Intuitive interface and simplified review process in just a few clicks.",
    "features.ratings.title": "Reliable Reviews",
    "features.ratings.desc": "Bidirectional rating system with authenticated photos and detailed comments.",
    "features.transparent.title": "Total Transparency",
    "features.transparent.desc": "Complete access to rental and review history for an informed decision.",
    "features.privacy.title": "Data Protection",
    "features.privacy.desc": "GDPR compliance and encryption of all your personal and sensitive data.",
    "features.cta.title": "Join over 10,000 satisfied users",
    "features.cta.subtitle": "Start building your rental reputation today",
    "features.cta.button": "Get started now",

    // Pricing Section
    "pricing.title": "Choose your",
    "pricing.title.highlight": "plan",
    "pricing.subtitle": "Start for free or upgrade to Premium for access to all advanced features.",
    "pricing.basic.name": "Basic",
    "pricing.basic.desc": "Perfect to start your rental journey",
    "pricing.basic.price": "Free",
    "pricing.basic.cta": "Get started for free",
    "pricing.premium.name": "Premium",
    "pricing.premium.desc": "The complete subscription for professionals",
    "pricing.premium.price": "€9.90",
    "pricing.premium.period": "/month",
    "pricing.premium.subtitle": "No commitment • Cancel anytime",
    "pricing.premium.cta": "Upgrade to Premium",
    "pricing.premium.trial": "14-day free trial • No card required",
    "pricing.popular": "Most popular",
    "pricing.features": "Features included:",
    "pricing.feature.kyc": "Verified KYC profile",
    "pricing.feature.3reviews": "3 reviews per month",
    "pricing.feature.profiles": "Profile viewing",
    "pricing.feature.emailSupport": "Email support",
    "pricing.feature.6months": "6-month history",
    "pricing.feature.all": "Everything in Basic",
    "pricing.feature.unlimited": "Unlimited reviews",
    "pricing.feature.photos": "Unlimited photos",
    "pricing.feature.badge": "Visible Premium badge",
    "pricing.feature.fullHistory": "Full history",
    "pricing.feature.analytics": "Detailed analytics",
    "pricing.feature.prioritySupport": "24/7 priority support",
    "pricing.feature.export": "Data export",
    "pricing.feature.notifications": "Advanced notifications",
    "pricing.trust.ssl": "Secure SSL payment",
    "pricing.trust.invoice": "Automatic invoice",
    "pricing.trust.support": "Responsive customer support",

    // Blog Section
    "blog.title": "Our latest",
    "blog.title.highlight": "articles",
    "blog.subtitle": "Tips, guides and news for your successful rental journey.",
    "blog.viewAll": "View all articles",
    "blog.hero.title": "The Blog",
    "blog.hero.subtitle": "Tips, guides and news for your successful rental journey",
    "blog.search": "Search an article...",
    "blog.all": "All",
    "blog.noResults": "No articles found",

    // Footer
    "footer.description": "The platform that simplifies real estate rental for everyone.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.contact": "Contact",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.faq": "FAQ",
    "footer.testimonials": "Testimonials",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.press": "Press",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",
    "footer.legalNotice": "Legal Notice",
    "footer.cookies": "Cookies",
    "footer.rights": "© 2024 Bailo. All rights reserved.",
    "footer.madeWith": "Made with ❤️ in France",
    "footer.language": "Language",

    // FAQ
    "faq.badge": "Help Center",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to the most common questions about Bailo. If you can't find what you're looking for, don't hesitate to contact us.",
    "faq.contact.title": "Didn't find your answer?",
    "faq.contact.subtitle": "Our support team is available to help you with all your questions.",
    "faq.contact.button": "Contact support",
    "faq.cat.general": "General",
    "faq.cat.payment": "Subscription & Payment",
    "faq.cat.features": "Features",
    "faq.cat.technical": "Technical & Support",
    "faq.q1": "What is Bailo?",
    "faq.a1": "Bailo is a platform dedicated to dance that allows you to discover classes, events and join a passionate community. Whether you are a beginner or an experienced dancer, Bailo supports you on your journey.",
    "faq.q2": "Is Bailo free?",
    "faq.a2": "Bailo offers a free version with basic features. To access all premium features, monthly and annual subscriptions are available at attractive rates.",
    "faq.q3": "How do I create an account?",
    "faq.a3": "To create an account, click the 'Sign up' button at the top of the page. Fill in the form with your personal information, validate your email and you can start using Bailo immediately.",
    "faq.q4": "What payment methods are accepted?",
    "faq.a4": "We accept credit cards (Visa, Mastercard, American Express), PayPal and bank transfers for annual subscriptions. All payments are secured through our partner Stripe.",
    "faq.q5": "Can I cancel my subscription at any time?",
    "faq.a5": "Yes, you can cancel your subscription at any time from your personal space. The cancellation will take effect at the end of your current billing period, and you will retain access until that date.",
    "faq.q6": "How do I get a refund?",
    "faq.a6": "If you are not satisfied, you have 14 days after your subscription to request a full refund. Contact our support via the support page with your Bailo ID to initiate the process.",
    "faq.q7": "How do I find classes near me?",
    "faq.a7": "Use the geolocated search function in the app. Enable your location or manually enter your city to discover all available classes and events in your area.",
    "faq.q8": "Can I publish my own events?",
    "faq.a8": "Yes, with a Pro or Business account, you can create and publish your own dance events. Go to your dashboard, click 'Create event' and fill in the required information.",
    "faq.q9": "How does the rating system work?",
    "faq.a9": "After each class or event you attend, you can leave a rating from 1 to 5 stars along with a comment. These reviews help the community find the best experiences.",
    "faq.q10": "Is the app available on mobile?",
    "faq.a10": "Bailo is accessible via your web browser on mobile and desktop. A native iOS and Android app is currently in development and will be available soon.",
    "faq.q11": "I forgot my password, what should I do?",
    "faq.a11": "Click 'Login' then 'Forgot password'. Enter your email address and you will receive a link to reset your password within minutes.",
    "faq.q12": "How do I contact support?",
    "faq.a12": "You can contact our support team via the dedicated page by creating a ticket. We are committed to responding within 24 business hours. For emergencies, you can also reach us on our social networks.",

    // Support
    "support.badge": "Customer Support",
    "support.title": "Create a support ticket",
    "support.subtitle": "Describe your problem or question and our team will respond quickly.",
    "support.form.title": "New ticket",
    "support.form.subtitle": "Fill in the form below. Fields marked with * are required.",
    "support.form.lastName": "Last Name",
    "support.form.firstName": "First Name",
    "support.form.bailoId": "Bailo ID",
    "support.form.message": "Message",
    "support.form.messagePlaceholder": "Describe your problem or question in detail...",
    "support.form.attachments": "Attachments (optional)",
    "support.form.attachmentsHelp": "Accepted formats: JPG, PNG, GIF, PDF, DOC. Maximum 10MB per file, 5 files maximum.",
    "support.form.addFiles": "Add files",
    "support.form.filesCount": "files",
    "support.form.submit": "Submit ticket",
    "support.success.title": "Ticket submitted successfully!",
    "support.success.message": "Your request has been registered. Our team will respond as soon as possible.",
    "support.success.ticketNumber": "Ticket number",
    "support.success.newTicket": "Create another ticket",
    "support.success.backHome": "Back to home",
    "support.error.fileTooLarge": "File too large",
    "support.error.fileTooLargeDesc": "exceeds the 10MB limit",
    "support.error.unsupportedType": "Unsupported file type",
    "support.error.unsupportedTypeDesc": "is not an accepted format (JPG, PNG, GIF, PDF, DOC)",
    "support.error.maxFiles": "Limit reached",
    "support.error.maxFilesDesc": "You cannot add more than 5 attachments",
    "support.validation.lastName": "Last name must be at least 2 characters",
    "support.validation.lastNameMax": "Last name cannot exceed 50 characters",
    "support.validation.firstName": "First name must be at least 2 characters",
    "support.validation.firstNameMax": "First name cannot exceed 50 characters",
    "support.validation.bailoId": "Bailo ID must be at least 5 characters",
    "support.validation.bailoIdMax": "Bailo ID cannot exceed 20 characters",
    "support.validation.message": "Message must be at least 20 characters",
    "support.validation.messageMax": "Message cannot exceed 2000 characters",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "fr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
