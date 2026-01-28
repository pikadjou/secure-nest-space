import articlesData from "./articles.json";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
  readTime: string;
  publishedAt: string;
}

export const articles: Article[] = articlesData as Article[];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): Article[] => {
  return articles.filter((article) => article.id !== currentId).slice(0, limit);
};
