import { articlesAPI } from './api';
import type { ApiResponse } from '../types/article';

export const getArticles = async (limit = 50, offset = 0) => {
  const { data } = await articlesAPI.get<ApiResponse>(`/articles/?limit=${limit}&offset=${offset}`);

  return data;
};
