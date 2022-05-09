import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<{}> = (props) => {
  return (
    <AppBar position="static" className={"footer"}>
      <Toolbar>
        <Box className={"footer-col footer-col1"}>
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
        <Box className={"footer-col"}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
