import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { VideoProps } from "../../Utils/props";

const VideoCard = ({ video }: { video: VideoProps }) => (
  <Card
    sx={{
      minWidth: {sm:"300px",md:"320px"},
      height: "auto",
      boxShadow: "none",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    }}
  >
    <Link to={`/video/${video?.id?.videoId}`}>
      <CardMedia
        component="img"
        image={video?.snippet?.thumbnails?.high?.url}
        sx={{
          width: "100%",
          height: 180,
        }}
      />
    </Link>
    <CardContent
      sx={{ backgroundColor: "#1E1E1E", width: "320px", height: "140px" }}
    >
      <Link to={`/video/${video?.id?.videoId}`}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            color: "#FFF",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          {video?.snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={`/channel/${video?.snippet?.channelId}`}>
        <Typography variant="subtitle2" color="gray">
          {video?.snippet?.channelTitle}
          <CheckCircleIcon
            sx={{
              fontSize: "12px",
              color: "gray",
              ml: "5px",
              whiteSpace: "nowrap",
            }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
