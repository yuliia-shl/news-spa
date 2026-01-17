import ArticlesList from "../components/ArticlesList/ArticlesList";
import SearchInput from "../components/SearchInput/SearchInput";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <SearchInput />
      <ArticlesList />
    </div>
  );
};

export default HomePage;
