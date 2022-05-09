import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Tooltip } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={"header"}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/"} passHref>
              <Typography variant="h4" sx={{ cursor: "pointer" }}>
                Blogspace
              </Typography>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
