import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "98%", sm: "408px", md: "400px" },
        boxShadow: "none",
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={video?.snippet?.title}
          sx={{
            width: {
              xs: "500px",
              sm: "420px",
              md: "420px"
            },
            height: 180,
            backgroundSize: "stretch",
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "60px" }}>
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
        >
          <Typography varient="subtitle1" fontWeight="bold" color="#FFF" px={2}>
            {video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            video?.snippet?.channelId
              ? `/channel/${video?.snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            varient="subtitle3"
            color="gray"
            sx={{ wordBreak: "break-all" }}
            px={2}
          >
            {video?.snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
