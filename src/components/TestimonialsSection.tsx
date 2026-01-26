import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Locataire à Paris",
    content: "Grâce à Bailo, j'ai trouvé mon appartement en moins d'une semaine. Le processus était simple et le dossier validé rapidement. Je recommande !",
    rating: 5,
    avatar: "M",
  },
  {
    id: 2,
    name: "Thomas Martin",
    role: "Propriétaire à Lyon",
    content: "En tant que propriétaire, Bailo me permet de trouver des locataires sérieux avec des dossiers déjà vérifiés. Un vrai gain de temps.",
    rating: 5,
    avatar: "T",
  },
  {
    id: 3,
    name: "Sophie Bernard",
    role: "Locataire à Bordeaux",
    content: "Interface intuitive, support réactif et un suivi impeccable du dossier. La meilleure expérience de recherche de logement que j'ai eue.",
    rating: 5,
    avatar: "S",
  },
  {
    id: 4,
    name: "Lucas Petit",
    role: "Locataire à Marseille",
    content: "Finies les heures à constituer des dossiers papier ! Tout est numérisé et sécurisé. Merci Bailo !",
    rating: 5,
    avatar: "L",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ils nous font{" "}
            <span className="text-accent">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les retours de nos utilisateurs satisfaits.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card text-center">
                    <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
                    
                    <p className="text-lg lg:text-xl text-card-foreground leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>

                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-accent fill-accent"
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-card-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
