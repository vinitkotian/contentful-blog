import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";
import { GetServerSideProps } from "next";
import Link from "next/link";


const useStyles = makeStyles({
  backdrop: {
    background: `url("https://images.ctfassets.net/sms820xd9lm0/3sO66OqZHfU3Z1JBg5ssS1/1d483d95c0a3d6d9bc77313f9bb912fb/wordpress-923188_1920.jpg")`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  welcomeText: {
    font: 'bold 3rem "Anton", sans-serif',
    color: "white",
    margin: "5rem 5rem 0 0",
    textTransform: "capitalize",
  }
});

const HomePage: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexDirection: "column" }}>
      <Box className={classes.backdrop}>
        <div className={classes.welcomeText}>Welcome to Blogspace.</div>
        <Link href={"/browse"} passHref>
          <button className={"browse-link-btn"}>Explore</button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
