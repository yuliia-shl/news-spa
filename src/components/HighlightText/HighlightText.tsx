import Highlighter from 'react-highlight-words';
import type { HighlightTextProps } from '../../types/article';

const HighlightText = ({ text, searchWords }: HighlightTextProps) => {
  return (
    <Highlighter
      highlightClassName="highlight"
      searchWords={searchWords}
      autoEscape={true}
      textToHighlight={text}
    />
  );
};

export default HighlightText;
