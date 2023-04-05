import { useEffect, useState } from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";

import { fetchFromAPI } from "../../Utils/fetchFromAPI";
import { Videos, SideBar } from "../";

export interface VideosProps {
  videos?: VideoProps[];
  direction?: string | undefined;
}

export interface VideoProps {
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishAt: string;
    thumbnails: {
      default: {
        height: number;
        url: string;
        width: number;
      };
      high: {
        height: number;
        url: string;
        width: number;
      };
      medium: {
        height: number;
        url: string;
        width: number;
      };
    };
  };
}

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Recomendados");
  const [videos, setVideos] = useState();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Grid container>
      <Grid
        xs
        md={2}
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          p: { sx: 0, md: 2 },
          m: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff", display: { sx: "none", lg: "block" } }}
        >
          Copyright © 2022
        </Typography>
      </Grid>

      <Grid
        md
        p={2}
        sx={{
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Grid>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Feed;
