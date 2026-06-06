# Tutorials Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/tutorials` section to the secure-nest-space vitrine with 8 tutorial sub-pages documenting the bailo.front app flows, with browser-frame screenshot placeholders, full FR/EN translations, and consistent styling.

**Architecture:** Standalone React pages following the existing `HowItWorks.tsx` / `FAQ.tsx` patterns. A shared `TutorialScreenshot` component renders a browser-chrome frame around each image (or a labelled placeholder if the image is missing). Translations use the existing `useLanguage()` / `fr.json` / `en.json` system.

**Tech Stack:** React 18, TypeScript, TailwindCSS, react-router-dom, lucide-react, existing `useLanguage` / `usePageTitle` hooks.

---

### Task 1: Add translation keys — fr.json

**Files:**
- Modify: `src/data/translations/fr.json` (append at end before closing `}`)

- [ ] **Step 1: Add all French tutorial translations**

Append the following block just before the final `}` of `src/data/translations/fr.json`:

```json
,
  "pageTitle.tutorials": "Tutoriels",
  "pageTitle.tutorials.profile": "Remplir son profil",
  "pageTitle.tutorials.ownerProfile": "Profil propriétaire",
  "pageTitle.tutorials.tenantProfile": "Profil locataire",
  "pageTitle.tutorials.createEstate": "Créer un bien",
  "pageTitle.tutorials.createApplication": "Créer une candidature locative",
  "pageTitle.tutorials.validateApplication": "Valider une candidature",
  "pageTitle.tutorials.manageApplication": "Gérer une candidature",
  "pageTitle.tutorials.reviews": "Les avis",

  "metaDesc.tutorials": "Découvrez comment utiliser Bailo pas à pas : remplir votre profil, gérer vos biens, créer des candidatures locatives et laisser des avis.",
  "metaDesc.tutorials.profile": "Comment remplir votre profil Bailo : informations de base, choix du rôle locataire ou propriétaire, et vérification d'identité.",
  "metaDesc.tutorials.ownerProfile": "Comment compléter votre profil propriétaire sur Bailo : informations spécifiques et paramètres de visibilité.",
  "metaDesc.tutorials.tenantProfile": "Comment compléter votre profil locataire sur Bailo : situation professionnelle, revenus et garant.",
  "metaDesc.tutorials.createEstate": "Comment créer et publier un bien immobilier sur Bailo : informations, caractéristiques et disponibilité.",
  "metaDesc.tutorials.createApplication": "Comment créer une candidature locative sur Bailo : sélection du bien, détails du bail et ajout des locataires.",
  "metaDesc.tutorials.validateApplication": "Comment valider ou rejeter une candidature locative sur Bailo.",
  "metaDesc.tutorials.manageApplication": "Comment consulter une candidature approuvée et gérer les documents sur Bailo.",
  "metaDesc.tutorials.reviews": "Comment créer et consulter des avis sur Bailo : avis locataire, propriétaire et bien immobilier.",

  "tutorials.nav.tutorials": "Tutoriels",
  "tutorials.nav.back": "Retour aux tutoriels",
  "tutorials.breadcrumb.home": "Accueil",
  "tutorials.cta.button": "Accéder à la plateforme",
  "tutorials.cta.title": "Prêt à commencer ?",
  "tutorials.cta.subtitle": "Créez votre compte et commencez à utiliser Bailo dès aujourd'hui.",
  "tutorials.screenshot.placeholder": "Screenshot à ajouter",
  "tutorials.step": "Étape",

  "tutorials.index.badge": "Documentation",
  "tutorials.index.title": "Tutoriels",
  "tutorials.index.subtitle": "Apprenez à utiliser Bailo pas à pas grâce à nos guides illustrés.",
  "tutorials.index.card.profile.title": "Remplir son profil",
  "tutorials.index.card.profile.desc": "Configurez votre profil, choisissez votre rôle et vérifiez votre identité.",
  "tutorials.index.card.ownerProfile.title": "Profil propriétaire",
  "tutorials.index.card.ownerProfile.desc": "Complétez les informations spécifiques à votre rôle de propriétaire.",
  "tutorials.index.card.tenantProfile.title": "Profil locataire",
  "tutorials.index.card.tenantProfile.desc": "Complétez les informations spécifiques à votre rôle de locataire.",
  "tutorials.index.card.createEstate.title": "Créer un bien",
  "tutorials.index.card.createEstate.desc": "Publiez votre bien immobilier avec toutes ses caractéristiques.",
  "tutorials.index.card.createApplication.title": "Créer une candidature",
  "tutorials.index.card.createApplication.desc": "Initiez une relation locative en créant une candidature pour un bien.",
  "tutorials.index.card.validateApplication.title": "Valider une candidature",
  "tutorials.index.card.validateApplication.desc": "Examinez et validez ou rejetez une candidature locative.",
  "tutorials.index.card.manageApplication.title": "Gérer une candidature",
  "tutorials.index.card.manageApplication.desc": "Consultez le détail d'une candidature approuvée et gérez les documents.",
  "tutorials.index.card.reviews.title": "Les avis",
  "tutorials.index.card.reviews.desc": "Créez et consultez des avis sur les locataires, propriétaires et biens.",
  "tutorials.index.role.title": "Guides par rôle",
  "tutorials.index.role.owner": "Propriétaire",
  "tutorials.index.role.tenant": "Locataire",
  "tutorials.index.role.common": "Commun",

  "tutorials.profile.title": "Remplir son profil",
  "tutorials.profile.subtitle": "Votre profil Bailo est votre carte de visite. Complétez-le pour inspirer confiance.",
  "tutorials.profile.step1.title": "Informations de base",
  "tutorials.profile.step1.desc": "La première étape consiste à renseigner vos informations personnelles. Ces données permettent d'identifier votre compte et d'assurer la confiance entre les parties.",
  "tutorials.profile.step1.fields": "Prénom · Nom · Numéro de téléphone · Date de naissance · Photo de profil",
  "tutorials.profile.step1.tip": "Conseil : utilisez votre vrai nom et une photo récente. Les profils complets inspirent davantage confiance aux autres utilisateurs.",
  "tutorials.profile.step2.title": "Choisir son rôle",
  "tutorials.profile.step2.desc": "Indiquez si vous êtes locataire, propriétaire, ou les deux. Ce choix détermine les fonctionnalités et sections du profil qui vous seront proposées. Vous pouvez activer les deux rôles simultanément.",
  "tutorials.profile.step2.fields": "Rôle locataire (toggle) · Rôle propriétaire (toggle) · Les deux rôles peuvent être actifs en même temps",
  "tutorials.profile.step2.tip": "Conseil : activez uniquement les rôles que vous utilisez réellement. Cela simplifie votre expérience et votre profil public.",
  "tutorials.profile.step3.title": "Vérification d'identité (KYC)",
  "tutorials.profile.step3.desc": "Pour garantir la confiance sur la plateforme, Bailo propose une vérification d'identité. Une fois vérifié, un badge apparaît sur votre profil public, renforçant votre crédibilité.",
  "tutorials.profile.step3.fields": "Vérification via itsme® (Belgique) · Vérification via Veriff (international) · Badge vérifié affiché sur le profil",
  "tutorials.profile.step3.tip": "La vérification d'identité est fortement recommandée. Les profils vérifiés obtiennent significativement plus de réponses positives.",

  "tutorials.ownerProfile.title": "Profil propriétaire",
  "tutorials.ownerProfile.subtitle": "Complétez votre profil propriétaire pour donner confiance aux locataires potentiels.",
  "tutorials.ownerProfile.step1.title": "Informations propriétaire",
  "tutorials.ownerProfile.step1.desc": "Renseignez les informations spécifiques à votre activité de propriétaire. Ces informations permettent aux locataires de mieux vous connaître avant d'entrer en relation.",
  "tutorials.ownerProfile.step1.fields": "Biographie · Situation professionnelle · IBAN (pour les remboursements) · Langue(s) parlée(s)",
  "tutorials.ownerProfile.step1.tip": "Conseil : rédigez une biographie honnête et accueillante. Expliquez votre approche en tant que propriétaire.",
  "tutorials.ownerProfile.step2.title": "Visibilité du profil",
  "tutorials.ownerProfile.step2.desc": "Choisissez quelles informations sont visibles publiquement sur votre profil propriétaire. Certaines données sensibles (IBAN) ne sont jamais visibles publiquement.",
  "tutorials.ownerProfile.step2.fields": "Visibilité du numéro de téléphone · Visibilité de l'email · Paramètres de confidentialité par champ",
  "tutorials.ownerProfile.step2.tip": "Conseil : rendez votre profil aussi complet et public que possible. La transparence favorise la confiance.",

  "tutorials.tenantProfile.title": "Profil locataire",
  "tutorials.tenantProfile.subtitle": "Un profil locataire complet augmente vos chances d'obtenir la location de vos rêves.",
  "tutorials.tenantProfile.step1.title": "Informations locataire",
  "tutorials.tenantProfile.step1.desc": "Renseignez les informations qui permettront aux propriétaires d'évaluer votre dossier. Un profil complet augmente significativement vos chances d'acceptation.",
  "tutorials.tenantProfile.step1.fields": "Biographie · Situation professionnelle · Revenus mensuels nets · Présence d'un garant · Type de contrat de travail · Langue(s) parlée(s)",
  "tutorials.tenantProfile.step1.tip": "Conseil : soyez transparent sur votre situation. Les propriétaires apprécient les candidats honnêtes.",
  "tutorials.tenantProfile.step2.title": "Visibilité du profil",
  "tutorials.tenantProfile.step2.desc": "Contrôlez quelles informations sont visibles sur votre profil public locataire. Les informations financières sensibles ne sont partagées qu'avec les propriétaires concernés.",
  "tutorials.tenantProfile.step2.fields": "Visibilité du numéro de téléphone · Visibilité de l'email · Visibilité des revenus · Paramètres de confidentialité",
  "tutorials.tenantProfile.step2.tip": "Conseil : un profil visible et complet rassure les propriétaires et accélère les prises de décision.",

  "tutorials.createEstate.title": "Créer un bien",
  "tutorials.createEstate.subtitle": "Publiez votre bien immobilier en quelques étapes et commencez à recevoir des candidatures.",
  "tutorials.createEstate.step1.title": "Informations générales",
  "tutorials.createEstate.step1.desc": "Commencez par renseigner les informations de base de votre bien. Ces données formeront la fiche principale visible par les locataires potentiels.",
  "tutorials.createEstate.step1.fields": "Adresse complète · Type de bien (appartement, maison, studio…) · Surface (m²) · Étage · Description du bien",
  "tutorials.createEstate.step1.tip": "Conseil : rédigez une description détaillée et honnête. Mentionnez les points forts mais aussi les éventuelles contraintes.",
  "tutorials.createEstate.step2.title": "Caractéristiques et équipements",
  "tutorials.createEstate.step2.desc": "Précisez les caractéristiques de votre bien en sélectionnant les cards correspondantes. Ces informations aident les locataires à évaluer si le bien correspond à leurs besoins.",
  "tutorials.createEstate.step2.fields": "Nombre de chambres · Nombre de salles de bain · Parking · Jardin/terrasse · Cave · Ascenseur · Animaux acceptés · Meublé/non meublé · Équipements supplémentaires",
  "tutorials.createEstate.step2.tip": "Conseil : sélectionnez toutes les caractéristiques applicables. Plus votre fiche est complète, plus vous attirerez des candidats qualifiés.",
  "tutorials.createEstate.step3.title": "Disponibilité et loyer",
  "tutorials.createEstate.step3.desc": "Définissez les conditions de location de votre bien : date de disponibilité et montant du loyer. Ces informations sont essentielles pour les candidats.",
  "tutorials.createEstate.step3.fields": "Date de disponibilité · Loyer mensuel (€) · Charges comprises ou non · Garantie locative demandée",
  "tutorials.createEstate.step3.tip": "Conseil : fixez un loyer en adéquation avec le marché local. Un prix cohérent attire des candidats sérieux plus rapidement.",

  "tutorials.createApplication.title": "Créer une candidature locative",
  "tutorials.createApplication.subtitle": "Initiez une relation locative en quelques étapes : choisissez un bien, renseignez les détails et ajoutez les locataires.",
  "tutorials.createApplication.step1.title": "Sélectionner un bien",
  "tutorials.createApplication.step1.desc": "Parcourez la liste des biens disponibles et sélectionnez celui pour lequel vous souhaitez créer une candidature. Seuls les biens marqués comme disponibles peuvent être sélectionnés.",
  "tutorials.createApplication.step1.fields": "Grille des biens disponibles · Fiche bien (adresse, surface, loyer) · Indicateur de disponibilité",
  "tutorials.createApplication.step1.tip": "Conseil : vérifiez que le bien est bien marqué comme disponible avant de créer la candidature.",
  "tutorials.createApplication.step2.title": "Détails du bail",
  "tutorials.createApplication.step2.desc": "Renseignez les informations du bail : dates d'entrée et de sortie prévues, montant du loyer et des charges. Ces informations seront partagées avec toutes les parties.",
  "tutorials.createApplication.step2.fields": "Date d'entrée · Date de sortie (optionnelle) · Loyer mensuel (€) · Charges (€) · Type de bail",
  "tutorials.createApplication.step2.tip": "Conseil : les dates et montants renseignés ici serviront de référence tout au long de la location. Soyez précis.",
  "tutorials.createApplication.step3.title": "Ajouter les locataires",
  "tutorials.createApplication.step3.desc": "Ajoutez tous les locataires qui partageront le bien. Vous pouvez les rechercher par nom parmi les utilisateurs Bailo, ou les inviter par email s'ils n'ont pas encore de compte.",
  "tutorials.createApplication.step3.fields": "Recherche par nom ou email · Invitation par email · Onglet \"Recherche\" / onglet \"Invités\" · Nombre maximum de locataires",
  "tutorials.createApplication.step3.tip": "Conseil : invitez tous les colocataires avant de soumettre. Chaque locataire devra accepter la candidature de son côté.",

  "tutorials.validateApplication.title": "Valider une candidature",
  "tutorials.validateApplication.subtitle": "Examinez les détails d'une candidature et prenez votre décision en toute connaissance de cause.",
  "tutorials.validateApplication.step1.title": "Consulter les parties",
  "tutorials.validateApplication.step1.desc": "La page de validation affiche toutes les parties impliquées : le propriétaire, les locataires et le bien concerné. Consultez les profils pour prendre une décision éclairée.",
  "tutorials.validateApplication.step1.fields": "Carte bien (adresse, caractéristiques) · Carte propriétaire (profil, avis) · Carte(s) locataire(s) (profil, avis) · Statut actuel de la candidature",
  "tutorials.validateApplication.step1.tip": "Conseil : consultez les profils et les avis de chaque partie avant de prendre votre décision. C'est l'avantage principal de Bailo.",
  "tutorials.validateApplication.step2.title": "Détails du bail",
  "tutorials.validateApplication.step2.desc": "Vérifiez les conditions du bail : dates, loyer et charges. Assurez-vous que tout correspond bien à ce qui a été convenu.",
  "tutorials.validateApplication.step2.fields": "Date d'entrée · Date de sortie · Loyer mensuel · Charges · Type de bail",
  "tutorials.validateApplication.step2.tip": "Conseil : relisez attentivement les conditions avant de valider. Une fois approuvée, la candidature passe en mode \"approuvée\".",
  "tutorials.validateApplication.step3.title": "Valider ou rejeter",
  "tutorials.validateApplication.step3.desc": "Prenez votre décision finale : validez la candidature pour confirmer la relation locative, ou rejetez-la. Vous pouvez également supprimer la candidature si elle a été créée par erreur.",
  "tutorials.validateApplication.step3.fields": "Bouton Valider (vert) · Bouton Rejeter (orange) · Bouton Supprimer (rouge, si applicable) · Les deux parties doivent valider pour que la candidature soit approuvée",
  "tutorials.validateApplication.step3.tip": "Important : la candidature n'est approuvée que lorsque toutes les parties (propriétaire ET locataire(s)) ont validé.",

  "tutorials.manageApplication.title": "Gérer une candidature",
  "tutorials.manageApplication.subtitle": "Consultez le détail d'une candidature approuvée, gérez les documents et suivez la relation locative.",
  "tutorials.manageApplication.step1.title": "Vue d'ensemble",
  "tutorials.manageApplication.step1.desc": "La page principale d'une candidature approuvée affiche un résumé en cartes statistiques : propriétaire, locataires, adresse et loyer. Un swiper permet de naviguer entre les stats.",
  "tutorials.manageApplication.step1.fields": "Carte propriétaire · Carte locataires · Carte adresse · Carte loyer mensuel · Bouton de demande d'avis (si disponible)",
  "tutorials.manageApplication.step1.tip": "Conseil : si la location est terminée, un encart vous invite à laisser un avis. Profitez-en pour évaluer l'expérience.",
  "tutorials.manageApplication.step2.title": "Navigation par onglets",
  "tutorials.manageApplication.step2.desc": "La section inférieure est organisée en onglets. Chaque onglet correspond à un aspect de la relation locative : informations générales, bail, inventaire, documents partagés et avis.",
  "tutorials.manageApplication.step2.fields": "Onglet Informations (détails du bail) · Onglet Bail (contrat et clôture) · Onglet Inventaire · Onglet Documents · Onglet Avis (résumé des évaluations)",
  "tutorials.manageApplication.step2.tip": "Conseil : utilisez l'onglet Documents pour centraliser tous les documents liés à la location (contrat, états des lieux, quittances…).",
  "tutorials.manageApplication.step3.title": "Ajouter un document",
  "tutorials.manageApplication.step3.desc": "Depuis l'onglet Documents, vous pouvez uploader des fichiers directement liés à cette candidature. Un formulaire modal vous permet de choisir le fichier et de le catégoriser.",
  "tutorials.manageApplication.step3.fields": "Bouton Ajouter un document · Sélection du fichier · Catégorie du document · Confirmation d'upload · Liste des documents déjà uploadés",
  "tutorials.manageApplication.step3.tip": "Conseil : utilisez des noms de fichiers clairs et catégorisez bien vos documents. Tous les participants à la candidature y ont accès.",

  "tutorials.reviews.title": "Les avis",
  "tutorials.reviews.subtitle": "Donnez et consultez des avis sur les locataires, propriétaires et biens immobiliers.",
  "tutorials.reviews.step1.title": "Créer un avis locataire",
  "tutorials.reviews.step1.desc": "À la fin d'une location, vous pouvez évaluer chaque locataire. Si plusieurs locataires étaient présents, un onglet par locataire vous permet d'évaluer chacun individuellement.",
  "tutorials.reviews.step1.fields": "Sélection du locataire (si plusieurs) · Note globale (étoiles) · Critères : paiement du loyer · Entretien du bien · Respect du voisinage · Communication · Commentaire libre",
  "tutorials.reviews.step1.tip": "Conseil : soyez objectif et factuel dans vos avis. Décrivez des comportements observables, pas des jugements de valeur.",
  "tutorials.reviews.step2.title": "Créer un avis propriétaire",
  "tutorials.reviews.step2.desc": "En tant que locataire, évaluez le propriétaire à la fin de la location. Ces avis aident les futurs locataires à choisir un propriétaire de confiance.",
  "tutorials.reviews.step2.fields": "Note globale (étoiles) · Critères : état du bien · Réactivité · Respect des engagements · Communication · Commentaire libre",
  "tutorials.reviews.step2.tip": "Conseil : les avis sont visibles publiquement sur le profil du propriétaire. Prenez le temps de rédiger un commentaire constructif.",
  "tutorials.reviews.step3.title": "Créer un avis sur le bien",
  "tutorials.reviews.step3.desc": "Évaluez également le bien immobilier en lui-même. Ces informations aident les futurs locataires à se faire une idée précise du logement.",
  "tutorials.reviews.step3.fields": "Note globale (étoiles) · Critères : état général · Conformité à l'annonce · Qualité de l'isolation · Luminosité · Quartier · Commentaire libre",
  "tutorials.reviews.step3.tip": "Conseil : décrivez précisément les points forts et les points d'amélioration du bien. Cela aide les futurs locataires à prendre une décision éclairée.",
  "tutorials.reviews.step4.title": "Consulter les avis",
  "tutorials.reviews.step4.desc": "Consultez le détail d'un avis existant : note, critères, commentaire et date. Depuis la page d'une candidature, l'onglet Avis affiche un résumé de toutes les évaluations liées.",
  "tutorials.reviews.step4.fields": "Résumé des avis (onglet Avis de la candidature) · Page de détail d'un avis · Note par critère · Commentaire · Date de l'avis · Profil de l'auteur",
  "tutorials.reviews.step4.tip": "Conseil : consultez les avis d'un utilisateur avant d'entrer en relation avec lui. C'est le cœur de la valeur ajoutée de Bailo."
```

