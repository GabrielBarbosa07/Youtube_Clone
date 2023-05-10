import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia, Grid } from "@mui/material";

import { ChannelCard } from "../";
import { fetchFromAPI } from "../../Utils/fetchFromAPI";
import VideosOfChannel from "../VideosOfChannel/VideosOfChannel";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  const bg = channelDetail?.brandingSettings?.image?.bannerExternalUrl;

  return (
    <Grid minHeight="85vh" sx={{ minWidth: "100vw", justifyContent:"center" }}>
      <CardMedia
        image={bg}
        sx={{
          minHeight: "300px",
          zIndex: 10,
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />

      <Grid xs>
        <VideosOfChannel videos={videos} justifyContent="center" />
      </Grid>
    </Grid>
  );
};
//parei aqui

export default ChannelDetail;
