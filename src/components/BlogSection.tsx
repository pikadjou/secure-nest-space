import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogSection = () => {
  const { t, language } = useLanguage();
  const featuredArticles = articles.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("blog.title")}{" "}
              <span className="text-primary">{t("blog.title.highlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t("blog.subtitle")}
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" size="lg">
              {t("blog.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.publishedAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      {article.author.avatar}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {article.author.name}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
