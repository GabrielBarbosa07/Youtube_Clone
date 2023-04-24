import { useEffect, useState } from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";

import { fetchFromAPI } from "../../Utils/fetchFromAPI";
import { Videos, NavBar } from "../";

const Feed = () => {
  // const [selectedCategory, setSelectedCategory] = useState("Novos");
  // const [videos, setVideos] = useState();

  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
  //     setVideos(data.items)
  //   );
  // }, [selectedCategory]);

  return (
    <Grid container xs={12}>
      {/* <Grid
        xs
        sm={2}
        sx={{
          width: "100%",
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          m: 2,
        }}
      >
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 4, color: "#fff" }}
        >
          Copyright © 2022
        </Typography>
      </Grid>

      <Grid xs={12} sm p={2}>
        <Grid xs>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white", width: "100%" }}
          >
            {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Feed;
