import { articlesAPI } from './api';
import type {
  ApiArticle,
  ApiResponse,
  GetArticlesParams,
} from '../types/article';
import { adaptArticle } from '../utils/articleAdapter';

export const getArticles = async (limit = 50, offset = 0, query = '') => {
  const params: GetArticlesParams = { limit, offset };

  if (query) {
    params.title_contains_one = query;
    params.summary_contains_one = query;
  }
  const { data } = await articlesAPI.get<ApiResponse>('/articles', { params });

  return data;
};

export const getArticleById = async (id: number) => {
  const { data } = await articlesAPI.get<ApiArticle>(`/articles/${id}`);

  return adaptArticle(data);
};
