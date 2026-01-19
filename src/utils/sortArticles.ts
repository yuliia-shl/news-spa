/**
 * Sorts articles based on keyword matches with a priority system:
 * 1. Articles with more matches in the TITLE come first.
 * 2. If title matches are equal, articles with more matches in the SUMMARY come next.
 * * @param articles - Array of article objects to be sorted.
 * @param query - Array of lowercase keywords to search for.
 * @returns A new sorted array of articles.
 */

import type { Article } from '../types/article';

export const sortArticles = (
  articles: Article[],
  query: string[]
): Article[] => {
  if (query.length === 0) return articles;

  const lowerQuery = query.map(q => q.toLowerCase());

  return [...articles].sort((a, b) => {
    const aTitleMatches = lowerQuery.filter(q =>
      a.title.toLowerCase().includes(q)
    ).length;

    const bTitleMatches = lowerQuery.filter(q =>
      b.title.toLowerCase().includes(q)
    ).length;

    if (aTitleMatches !== bTitleMatches) return bTitleMatches - aTitleMatches;

    const aDescMatches = lowerQuery.filter(q =>
      a.summary.toLowerCase().includes(q)
    ).length;

    const bDescMatches = lowerQuery.filter(q =>
      b.summary.toLowerCase().includes(q)
    ).length;

    return bDescMatches - aDescMatches;
  });
};
