import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../../Utils/constants";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Stack
     
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: "row",
      }}
    >
      <Link to="/" >
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
