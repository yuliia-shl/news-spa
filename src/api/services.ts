import { articlesAPI } from './api';
import type { ApiArticle, ApiResponse } from '../types/article';
import { adaptArticle } from '../utils/articleAdapter';

export const getArticles = async (limit = 50, offset = 0) => {
  const { data } = await articlesAPI.get<ApiResponse>(
    `/articles/?limit=${limit}&offset=${offset}`
  );

  return data;
};

export const getArticleById = async (id: number) => {
  const { data } = await articlesAPI.get<ApiArticle>(`/articles/${id}`);

  return adaptArticle(data);
};
