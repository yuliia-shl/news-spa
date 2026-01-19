import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme.ts';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import { ArticlesProvider } from './context/ArticlesProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ArticlesProvider>
          <App />
        </ArticlesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
