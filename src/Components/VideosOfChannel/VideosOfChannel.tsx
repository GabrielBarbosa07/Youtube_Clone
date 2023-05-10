import { Box } from "@mui/material";
import Videos from "../Videos/Videos";


const VideosOfChannel = ({ videos }: any) => {
  return (
    <Box> 
      <Videos justifyContent="center" videos={videos} />
    </Box>
  );
};

export default VideosOfChannel;
