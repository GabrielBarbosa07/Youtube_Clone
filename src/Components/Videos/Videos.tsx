import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "../";
import { VideoProps, VideosProps } from "../Feed/Feed";

const Videos = ({ videos }: VideosProps) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={"row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item: VideoProps, idx: number) => (
        <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.snippet?.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
