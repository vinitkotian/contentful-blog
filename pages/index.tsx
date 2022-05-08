import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

const HomePage: React.FC<{}> = () => {
  return (
    <Box sx={{ flexDirection: "column" }}>
      <Box className={"backdrop"}>
        <div className="welcome-text">Welcome to Blogspace.</div>
        <Link href={"/browse"} passHref>
          <button className="browse-link-btn">Explore</button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
