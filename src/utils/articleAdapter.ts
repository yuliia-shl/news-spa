/**
 * Transforms an article object from the API format (snake_case)
 * to the application's internal format (camelCase).
 * Also formats the publication date string.
 * * @param api - The raw article object received from the Spaceflight News API.
 * @returns A formatted Article object ready for use in UI components.
 */

import type { ApiArticle, Article } from '../types/article';
import { format } from 'date-fns';

export const adaptArticle = (api: ApiArticle): Article => ({
  id: api.id,
  title: api.title,
  summary: api.summary,
  imageUrl: api.image_url,
  publishedAt: format(new Date(api.published_at), 'MMMM do, yyyy'),
});
