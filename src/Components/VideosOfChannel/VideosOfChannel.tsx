import { VideoProps } from "../Feed/Feed";
import VideoCard from "../VideoCard/VideoCard";

const VideosOfChannel = ({ videos }: any) => {
  console.log("videos", videos);
  return (
    <>
    { videos?.map((video:VideoProps) => {
      <VideoCard  video={video} />
    }) }
  
    </>
  );
};

export default VideosOfChannel;
