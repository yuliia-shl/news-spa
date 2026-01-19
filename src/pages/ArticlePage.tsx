import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import type { Article } from '../types/article';
import { getArticleById } from '../api/services';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const goBackLink = useRef(location.state ?? '/');

  useEffect(() => {
    if (!id) return;
    const fetchArticleById = async () => {
      setLoading(true);
      try {
        const data = await getArticleById(Number(id));
        setArticle(data);
      } catch {
        setError('Error loading article');
      } finally {
        setLoading(false);
      }
    };
    fetchArticleById();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <div className="articlePageWrap">
      <img
        src={article.imageUrl}
        alt="Article picture"
        className="articleImg"
      />
      <div className="articleContent">
        <div className="articleContainer">
          <h1 className="articleTitle">{article.title}</h1>
          <p className="articleDesc">{article.summary}</p>
        </div>
        <Button
          component={Link}
          to={goBackLink.current}
          size="small"
          color="primary"
          startIcon={<ArrowBackIcon />}
          className="backButton"
        >
          Back to homepage
        </Button>
      </div>
    </div>
  );
};

export default ArticlePage;
