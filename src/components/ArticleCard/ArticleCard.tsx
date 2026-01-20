import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Box from '@mui/material/Box';
import { colors, shadows } from '../../theme/colors';
import { Link } from 'react-router-dom';
import type { ArticleCardProps } from '../../types/article';
import HighlightText from '../HighlightText/HighlightText';
import { useArticles } from '../../hooks/useArticles';

const ArticleCard = ({ article }: ArticleCardProps) => {
  const shortSummary =
    article.summary.length > 100
      ? article.summary.slice(0, 100) + '...'
      : article.summary;
  const { searchQuery } = useArticles();
  const searchWords = searchQuery.trim().split(/\s+/);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        backgroundColor: colors.white,
        boxShadow: shadows.default,
      }}
    >
      <CardActionArea
        component={Link}
        to={`/article/${article.id}`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flexGrow: 1,
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={article.imageUrl}
          alt="Article picture"
          loading="lazy"
          sx={{ width: '100%', height: 217, objectFit: 'cover' }}
        />
        <CardContent
          sx={{
            padding: '24px 24px 0',
            mb: 1.5,
            flexGrow: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
            <CalendarTodayOutlinedIcon
              sx={{ fontSize: 16, color: colors.primary60 }}
            />
            <Typography sx={{ color: colors.primary60, fontSize: 14 }}>
              {article.publishedAt}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            component="div"
            sx={{
              mb: 2.5,
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            <HighlightText text={article.title} searchWords={searchWords} />
          </Typography>
          <Typography>
            <HighlightText text={shortSummary} searchWords={searchWords} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: '10px 24px 24px' }}>
        <Button
          href={`/article/${article.id}`}
          size="small"
          endIcon={<ArrowForwardIcon />}
          aria-label={`Read more about ${article.title}`}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
