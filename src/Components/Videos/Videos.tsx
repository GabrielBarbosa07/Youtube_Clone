import { Stack, Box } from "@mui/material";

import { Loader, VideoCard } from "../";
import { VideoProps } from "../../Utils/props";


const Videos = ({ videos, direction }: any) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
      sx={{ width: "100%" }}
    >
      {videos.map((item: VideoProps, idx: number) => (
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
