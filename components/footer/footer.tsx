import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<{}> = (props) => {
  return (
    <AppBar position="static" className={"footer"}>
      <Toolbar>
        <Box className={"footer-col footer-border"}>
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
        <Box className={"footer-col footer-border"}>
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
        <Box className={"footer-col disclaimer"}>
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
