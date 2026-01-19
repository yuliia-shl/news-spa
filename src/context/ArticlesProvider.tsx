import { useEffect, useState } from 'react';
import { getArticles } from '../api/services';
import type { ApiArticle, Article } from '../types/article';
import { ArticlesContext } from '../hooks/useArticles';
import { format } from 'date-fns';

const adaptArticle = (api: ApiArticle): Article => ({
  id: api.id,
  title: api.title,
  summary: api.summary,
  imageUrl: api.image_url,
  publishedAt: format(new Date(api.published_at), 'MMMM do, yyyy'),
});

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const data = await getArticles();
        setArticles(data.results.map(adaptArticle));
        setTotal(data.count);
      } catch {
        setError('Unable to load articles. Try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <ArticlesContext value={{ articles, total, loading, error }}>
      {children}
    </ArticlesContext>
  );
};
