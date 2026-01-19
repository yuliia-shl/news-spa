export interface Article {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
}

export interface ApiArticle {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
}

export interface ApiResponse {
  count: number;
  results: ApiArticle[];
}

export interface ArticlesContextValue {
  articles: Article[];
  total: number;
  loading: boolean;
  error: string | null;
}

export interface ArticleCardProps {
  article: Article;
}
