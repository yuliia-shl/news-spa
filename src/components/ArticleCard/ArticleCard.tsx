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

const ArticleCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: colors.white,
        boxShadow: shadows.default,
      }}
    >
      <CardActionArea component={Link} to="/article/:id">
        <CardMedia
          component="img"
          height="140"
          image="/test.jpg"
          alt="Article picture"
          sx={{ width: 400, height: 217, objectFit: 'cover' }}
        />
        <CardContent sx={{ padding: '24px 24px 0', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
            <CalendarTodayOutlinedIcon sx={{ fontSize: 16, color: colors.primary60 }} />
            <Typography sx={{ color: colors.primary60, fontSize: 14 }}>June 29th, 2021</Typography>
          </Box>
          <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2.5 }}>
            The 2020 World's Most Valuable Brands
          </Typography>
          <Typography>
            Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo
            libero aliquam. Urna arcu nunc tortor vitae pharetra...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: '10px 24px 24px' }}>
        <Button href="/article/:id" size="small" endIcon={<ArrowForwardIcon />}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