- [ ] **Step 2: Verify the JSON is valid**

Run: `node -e "JSON.parse(require('fs').readFileSync('src/data/translations/fr.json','utf8')); console.log('OK')"`
Expected: `OK`

---

### Task 2: Add translation keys — en.json

**Files:**
- Modify: `src/data/translations/en.json` (append at end before closing `}`)

- [ ] **Step 1: Add all English tutorial translations**

Append the following block just before the final `}` of `src/data/translations/en.json`:

```json
,
  "pageTitle.tutorials": "Tutorials",
  "pageTitle.tutorials.profile": "Fill in your profile",
  "pageTitle.tutorials.ownerProfile": "Owner profile",
  "pageTitle.tutorials.tenantProfile": "Tenant profile",
  "pageTitle.tutorials.createEstate": "Create a property",
  "pageTitle.tutorials.createApplication": "Create a rental application",
  "pageTitle.tutorials.validateApplication": "Validate an application",
  "pageTitle.tutorials.manageApplication": "Manage an application",
  "pageTitle.tutorials.reviews": "Reviews",

  "metaDesc.tutorials": "Learn how to use Bailo step by step: fill in your profile, manage your properties, create rental applications, and leave reviews.",
  "metaDesc.tutorials.profile": "How to fill in your Bailo profile: basic information, choosing your role as tenant or landlord, and identity verification.",
  "metaDesc.tutorials.ownerProfile": "How to complete your landlord profile on Bailo: specific information and visibility settings.",
  "metaDesc.tutorials.tenantProfile": "How to complete your tenant profile on Bailo: professional situation, income, and guarantor.",
  "metaDesc.tutorials.createEstate": "How to create and publish a property on Bailo: details, characteristics, and availability.",
  "metaDesc.tutorials.createApplication": "How to create a rental application on Bailo: property selection, lease details, and adding tenants.",
  "metaDesc.tutorials.validateApplication": "How to validate or reject a rental application on Bailo.",
  "metaDesc.tutorials.manageApplication": "How to view an approved rental application and manage documents on Bailo.",
  "metaDesc.tutorials.reviews": "How to create and view reviews on Bailo: tenant, landlord, and property reviews.",

  "tutorials.nav.tutorials": "Tutorials",
  "tutorials.nav.back": "Back to tutorials",
  "tutorials.breadcrumb.home": "Home",
  "tutorials.cta.button": "Access the platform",
  "tutorials.cta.title": "Ready to get started?",
  "tutorials.cta.subtitle": "Create your account and start using Bailo today.",
  "tutorials.screenshot.placeholder": "Screenshot to be added",
  "tutorials.step": "Step",

  "tutorials.index.badge": "Documentation",
  "tutorials.index.title": "Tutorials",
  "tutorials.index.subtitle": "Learn how to use Bailo step by step with our illustrated guides.",
  "tutorials.index.card.profile.title": "Fill in your profile",
  "tutorials.index.card.profile.desc": "Set up your profile, choose your role, and verify your identity.",
  "tutorials.index.card.ownerProfile.title": "Landlord profile",
  "tutorials.index.card.ownerProfile.desc": "Complete the information specific to your landlord role.",
  "tutorials.index.card.tenantProfile.title": "Tenant profile",
  "tutorials.index.card.tenantProfile.desc": "Complete the information specific to your tenant role.",
  "tutorials.index.card.createEstate.title": "Create a property",
  "tutorials.index.card.createEstate.desc": "Publish your property with all its characteristics.",
  "tutorials.index.card.createApplication.title": "Create an application",
  "tutorials.index.card.createApplication.desc": "Start a rental relationship by creating an application for a property.",
  "tutorials.index.card.validateApplication.title": "Validate an application",
  "tutorials.index.card.validateApplication.desc": "Review and validate or reject a rental application.",
  "tutorials.index.card.manageApplication.title": "Manage an application",
  "tutorials.index.card.manageApplication.desc": "View the details of an approved application and manage documents.",
  "tutorials.index.card.reviews.title": "Reviews",
  "tutorials.index.card.reviews.desc": "Create and view reviews for tenants, landlords, and properties.",
  "tutorials.index.role.title": "Guides by role",
  "tutorials.index.role.owner": "Landlord",
  "tutorials.index.role.tenant": "Tenant",
  "tutorials.index.role.common": "Common",

  "tutorials.profile.title": "Fill in your profile",
  "tutorials.profile.subtitle": "Your Bailo profile is your calling card. Complete it to inspire trust.",
  "tutorials.profile.step1.title": "Basic information",
  "tutorials.profile.step1.desc": "Start by filling in your personal information. This data identifies your account and ensures trust between all parties.",
  "tutorials.profile.step1.fields": "First name · Last name · Phone number · Date of birth · Profile photo",
  "tutorials.profile.step1.tip": "Tip: use your real name and a recent photo. Complete profiles inspire more trust from other users.",
  "tutorials.profile.step2.title": "Choose your role",
  "tutorials.profile.step2.desc": "Indicate whether you are a tenant, a landlord, or both. This choice determines the features and profile sections available to you. You can activate both roles simultaneously.",
  "tutorials.profile.step2.fields": "Tenant role (toggle) · Landlord role (toggle) · Both roles can be active at the same time",
  "tutorials.profile.step2.tip": "Tip: only activate the roles you actually use. This simplifies your experience and your public profile.",
  "tutorials.profile.step3.title": "Identity verification (KYC)",
  "tutorials.profile.step3.desc": "To guarantee trust on the platform, Bailo offers identity verification. Once verified, a badge appears on your public profile, strengthening your credibility.",
  "tutorials.profile.step3.fields": "Verification via itsme® (Belgium) · Verification via Veriff (international) · Verified badge displayed on profile",
  "tutorials.profile.step3.tip": "Identity verification is strongly recommended. Verified profiles receive significantly more positive responses.",

  "tutorials.ownerProfile.title": "Landlord profile",
  "tutorials.ownerProfile.subtitle": "Complete your landlord profile to build trust with potential tenants.",
  "tutorials.ownerProfile.step1.title": "Landlord information",
  "tutorials.ownerProfile.step1.desc": "Enter the information specific to your landlord activity. This information allows tenants to get to know you better before entering into a relationship.",
  "tutorials.ownerProfile.step1.fields": "Biography · Professional situation · IBAN (for refunds) · Language(s) spoken",
  "tutorials.ownerProfile.step1.tip": "Tip: write an honest and welcoming biography. Explain your approach as a landlord.",
  "tutorials.ownerProfile.step2.title": "Profile visibility",
  "tutorials.ownerProfile.step2.desc": "Choose which information is publicly visible on your landlord profile. Sensitive data (IBAN) is never publicly visible.",
  "tutorials.ownerProfile.step2.fields": "Phone number visibility · Email visibility · Privacy settings per field",
  "tutorials.ownerProfile.step2.tip": "Tip: make your profile as complete and public as possible. Transparency builds trust.",

  "tutorials.tenantProfile.title": "Tenant profile",
  "tutorials.tenantProfile.subtitle": "A complete tenant profile increases your chances of getting your dream rental.",
  "tutorials.tenantProfile.step1.title": "Tenant information",
  "tutorials.tenantProfile.step1.desc": "Provide the information that will allow landlords to assess your application. A complete profile significantly increases your chances of acceptance.",
  "tutorials.tenantProfile.step1.fields": "Biography · Professional situation · Monthly net income · Guarantor · Type of employment contract · Language(s) spoken",
  "tutorials.tenantProfile.step1.tip": "Tip: be transparent about your situation. Landlords appreciate honest candidates.",
  "tutorials.tenantProfile.step2.title": "Profile visibility",
  "tutorials.tenantProfile.step2.desc": "Control which information is visible on your public tenant profile. Sensitive financial information is only shared with relevant landlords.",
  "tutorials.tenantProfile.step2.fields": "Phone number visibility · Email visibility · Income visibility · Privacy settings",
  "tutorials.tenantProfile.step2.tip": "Tip: a visible and complete profile reassures landlords and speeds up decision-making.",

  "tutorials.createEstate.title": "Create a property",
  "tutorials.createEstate.subtitle": "Publish your property in a few steps and start receiving applications.",
  "tutorials.createEstate.step1.title": "General information",
  "tutorials.createEstate.step1.desc": "Start by filling in the basic information about your property. This data will form the main listing visible to potential tenants.",
  "tutorials.createEstate.step1.fields": "Full address · Property type (apartment, house, studio…) · Surface area (m²) · Floor · Property description",
  "tutorials.createEstate.step1.tip": "Tip: write a detailed and honest description. Mention the highlights but also any constraints.",
  "tutorials.createEstate.step2.title": "Features and amenities",
  "tutorials.createEstate.step2.desc": "Specify your property's features by selecting the corresponding cards. This information helps tenants assess whether the property suits their needs.",
  "tutorials.createEstate.step2.fields": "Number of bedrooms · Number of bathrooms · Parking · Garden/terrace · Cellar · Elevator · Pets allowed · Furnished/unfurnished · Additional amenities",
  "tutorials.createEstate.step2.tip": "Tip: select all applicable features. The more complete your listing, the more qualified candidates you will attract.",
  "tutorials.createEstate.step3.title": "Availability and rent",
  "tutorials.createEstate.step3.desc": "Define the rental conditions for your property: availability date and rent amount. This information is essential for candidates.",
  "tutorials.createEstate.step3.fields": "Availability date · Monthly rent (€) · Bills included or not · Security deposit required",
  "tutorials.createEstate.step3.tip": "Tip: set a rent in line with the local market. A consistent price attracts serious candidates more quickly.",

  "tutorials.createApplication.title": "Create a rental application",
  "tutorials.createApplication.subtitle": "Start a rental relationship in a few steps: choose a property, fill in the details, and add tenants.",
  "tutorials.createApplication.step1.title": "Select a property",
  "tutorials.createApplication.step1.desc": "Browse the list of available properties and select the one for which you want to create an application. Only properties marked as available can be selected.",
  "tutorials.createApplication.step1.fields": "Grid of available properties · Property card (address, surface, rent) · Availability indicator",
  "tutorials.createApplication.step1.tip": "Tip: check that the property is marked as available before creating the application.",
  "tutorials.createApplication.step2.title": "Lease details",
  "tutorials.createApplication.step2.desc": "Enter the lease information: planned entry and exit dates, rent amount, and charges. This information will be shared with all parties.",
  "tutorials.createApplication.step2.fields": "Entry date · Exit date (optional) · Monthly rent (€) · Charges (€) · Lease type",
  "tutorials.createApplication.step2.tip": "Tip: the dates and amounts entered here will serve as reference throughout the tenancy. Be precise.",
  "tutorials.createApplication.step3.title": "Add tenants",
  "tutorials.createApplication.step3.desc": "Add all tenants who will share the property. You can search for them by name among Bailo users, or invite them by email if they don't have an account yet.",
  "tutorials.createApplication.step3.fields": "Search by name or email · Invite by email · \"Search\" tab / \"Invited\" tab · Maximum number of tenants",
  "tutorials.createApplication.step3.tip": "Tip: invite all co-tenants before submitting. Each tenant will need to accept the application on their side.",

  "tutorials.validateApplication.title": "Validate an application",
  "tutorials.validateApplication.subtitle": "Review the details of an application and make your decision with full knowledge of the facts.",
  "tutorials.validateApplication.step1.title": "Review the parties",
  "tutorials.validateApplication.step1.desc": "The validation page displays all parties involved: the landlord, the tenants, and the property concerned. Review the profiles to make an informed decision.",
  "tutorials.validateApplication.step1.fields": "Property card (address, features) · Landlord card (profile, reviews) · Tenant card(s) (profile, reviews) · Current application status",
  "tutorials.validateApplication.step1.tip": "Tip: review the profiles and reviews of each party before making your decision. This is the main advantage of Bailo.",
  "tutorials.validateApplication.step2.title": "Lease details",
  "tutorials.validateApplication.step2.desc": "Check the lease conditions: dates, rent, and charges. Make sure everything matches what was agreed.",
  "tutorials.validateApplication.step2.fields": "Entry date · Exit date · Monthly rent · Charges · Lease type",
  "tutorials.validateApplication.step2.tip": "Tip: read the conditions carefully before validating. Once approved, the application moves to 'approved' status.",
  "tutorials.validateApplication.step3.title": "Validate or reject",
  "tutorials.validateApplication.step3.desc": "Make your final decision: validate the application to confirm the rental relationship, or reject it. You can also delete the application if it was created by mistake.",
  "tutorials.validateApplication.step3.fields": "Validate button (green) · Reject button (orange) · Delete button (red, if applicable) · All parties (landlord AND tenant(s)) must validate for the application to be approved",
  "tutorials.validateApplication.step3.tip": "Important: the application is only approved when all parties (landlord AND tenant(s)) have validated.",

  "tutorials.manageApplication.title": "Manage an application",
  "tutorials.manageApplication.subtitle": "View the details of an approved application, manage documents, and track the rental relationship.",
  "tutorials.manageApplication.step1.title": "Overview",
  "tutorials.manageApplication.step1.desc": "The main page of an approved application displays a summary in stat cards: landlord, tenants, address, and rent. A swiper allows navigation between stats.",
  "tutorials.manageApplication.step1.fields": "Landlord card · Tenant(s) card · Address card · Monthly rent card · Review request banner (if available)",
  "tutorials.manageApplication.step1.tip": "Tip: if the tenancy is over, a banner invites you to leave a review. Take the opportunity to rate the experience.",
  "tutorials.manageApplication.step2.title": "Tab navigation",
  "tutorials.manageApplication.step2.desc": "The lower section is organised into tabs. Each tab corresponds to an aspect of the rental relationship: general information, lease, inventory, shared documents, and reviews.",
  "tutorials.manageApplication.step2.fields": "Information tab (lease details) · Lease tab (contract and closure) · Inventory tab · Documents tab · Reviews tab (evaluation summary)",
  "tutorials.manageApplication.step2.tip": "Tip: use the Documents tab to centralise all documents related to the tenancy (contract, inventories, rent receipts…).",
  "tutorials.manageApplication.step3.title": "Upload a document",
  "tutorials.manageApplication.step3.desc": "From the Documents tab, you can upload files directly related to this application. A modal form allows you to choose the file and categorise it.",
  "tutorials.manageApplication.step3.fields": "Add document button · File selection · Document category · Upload confirmation · List of already uploaded documents",
  "tutorials.manageApplication.step3.tip": "Tip: use clear file names and categorise your documents properly. All application participants have access to them.",

  "tutorials.reviews.title": "Reviews",
  "tutorials.reviews.subtitle": "Give and view reviews for tenants, landlords, and properties.",
  "tutorials.reviews.step1.title": "Create a tenant review",
  "tutorials.reviews.step1.desc": "At the end of a tenancy, you can rate each tenant. If multiple tenants were present, a tab per tenant allows you to rate each one individually.",
  "tutorials.reviews.step1.fields": "Tenant selection (if multiple) · Overall rating (stars) · Criteria: rent payment · Property maintenance · Neighbourhood respect · Communication · Free comment",
  "tutorials.reviews.step1.tip": "Tip: be objective and factual in your reviews. Describe observable behaviours, not value judgements.",
  "tutorials.reviews.step2.title": "Create a landlord review",
  "tutorials.reviews.step2.desc": "As a tenant, rate the landlord at the end of the tenancy. These reviews help future tenants choose a trustworthy landlord.",
  "tutorials.reviews.step2.fields": "Overall rating (stars) · Criteria: property condition · Responsiveness · Honouring commitments · Communication · Free comment",
  "tutorials.reviews.step2.tip": "Tip: reviews are publicly visible on the landlord's profile. Take the time to write a constructive comment.",
  "tutorials.reviews.step3.title": "Create a property review",
  "tutorials.reviews.step3.desc": "Also rate the property itself. This information helps future tenants get a clear picture of the accommodation.",
  "tutorials.reviews.step3.fields": "Overall rating (stars) · Criteria: general condition · Listing accuracy · Insulation quality · Brightness · Neighbourhood · Free comment",
  "tutorials.reviews.step3.tip": "Tip: describe the property's strengths and areas for improvement precisely. This helps future tenants make an informed decision.",
  "tutorials.reviews.step4.title": "View reviews",
  "tutorials.reviews.step4.desc": "View the detail of an existing review: rating, criteria, comment, and date. From an application page, the Reviews tab displays a summary of all related evaluations.",
  "tutorials.reviews.step4.fields": "Review summary (Reviews tab of the application) · Review detail page · Rating per criterion · Comment · Review date · Author profile",
  "tutorials.reviews.step4.tip": "Tip: check a user's reviews before entering into a relationship with them. This is at the heart of Bailo's added value."
```

