import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArticlePage = () => {
  return (
    <div className="articlePageWrap">
      <img src="/test.jpg" alt="Article picture" className="articleImg" />
      <div className="articleContent">
        <div className="articleContainer">
          <h1 className="articleTitle">The 2020 World's Most Valuable Brands</h1>
          <p className="articleDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non
            etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor
            pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi
            viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla
            massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat
            ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras
            nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at
            quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc
            etiam. Elementum risus facilisi mauris diam amet et sed. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt.
            Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis.
            Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus
            lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac
            faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis
            proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi
            amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus,
            aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum
            risus facilisi mauris diam amet et sed. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel
            purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo
            mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus lacinia accumsan.
            Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit
            morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie
            tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices
            nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque
            ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris
            diam amet et sed.
          </p>
        </div>
        <Button
          href="/"
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
