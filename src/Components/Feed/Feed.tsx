import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

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
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2022
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: {sx:0,md:1},
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Box sx={{ margin: "0 auto" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