- [ ] **Step 2: Verify the JSON is valid**

Run: `node -e "JSON.parse(require('fs').readFileSync('src/data/translations/en.json','utf8')); console.log('OK')"`
Expected: `OK`

---

### Task 3: Create TutorialScreenshot component

**Files:**
- Create: `src/components/TutorialScreenshot.tsx`

- [ ] **Step 1: Create the component**

Create `src/components/TutorialScreenshot.tsx`:

```tsx
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
        {/* Browser chrome bar */}
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

        {/* Content area */}
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
```

---

### Task 4: Create Tutorials index page

**Files:**
- Create: `src/pages/Tutorials.tsx`

- [ ] **Step 1: Create the index page**

Create `src/pages/Tutorials.tsx`:

```tsx
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import usePageTitle from "@/hooks/usePageTitle";
import { BookOpen, User, Building, FileText, CheckCircle, FolderOpen, Star, ArrowRight } from "lucide-react";

const tutorials = [
  {
    key: "profile",
    href: "/tutorials/profile",
    icon: User,
    color: "bg-primary",
    role: "common",
  },
  {
    key: "ownerProfile",
    href: "/tutorials/owner-profile",
    icon: Building,
    color: "bg-secondary",
    role: "owner",
  },
  {
    key: "tenantProfile",
    href: "/tutorials/tenant-profile",
    icon: User,
    color: "bg-accent",
    role: "tenant",
  },
  {
    key: "createEstate",
    href: "/tutorials/create-estate",
    icon: Building,
    color: "bg-primary",
    role: "owner",
  },
  {
    key: "createApplication",
    href: "/tutorials/create-application",
    icon: FileText,
    color: "bg-secondary",
    role: "common",
  },
  {
    key: "validateApplication",
    href: "/tutorials/validate-application",
    icon: CheckCircle,
    color: "bg-accent",
    role: "owner",
  },
  {
    key: "manageApplication",
    href: "/tutorials/manage-application",
    icon: FolderOpen,
    color: "bg-primary",
    role: "common",
  },
  {
    key: "reviews",
    href: "/tutorials/reviews",
    icon: Star,
    color: "bg-secondary",
    role: "common",
  },
];

const roleBadgeClass: Record<string, string> = {
  common: "bg-muted text-muted-foreground",
  owner: "bg-secondary/15 text-secondary-foreground",
  tenant: "bg-accent/15 text-accent-foreground",
};

const Tutorials = () => {
  usePageTitle("pageTitle.tutorials", { path: "/tutorials" });
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">{t("tutorials.index.badge")}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t("tutorials.index.title")}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t("tutorials.index.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Role legend */}
        <section className="py-6 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="text-muted-foreground font-medium">{t("tutorials.index.role.title")} :</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                {t("tutorials.index.role.common")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 text-secondary-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                {t("tutorials.index.role.owner")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent-foreground">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {t("tutorials.index.role.tenant")}
              </span>
            </div>
          </div>
        </section>

        {/* Cards grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {tutorials.map((tuto) => {
                const Icon = tuto.icon;
                return (
                  <Link
                    key={tuto.key}
                    to={tuto.href}
                    className="group bg-card border border-border rounded-2xl p-6 hover:shadow-elevated hover:border-primary/30 transition-all flex flex-col gap-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${tuto.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${roleBadgeClass[tuto.role]}`}>
                        {t(`tutorials.index.role.${tuto.role}`)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {t(`tutorials.index.card.${tuto.key}.title`)}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {t(`tutorials.index.card.${tuto.key}.desc`)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorials;
```

---

### Task 5: Create shared TutorialPage layout helper

**Files:**
- Create: `src/components/TutorialLayout.tsx`

- [ ] **Step 1: Create the layout component**

Create `src/components/TutorialLayout.tsx` — this shared wrapper avoids repeating Navbar/Hero/CTA/Footer in every page:

```tsx
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TutorialScreenshot from "@/components/TutorialScreenshot";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight, CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteData from "@/data/site.json";
import { isLaunchMode } from "@/lib/launch";

export interface TutorialStep {
  titleKey: string;
  descKey: string;
  fieldsKey: string;
  tipKey: string;
  screenshotSrc: string;
  screenshotUrl?: string;
}

interface TutorialLayoutProps {
  titleKey: string;
  subtitleKey: string;
  pageTitleKey: string;
  steps: TutorialStep[];
}

const TutorialLayout = ({ titleKey, subtitleKey, pageTitleKey, steps }: TutorialLayoutProps) => {
  const { t } = useLanguage();

  const fields = (fieldsKey: string) =>
    t(fieldsKey)
      .split("·")
      .map((f) => f.trim())
      .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-24 lg:pt-32 pb-12 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/70 mb-6 flex-wrap">
              <Link to="/" className="hover:text-primary-foreground transition-colors">
                {t("tutorials.breadcrumb.home")}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/tutorials" className="hover:text-primary-foreground transition-colors">
                {t("tutorials.index.title")}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary-foreground">{t(pageTitleKey)}</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t(titleKey)}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t(subtitleKey)}
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col gap-8">
                  {/* Step header + content */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
                        <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {t(step.titleKey)}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {t(step.descKey)}
                      </p>

                      {/* Fields list */}
                      <ul className="space-y-2">
                        {fields(step.fieldsKey).map((field, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{field}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tip */}
                      <div className="flex items-start gap-3 bg-accent/10 rounded-xl p-4 border border-accent/20">
                        <Lightbulb className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-accent-foreground">
                          {t(step.tipKey)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="sm:ml-16">
                    <TutorialScreenshot
                      src={step.screenshotSrc}
                      alt={t(step.titleKey)}
                      caption={t(step.titleKey)}
                      url={step.screenshotUrl}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-3">
                {t("tutorials.cta.title")}
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                {t("tutorials.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  {isLaunchMode() ? (
                    <Link to="/launch">
                      {t("tutorials.cta.button")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  ) : (
                    <a href={siteData.externalUrls.signup}>
                      {t("tutorials.cta.button")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  )}
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/tutorials">
                    {t("tutorials.nav.back")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TutorialLayout;
```

---

### Task 6: Create the 8 tutorial pages

**Files:**
- Create: `src/pages/tutorials/TutorialProfile.tsx`
- Create: `src/pages/tutorials/TutorialOwnerProfile.tsx`
- Create: `src/pages/tutorials/TutorialTenantProfile.tsx`
- Create: `src/pages/tutorials/TutorialCreateEstate.tsx`
- Create: `src/pages/tutorials/TutorialCreateApplication.tsx`
- Create: `src/pages/tutorials/TutorialValidateApplication.tsx`
- Create: `src/pages/tutorials/TutorialManageApplication.tsx`
- Create: `src/pages/tutorials/TutorialReviews.tsx`

- [ ] **Step 1: Create TutorialProfile.tsx**

```tsx
import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.profile.step1.title",
    descKey: "tutorials.profile.step1.desc",
    fieldsKey: "tutorials.profile.step1.fields",
    tipKey: "tutorials.profile.step1.tip",
    screenshotSrc: "/src/assets/tutorials/profile/basic-info.png",
    screenshotUrl: "app.bailo.be/profile",
  },
  {
    titleKey: "tutorials.profile.step2.title",
    descKey: "tutorials.profile.step2.desc",
    fieldsKey: "tutorials.profile.step2.fields",
    tipKey: "tutorials.profile.step2.tip",
    screenshotSrc: "/src/assets/tutorials/profile/role-selection.png",
    screenshotUrl: "app.bailo.be/profile",
  },
  {
    titleKey: "tutorials.profile.step3.title",
    descKey: "tutorials.profile.step3.desc",
    fieldsKey: "tutorials.profile.step3.fields",
    tipKey: "tutorials.profile.step3.tip",
    screenshotSrc: "/src/assets/tutorials/profile/kyc-verification.png",
    screenshotUrl: "app.bailo.be/profile",
  },
];

const TutorialProfile = () => {
  usePageTitle("pageTitle.tutorials.profile", { path: "/tutorials/profile" });

  return (
    <TutorialLayout
      titleKey="tutorials.profile.title"
      subtitleKey="tutorials.profile.subtitle"
      pageTitleKey="pageTitle.tutorials.profile"
      steps={steps}
    />
  );
};

export default TutorialProfile;
```

- [ ] **Step 2: Create TutorialOwnerProfile.tsx**

```tsx
import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.ownerProfile.step1.title",
    descKey: "tutorials.ownerProfile.step1.desc",
    fieldsKey: "tutorials.ownerProfile.step1.fields",
    tipKey: "tutorials.ownerProfile.step1.tip",
    screenshotSrc: "/src/assets/tutorials/owner-profile/owner-info.png",
    screenshotUrl: "app.bailo.be/profile/owner",
  },
  {
    titleKey: "tutorials.ownerProfile.step2.title",
    descKey: "tutorials.ownerProfile.step2.desc",
    fieldsKey: "tutorials.ownerProfile.step2.fields",
    tipKey: "tutorials.ownerProfile.step2.tip",
    screenshotSrc: "/src/assets/tutorials/owner-profile/visibility.png",
    screenshotUrl: "app.bailo.be/profile/owner",
  },
];

const TutorialOwnerProfile = () => {
  usePageTitle("pageTitle.tutorials.ownerProfile", { path: "/tutorials/owner-profile" });

  return (
    <TutorialLayout
      titleKey="tutorials.ownerProfile.title"
      subtitleKey="tutorials.ownerProfile.subtitle"
      pageTitleKey="pageTitle.tutorials.ownerProfile"
      steps={steps}
    />
  );
};

export default TutorialOwnerProfile;
```

- [ ] **Step 3: Create TutorialTenantProfile.tsx**

```tsx
import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.tenantProfile.step1.title",
    descKey: "tutorials.tenantProfile.step1.desc",
    fieldsKey: "tutorials.tenantProfile.step1.fields",
    tipKey: "tutorials.tenantProfile.step1.tip",
    screenshotSrc: "/src/assets/tutorials/tenant-profile/tenant-info.png",
    screenshotUrl: "app.bailo.be/profile/tenant",
  },
  {
    titleKey: "tutorials.tenantProfile.step2.title",
    descKey: "tutorials.tenantProfile.step2.desc",
    fieldsKey: "tutorials.tenantProfile.step2.fields",
    tipKey: "tutorials.tenantProfile.step2.tip",
    screenshotSrc: "/src/assets/tutorials/tenant-profile/visibility.png",
    screenshotUrl: "app.bailo.be/profile/tenant",
  },
];

const TutorialTenantProfile = () => {
  usePageTitle("pageTitle.tutorials.tenantProfile", { path: "/tutorials/tenant-profile" });

  return (
    <TutorialLayout
      titleKey="tutorials.tenantProfile.title"
      subtitleKey="tutorials.tenantProfile.subtitle"
      pageTitleKey="pageTitle.tutorials.tenantProfile"
      steps={steps}
    />
  );
};

export default TutorialTenantProfile;
```

- [ ] **Step 4: Create TutorialCreateEstate.tsx**

```tsx
import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.createEstate.step1.title",
    descKey: "tutorials.createEstate.step1.desc",
    fieldsKey: "tutorials.createEstate.step1.fields",
    tipKey: "tutorials.createEstate.step1.tip",
    screenshotSrc: "/src/assets/tutorials/estate/general-info.png",
    screenshotUrl: "app.bailo.be/estates/new",
  },
  {
    titleKey: "tutorials.createEstate.step2.title",
    descKey: "tutorials.createEstate.step2.desc",
    fieldsKey: "tutorials.createEstate.step2.fields",
    tipKey: "tutorials.createEstate.step2.tip",
    screenshotSrc: "/src/assets/tutorials/estate/features.png",
    screenshotUrl: "app.bailo.be/estates/new",
  },
  {
    titleKey: "tutorials.createEstate.step3.title",
    descKey: "tutorials.createEstate.step3.desc",
    fieldsKey: "tutorials.createEstate.step3.fields",
    tipKey: "tutorials.createEstate.step3.tip",
    screenshotSrc: "/src/assets/tutorials/estate/availability.png",
    screenshotUrl: "app.bailo.be/estates/new",
  },
];

const TutorialCreateEstate = () => {
  usePageTitle("pageTitle.tutorials.createEstate", { path: "/tutorials/create-estate" });

  return (
    <TutorialLayout
      titleKey="tutorials.createEstate.title"
      subtitleKey="tutorials.createEstate.subtitle"
      pageTitleKey="pageTitle.tutorials.createEstate"
      steps={steps}
    />
  );
};

export default TutorialCreateEstate;
```

- [ ] **Step 5: Create TutorialCreateApplication.tsx**

```tsx
import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.createApplication.step1.title",
    descKey: "tutorials.createApplication.step1.desc",
    fieldsKey: "tutorials.createApplication.step1.fields",
    tipKey: "tutorials.createApplication.step1.tip",
    screenshotSrc: "/src/assets/tutorials/application-create/select-estate.png",
    screenshotUrl: "app.bailo.be/tenant-applications/new",
  },
  {
    titleKey: "tutorials.createApplication.step2.title",
    descKey: "tutorials.createApplication.step2.desc",
    fieldsKey: "tutorials.createApplication.step2.fields",
    tipKey: "tutorials.createApplication.step2.tip",
    screenshotSrc: "/src/assets/tutorials/application-create/lease-details.png",
    screenshotUrl: "app.bailo.be/tenant-applications/new",
  },
  {
    titleKey: "tutorials.createApplication.step3.title",
    descKey: "tutorials.createApplication.step3.desc",
    fieldsKey: "tutorials.createApplication.step3.fields",
    tipKey: "tutorials.createApplication.step3.tip",
    screenshotSrc: "/src/assets/tutorials/application-create/add-tenants.png",
    screenshotUrl: "app.bailo.be/tenant-applications/new",
  },
];

