import { useArticles } from '../../hooks/useArticles';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlesList = () => {
  const { total, articles, loading, error } = useArticles();
  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="results">Results: {total}</div>
      <ul className="articlesList">
        {articles.map(article => (
          <li key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArticlesList;
