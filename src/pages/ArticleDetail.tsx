import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = article ? getRelatedArticles(article.id, 3) : [];

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = window.location.href;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Category */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-lg font-semibold">
                  {article.author.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">Auteur</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_200px] gap-12">
              {/* Article content */}
              <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                      .replace(/### /g, '<h3 class="text-xl font-semibold mt-6 mb-3">')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/\n- /g, '</p><ul class="list-disc pl-6 mb-4"><li>')
                      .replace(/\n(\d+)\. \*\*/g, '</p><ol class="list-decimal pl-6 mb-4"><li><strong>')
                  }}
                />
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
                    <div className="flex items-center gap-2 mb-4">
                      <Share2 className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-card-foreground">Partager</span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${article.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${article.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-hero-gradient rounded-2xl p-8 lg:p-12 text-center shadow-elevated">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                Prêt à simplifier votre location ?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Rejoignez plus de 10 000 utilisateurs satisfaits sur Bailo
              </p>
              <Button variant="hero" size="lg">
                Créer mon compte gratuitement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/blog/${relatedArticle.slug}`}
                  className="group"
                >
                  <article className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-accent">{relatedArticle.category}</span>
                      <h3 className="font-semibold text-card-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ArticleDetail;
