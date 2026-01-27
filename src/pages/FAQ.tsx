import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqCategories = [
    {
      categoryKey: "faq.cat.general",
      questions: [
        { questionKey: "faq.q1", answerKey: "faq.a1" },
        { questionKey: "faq.q2", answerKey: "faq.a2" },
        { questionKey: "faq.q3", answerKey: "faq.a3" },
      ],
    },
    {
      categoryKey: "faq.cat.payment",
      questions: [
        { questionKey: "faq.q4", answerKey: "faq.a4" },
        { questionKey: "faq.q5", answerKey: "faq.a5" },
        { questionKey: "faq.q6", answerKey: "faq.a6" },
      ],
    },
    {
      categoryKey: "faq.cat.features",
      questions: [
        { questionKey: "faq.q7", answerKey: "faq.a7" },
        { questionKey: "faq.q8", answerKey: "faq.a8" },
        { questionKey: "faq.q9", answerKey: "faq.a9" },
      ],
    },
    {
      categoryKey: "faq.cat.technical",
      questions: [
        { questionKey: "faq.q10", answerKey: "faq.a10" },
        { questionKey: "faq.q11", answerKey: "faq.a11" },
        { questionKey: "faq.q12", answerKey: "faq.a12" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">{t("faq.badge")}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("faq.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("faq.subtitle")}
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
                  {t(category.categoryKey)}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`${categoryIndex}-${questionIndex}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                        {t(item.questionKey)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {t(item.answerKey)}
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
                {t("faq.contact.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("faq.contact.subtitle")}
              </p>
              <a
                href="/support"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
              >
                {t("faq.contact.button")}
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
