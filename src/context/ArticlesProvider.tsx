import { useEffect, useState } from 'react';
import { getArticles } from '../api/services';
import type { Article } from '../types/article';
import { ArticlesContext } from '../hooks/useArticles';
import { adaptArticle } from '../utils/articleAdapter';

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
