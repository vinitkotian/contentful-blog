import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    background: "black !important",
    color: "white",
    height: "20vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  footerCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "20rem",
    height: "100%",
    a: {
      color: "white",
      font: "bold 1.1rem 'Roboto', sans-serif",
      textDecoration: "none",
      margin: "0.3rem",
    },
  },

  footerBorder: {
    borderRight: "0.1rem solid white",
    marginRight: "5rem",
  },

  disclaimer: {
    width: "70%",
    height: "80%",
  },
});

const Footer: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Box className={`${classes.footerCol} ${classes.footerBorder}`}>
          <Link href="/">
            <a>Terms And Conditions</a>
          </Link>
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
          <Link href="/">
            <a>Cookie Policy</a>
          </Link>
        </Box>
        <Box className={`${classes.footerCol} ${classes.footerBorder}`}>
          <Link href="/">
            <a>About Us</a>
          </Link>
          <Link href="/">
            <a>Contact Us</a>
          </Link>
          <Link href="/">
            <a>Kickstarter to Blogspace</a>
          </Link>
        </Box>
        <Box className={`${classes.footerCol} ${classes.disclaimer}`}>
          <Typography variant="h6" sx={{ textDecoration: "underline" }}>
            Disclaimer
          </Typography>
          <Typography variant="body2">
            All the information on this website is published in good faith and
            for general information purpose only. Blogspace does not make any
            warranties about the completeness, reliability and accuracy of this
            information. Any action you take upon the information you find on
            this website (Blogspace.com), is strictly at your own risk. will not
            be liable for any losses and/or damages in connection with the use
            of our website.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
