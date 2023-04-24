import { VideoProps } from "../Feed/Feed";
import VideoCard from "../VideoCard/VideoCard";
import Videos from "../Videos/Videos";

const VideosOfChannel = ({ videos }: any) => {
  console.log("videos", videos);
  return (
    <>
      <Videos videos={videos} />
    </>
  );
};

export default VideosOfChannel;
