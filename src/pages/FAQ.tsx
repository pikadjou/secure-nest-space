import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Général",
    questions: [
      {
        question: "Qu'est-ce que Bailo ?",
        answer: "Bailo est une plateforme dédiée à la danse qui vous permet de découvrir des cours, des événements et de rejoindre une communauté passionnée. Que vous soyez débutant ou danseur confirmé, Bailo vous accompagne dans votre parcours.",
      },
      {
        question: "Bailo est-il gratuit ?",
        answer: "Bailo propose une version gratuite avec des fonctionnalités de base. Pour accéder à l'ensemble des fonctionnalités premium, des abonnements mensuels et annuels sont disponibles à des tarifs avantageux.",
      },
      {
        question: "Comment créer un compte ?",
        answer: "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut de la page. Remplissez le formulaire avec vos informations personnelles, validez votre email et vous pourrez commencer à utiliser Bailo immédiatement.",
      },
    ],
  },
  {
    category: "Abonnement & Paiement",
    questions: [
      {
        question: "Quels sont les moyens de paiement acceptés ?",
        answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal et les virements bancaires pour les abonnements annuels. Tous les paiements sont sécurisés via notre partenaire Stripe.",
      },
      {
        question: "Puis-je annuler mon abonnement à tout moment ?",
        answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. L'annulation prendra effet à la fin de votre période de facturation en cours, et vous conserverez l'accès jusqu'à cette date.",
      },
      {
        question: "Comment obtenir un remboursement ?",
        answer: "Si vous n'êtes pas satisfait, vous disposez de 14 jours après votre souscription pour demander un remboursement complet. Contactez notre support via la page de support avec votre ID Bailo pour initier la procédure.",
      },
    ],
  },
  {
    category: "Fonctionnalités",
    questions: [
      {
        question: "Comment trouver des cours près de chez moi ?",
        answer: "Utilisez la fonction de recherche géolocalisée dans l'application. Activez votre localisation ou entrez manuellement votre ville pour découvrir tous les cours et événements disponibles dans votre région.",
      },
      {
        question: "Puis-je publier mes propres événements ?",
        answer: "Oui, avec un compte Pro ou Business, vous pouvez créer et publier vos propres événements de danse. Accédez à votre tableau de bord, cliquez sur 'Créer un événement' et remplissez les informations requises.",
      },
      {
        question: "Comment fonctionne le système de notation ?",
        answer: "Après chaque cours ou événement auquel vous participez, vous pouvez laisser une note de 1 à 5 étoiles accompagnée d'un commentaire. Ces avis aident la communauté à trouver les meilleures expériences.",
      },
    ],
  },
  {
    category: "Technique & Support",
    questions: [
      {
        question: "L'application est-elle disponible sur mobile ?",
        answer: "Bailo est accessible via votre navigateur web sur mobile et ordinateur. Une application native iOS et Android est actuellement en développement et sera disponible prochainement.",
      },
      {
        question: "J'ai oublié mon mot de passe, que faire ?",
        answer: "Cliquez sur 'Connexion' puis sur 'Mot de passe oublié'. Entrez votre adresse email et vous recevrez un lien pour réinitialiser votre mot de passe dans les minutes qui suivent.",
      },
      {
        question: "Comment contacter le support ?",
        answer: "Vous pouvez contacter notre équipe support via la page dédiée en créant un ticket. Nous nous engageons à répondre sous 24h ouvrées. Pour les urgences, vous pouvez également nous joindre sur nos réseaux sociaux.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Centre d'aide</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Retrouvez les réponses aux questions les plus courantes sur Bailo. 
              Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`${categoryIndex}-${questionIndex}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Vous n'avez pas trouvé votre réponse ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe support est disponible pour vous aider avec toutes vos questions.
              </p>
              <a
                href="/support"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
              >
                Contacter le support
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
