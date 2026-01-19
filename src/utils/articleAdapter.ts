import type { ApiArticle, Article } from '../types/article';
import { format } from 'date-fns';

export const adaptArticle = (api: ApiArticle): Article => ({
  id: api.id,
  title: api.title,
  summary: api.summary,
  imageUrl: api.image_url,
  publishedAt: format(new Date(api.published_at), 'MMMM do, yyyy'),
});
