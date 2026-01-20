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
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface ArticleCardProps {
  article: Article;
}

export interface GetArticlesParams {
  limit: number;
  offset: number;
  title_contains_one?: string;
  summary_contains_one?: string;
}

export interface HighlightTextProps {
  text: string;
  searchWords: string[];
}