const TutorialCreateApplication = () => {
  usePageTitle("pageTitle.tutorials.createApplication", { path: "/tutorials/create-application" });

  return (
    <TutorialLayout
      titleKey="tutorials.createApplication.title"
      subtitleKey="tutorials.createApplication.subtitle"
      pageTitleKey="pageTitle.tutorials.createApplication"
      steps={steps}
    />
  );
};

export default TutorialCreateApplication;
```

- [ ] **Step 6: Create TutorialValidateApplication.tsx**

```tsx
import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.validateApplication.step1.title",
    descKey: "tutorials.validateApplication.step1.desc",
    fieldsKey: "tutorials.validateApplication.step1.fields",
    tipKey: "tutorials.validateApplication.step1.tip",
    screenshotSrc: "/src/assets/tutorials/application-validate/parties.png",
    screenshotUrl: "app.bailo.be/tenant-applications/[id]",
  },
  {
    titleKey: "tutorials.validateApplication.step2.title",
    descKey: "tutorials.validateApplication.step2.desc",
    fieldsKey: "tutorials.validateApplication.step2.fields",
    tipKey: "tutorials.validateApplication.step2.tip",
    screenshotSrc: "/src/assets/tutorials/application-validate/lease-details.png",
    screenshotUrl: "app.bailo.be/tenant-applications/[id]",
  },
  {
    titleKey: "tutorials.validateApplication.step3.title",
    descKey: "tutorials.validateApplication.step3.desc",
    fieldsKey: "tutorials.validateApplication.step3.fields",
    tipKey: "tutorials.validateApplication.step3.tip",
    screenshotSrc: "/src/assets/tutorials/application-validate/actions.png",
    screenshotUrl: "app.bailo.be/tenant-applications/[id]",
  },
];

