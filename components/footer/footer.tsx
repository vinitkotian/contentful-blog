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
            <a style={{ margin: "0.2rem" }}>Terms And Conditions</a>
          </Link>
          <Link href="/">
            <a style={{ margin: "0.2rem" }}>Privacy Policy</a>
          </Link>
          <Link href="/">
            <a style={{ margin: "0.2rem" }}>Cookie Policy</a>
          </Link>
        </Box>
        <Box className={"footer-col"}>
          <Link href="/">
            <a style={{ margin: "0.2rem" }}>About Us</a>
          </Link>
          <Link href="/">
            <a style={{ margin: "0.2rem" }}>Contact Us</a>
          </Link>
          <Link href="/">
            <a style={{ margin: "0.2rem" }}>Kickstarter to Blogspace</a>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
