import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "../";
import { VideoProps } from "../Feed/Feed";

const Videos = ({ videos, direction }: any) => {
  if (!videos?.length) return <Loader />;
  console.log(videos)

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item: VideoProps, idx: number) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