const TutorialValidateApplication = () => {
  usePageTitle("pageTitle.tutorials.validateApplication", { path: "/tutorials/validate-application" });

  return (
    <TutorialLayout
      titleKey="tutorials.validateApplication.title"
      subtitleKey="tutorials.validateApplication.subtitle"
      pageTitleKey="pageTitle.tutorials.validateApplication"
      steps={steps}
    />
  );
};

export default TutorialValidateApplication;
```

- [ ] **Step 7: Create TutorialManageApplication.tsx**

```tsx
import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.manageApplication.step1.title",
    descKey: "tutorials.manageApplication.step1.desc",
    fieldsKey: "tutorials.manageApplication.step1.fields",
    tipKey: "tutorials.manageApplication.step1.tip",
    screenshotSrc: "/src/assets/tutorials/application-manage/overview.png",
    screenshotUrl: "app.bailo.be/tenant-applications/[id]",
  },
  {
    titleKey: "tutorials.manageApplication.step2.title",
    descKey: "tutorials.manageApplication.step2.desc",
    fieldsKey: "tutorials.manageApplication.step2.fields",
    tipKey: "tutorials.manageApplication.step2.tip",
    screenshotSrc: "/src/assets/tutorials/application-manage/tabs.png",
    screenshotUrl: "app.bailo.be/tenant-applications/[id]",
  },
  {
    titleKey: "tutorials.manageApplication.step3.title",
    descKey: "tutorials.manageApplication.step3.desc",
    fieldsKey: "tutorials.manageApplication.step3.fields",
    tipKey: "tutorials.manageApplication.step3.tip",
    screenshotSrc: "/src/assets/tutorials/application-manage/upload-document.png",
    screenshotUrl: "app.bailo.be/tenant-applications/[id]/documents",
  },
];

