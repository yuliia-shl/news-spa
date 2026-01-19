import { useEffect, useState } from 'react';
import { getArticles } from '../api/services';
import type { Article } from '../types/article';
import { ArticlesContext } from '../hooks/useArticles';
import { adaptArticle } from '../utils/articleAdapter';
import { sortArticles } from '../utils/sortArticles';

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      if (!searchQuery.trim()) {
        const data = await getArticles();
        setArticles(data.results.map(adaptArticle));
        setTotal(data.count);
        return;
      }
      setLoading(true);

      try {
        // Split search string into an array of keywords, removing extra spaces
        const queryArray = searchQuery.trim().split(/\s+/);
        // Fetch data from API using keywords joined by commas for search filters
        const data = await getArticles(50, 0, queryArray.join(','));
        // Transform raw API data into our application's Article format
        const adapted = data.results.map(adaptArticle);
        // Sort articles by priority (matches in title are higher than summary)
        const sorted = sortArticles(adapted, queryArray);

        setArticles(sorted);
        setTotal(data.count);
      } catch {
        setError('Unable to load articles. Try again later.');
      } finally {
        setLoading(false);
      }
    };
    // Set a timer to delay the API call by 500ms after the user stops typing.
    const timeoutId = setTimeout(fetchArticles, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <ArticlesContext
      value={{
        articles,
        total,
        loading,
        error,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ArticlesContext>
  );
};
