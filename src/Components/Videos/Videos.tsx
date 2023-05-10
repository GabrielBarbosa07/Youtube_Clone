import { Stack, Box } from "@mui/material";

import { Loader, VideoCard } from "../";
import { VideoProps } from "../../Utils/props";
import { NavBarContext } from "../../Contexts/NavBarContext";
import { useContext } from "react";

const Videos = ({
  direction,
  justifyContent,
}: {
  direction?: string | any;
  justifyContent?: "start" | "center";
}) => {
  const { videos } = useContext(NavBarContext);
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      sx={{
        width: "100%",
        marginLeft:"0 auto",
        flexWrap: "wrap",
        justifyContent,
        alignItems: "start",
        gap: 2,
      }}
    >
      {videos.map((item: VideoProps, idx: number) => (
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
