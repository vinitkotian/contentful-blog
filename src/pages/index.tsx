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
  },
  browseLinkBtn: {
    width: "20rem",
    height: "2.8rem",
    marginRight: "5rem",
    borderRadius: "0.8rem",
    border: "0.1rem solid white",
    color: "white",
    backgroundColor: "transparent",
    font: 'bold 1.2rem "Anton", sans-serif',
    cursor: "pointer",
    '&:hover':{
      animationName: "btn-colours",
      animationDuration: "5s",
      animationIterationCount: "infinite"
    }
  },
  "@keyframes btn-colours": {
    "0%": {
      border: "0.1rem solid #4716F8",
      color: "#4716F8"
    },
    "20%": {
      border: "0.1rem solid rgb(228, 74, 74)",
      color: "rgb(228, 74, 74)"
    },
    "40%": {
      border: "0.1rem solid rgb(160, 28, 153)",
      color: "rgb(160, 28, 153)"
    },
    "60%": {
      border: "0.1rem solid rgb(201, 204, 17)",
      color: "rgb(201, 204, 17)"
    },
    "80%": {
      border: "0.1rem solid rgb(23, 204, 17)",
      color: "rgb(23, 204, 17)"
    },
    "100%": {
      border: "0.1rem solid rgb(77, 156, 221)",
      color: "rgb(77, 156, 221)"
    }
  }
});

const HomePage: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexDirection: "column" }}>
      <Box className={classes.backdrop}>
        <div className={classes.welcomeText}>Welcome to Blogspace.</div>
        <Link href={"/browse"} passHref>
          <button className={classes.browseLinkBtn}>Explore</button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
