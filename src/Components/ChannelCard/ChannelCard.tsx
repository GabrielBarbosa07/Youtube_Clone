import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }: any) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <CardMedia
        image={channelDetail?.snippet?.thumbnails?.high?.url}
        sx={{
          borderRadius: "50%",
          height: "180px",
          width: "180px",
          mb: 2,
          border: "1px solid #e3e3e3",
          backgroundSize: "contain",
        }}
      />
      <Typography variant="h6">
        {channelDetail?.snippet?.title}{" "}
        <CheckCircleIcon sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
      </Typography>
      {channelDetail?.statistics?.subscriberCount && (
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 500,
            color: "gray",
            justifyContent: "flex-start",
          }}
        >
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
            "pt-br"
          )}{" "}
          Inscritos
        </Typography>
      )}
    </CardContent>
  </Box>
);

export default ChannelCard;
