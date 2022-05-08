import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer: React.FC<{}> = (props) => {
  return (
    <AppBar position="static" className={"footer"}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Footer;