const TutorialManageApplication = () => {
  usePageTitle("pageTitle.tutorials.manageApplication", { path: "/tutorials/manage-application" });

  return (
    <TutorialLayout
      titleKey="tutorials.manageApplication.title"
      subtitleKey="tutorials.manageApplication.subtitle"
      pageTitleKey="pageTitle.tutorials.manageApplication"
      steps={steps}
    />
  );
};

export default TutorialManageApplication;
```

- [ ] **Step 8: Create TutorialReviews.tsx**

```tsx
import TutorialLayout, { TutorialStep } from "@/components/TutorialLayout";
import usePageTitle from "@/hooks/usePageTitle";

const steps: TutorialStep[] = [
  {
    titleKey: "tutorials.reviews.step1.title",
    descKey: "tutorials.reviews.step1.desc",
    fieldsKey: "tutorials.reviews.step1.fields",
    tipKey: "tutorials.reviews.step1.tip",
    screenshotSrc: "/src/assets/tutorials/reviews/tenant-review.png",
    screenshotUrl: "app.bailo.be/reviews/create",
  },
  {
    titleKey: "tutorials.reviews.step2.title",
    descKey: "tutorials.reviews.step2.desc",
    fieldsKey: "tutorials.reviews.step2.fields",
    tipKey: "tutorials.reviews.step2.tip",
    screenshotSrc: "/src/assets/tutorials/reviews/owner-review.png",
    screenshotUrl: "app.bailo.be/reviews/create",
  },
  {
    titleKey: "tutorials.reviews.step3.title",
    descKey: "tutorials.reviews.step3.desc",
    fieldsKey: "tutorials.reviews.step3.fields",
    tipKey: "tutorials.reviews.step3.tip",
    screenshotSrc: "/src/assets/tutorials/reviews/estate-review.png",
    screenshotUrl: "app.bailo.be/reviews/create",
  },
  {
    titleKey: "tutorials.reviews.step4.title",
    descKey: "tutorials.reviews.step4.desc",
    fieldsKey: "tutorials.reviews.step4.fields",
    tipKey: "tutorials.reviews.step4.tip",
    screenshotSrc: "/src/assets/tutorials/reviews/view-review.png",
    screenshotUrl: "app.bailo.be/reviews/[id]",
  },
];

