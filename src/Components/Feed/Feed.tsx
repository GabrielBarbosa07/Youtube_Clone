import { useContext } from "react";
import { Typography, Grid } from "@mui/material";

import { Videos } from "../";
import { NavBarContext } from "../../Contexts/NavBarContext";

const Feed = () => {
  const { selectedCategory } = useContext(NavBarContext);

  return (
    <Grid xs={12} >
      {/* <Grid xs sm={2}>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 4, color: "#fff" }}
        >
          Copyright © 2022
        </Typography>
      </Grid> */}

      <Grid sx={{ marginLeft: "68px" }} xs={12} sm>
        <Grid xs sx={{padding:"0 20px",alignItems:"center" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white", width: "100%",
          }}
          >
            {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>

          <Videos />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Feed;
