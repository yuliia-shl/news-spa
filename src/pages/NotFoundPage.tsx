import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Oops!</h1>
      <h3 className="subtitle">404 - Page not found</h3>
      <Button
        component={Link}
        to="/"
        size="large"
        startIcon={<ArrowBackIcon />}
        className="goToHome"
      >
        GO TO HOME PAGE
      </Button>
    </div>
  );
};

export default NotFoundPage;