const TutorialReviews = () => {
  usePageTitle("pageTitle.tutorials.reviews", { path: "/tutorials/reviews" });

  return (
    <TutorialLayout
      titleKey="tutorials.reviews.title"
      subtitleKey="tutorials.reviews.subtitle"
      pageTitleKey="pageTitle.tutorials.reviews"
      steps={steps}
    />
  );
};

export default TutorialReviews;
```

---

### Task 7: Wire up routes in App.tsx

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add lazy imports and routes**

Add these lazy imports after the existing ones:

```tsx
const Tutorials = lazy(() => import("./pages/Tutorials"));
const TutorialProfile = lazy(() => import("./pages/tutorials/TutorialProfile"));
const TutorialOwnerProfile = lazy(() => import("./pages/tutorials/TutorialOwnerProfile"));
const TutorialTenantProfile = lazy(() => import("./pages/tutorials/TutorialTenantProfile"));
const TutorialCreateEstate = lazy(() => import("./pages/tutorials/TutorialCreateEstate"));
const TutorialCreateApplication = lazy(() => import("./pages/tutorials/TutorialCreateApplication"));
const TutorialValidateApplication = lazy(() => import("./pages/tutorials/TutorialValidateApplication"));
const TutorialManageApplication = lazy(() => import("./pages/tutorials/TutorialManageApplication"));
const TutorialReviews = lazy(() => import("./pages/tutorials/TutorialReviews"));
```

Add these routes inside `<Routes>`, before the `*` catch-all:

```tsx
<Route path="/tutorials" element={<Suspense fallback={<div className="min-h-screen" />}><Tutorials /></Suspense>} />
<Route path="/tutorials/profile" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialProfile /></Suspense>} />
<Route path="/tutorials/owner-profile" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialOwnerProfile /></Suspense>} />
<Route path="/tutorials/tenant-profile" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialTenantProfile /></Suspense>} />
<Route path="/tutorials/create-estate" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialCreateEstate /></Suspense>} />
<Route path="/tutorials/create-application" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialCreateApplication /></Suspense>} />
<Route path="/tutorials/validate-application" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialValidateApplication /></Suspense>} />
<Route path="/tutorials/manage-application" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialManageApplication /></Suspense>} />
<Route path="/tutorials/reviews" element={<Suspense fallback={<div className="min-h-screen" />}><TutorialReviews /></Suspense>} />
```

---

### Task 8: Add Tutorials link to site.json nav

**Files:**
- Modify: `src/data/site.json`

- [ ] **Step 1: Add tutorials to navLinks**

In `src/data/site.json`, add to the `navLinks` array (after the `how-it-works` entry):

```json
{ "labelKey": "tutorials.nav.tutorials", "href": "/tutorials", "isRoute": true }
```

Also add to `footerLinks.product`:

```json
{ "labelKey": "tutorials.nav.tutorials", "href": "/tutorials" }
```

---

### Task 9: Create screenshot placeholder directories

**Files:**
- Create directories under `src/assets/tutorials/`

- [ ] **Step 1: Create the directory structure**

Run:
```bash
mkdir -p src/assets/tutorials/profile
mkdir -p src/assets/tutorials/owner-profile
mkdir -p src/assets/tutorials/tenant-profile
mkdir -p src/assets/tutorials/estate
mkdir -p src/assets/tutorials/application-create
mkdir -p src/assets/tutorials/application-validate
mkdir -p src/assets/tutorials/application-manage
mkdir -p src/assets/tutorials/reviews
```

- [ ] **Step 2: Add .gitkeep files so directories are tracked**

Run: `find src/assets/tutorials -type d -exec touch {}/.gitkeep \;`

---

### Task 10: Verify the build

**Files:** none

- [ ] **Step 1: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 2: Run dev server and spot-check**

Run: `npm run dev`
Navigate to: `http://localhost:5173/tutorials`
Check: index page with 8 cards renders correctly.
Navigate to: `http://localhost:5173/tutorials/profile`
Check: 3 steps with browser-chrome placeholder frames render correctly.
Navigate to: `http://localhost:5173/tutorials/reviews`
Check: 4 steps render correctly.
