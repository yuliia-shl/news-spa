import { createContext, use } from 'react';
import type { ArticlesContextValue } from '../types/article';

export const ArticlesContext = createContext<ArticlesContextValue | null>(null);

export const useArticles = () => {
  const context = use(ArticlesContext);

  if (!context) {
    throw new Error('useArticles must be used within an ArticlesProvider');
  }
  
  return context;
};