## Orbit Digest

A modern React application built with TypeScript and Material UI that allows
users to explore the latest space-related news using the
[Spaceflight News API](https://spaceflightnewsapi.net/), featuring advanced
filtering, prioritized sorting, and keyword highlighting.

# Live Demo

- Running App:
  [https://orbit-digest.netlify.app/](https://orbit-digest.netlify.app/)

# Tech Stack Core:

- React 18, TypeScript
- UI Framework: Material UI (MUI)
- Styling: SCSS (Sass)
- State Management: Context API + Custom Hooks
- Data Fetching: Axios
- Navigation: React Router DOM v6
- Utilities: date-fns, react-highlight-words

# Key Features & Business Logic

1. Advanced Filtering Logic Implemented a custom search algorithm that handles
   multiple keywords:

- Priority Sorting: Articles matching keywords in the Title are ranked higher
  than those matching in the Summary.

- Multi-Keyword Support: Users can enter multiple space-separated words to find
  relevant content.

2. Keyword Highlighting

- Matches found in titles and summaries are dynamically highlighted with a
  yellow background, providing immediate visual feedback to the user.

3. UI/UX

- **Design**: A clean layout inspired by the
  [Figma prototype](https://www.figma.com/file/h1veXmuEt84sT7PEZgF42K/Frontend_test?node-id=0%3A1).
- **Lazy Loading**: Lazy loading and object-fit styling to prevent Layout Shift
  (CLS).
- **Scroll Restoration**: Intelligent navigation that remembers your position in
  the feed.

# Project Architecture

```text
📦src
 ┣ 📂api        # Axios configuration and API service calls
 ┣ 📂components # Reusable UI components (ArticleCard, Search, etc.)
 ┣ 📂context    # Global state management (ArticlesProvider)
 ┣ 📂hooks      # Custom hooks (useArticles)
 ┣ 📂pages      # High-level page components (HomePage, ArticlePage)
 ┣ 📂scss       # Advanced SCSS architecture (7-1 pattern inspired)
 ┣ 📂theme      # MUI Theme customization
 ┣ 📂types      # TypeScript interfaces and type definitions
 ┗ 📂utils      # Data adapters and sorting algorithms
```

# Installation

1. Clone the repo:

**Option 1:** Using HTTPS

```bash
git clone https://github.com/yuliia-shl/news-spa.git
```

**Option 2:** Using SSH (Recommended for security)

```bash
git clone git@github.com:yuliia-shl/news-spa.git
```

**Note:** Ensure your SSH key is added to your GitHub account. If your key is
password-protected, you will be prompted for the passphrase during cloning.

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

# Implementation Notes

- **State Management**: The ArticlesProvider manages the lifecycle of the data
  fetching process, including loading, error, and searchQuery states.

- **Custom Hook**: The useArticles hook abstracts the Context consumption,
  providing a clean API for components to access global data.

- **Type Safety**: Every layer of the application, from API responses to
  component props, is strictly typed with TypeScript interfaces.
- **Centralized Routing**: Navigation is managed via React Router v6.
