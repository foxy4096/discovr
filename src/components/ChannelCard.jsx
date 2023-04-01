import { Link } from "react-router-dom";
import { Typography, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "400px" },
      height: "300px",
      margin: "auto",
      background: "#1e1e1e",
      marginTop: marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#FFF",
        }}
      >
        <CardMedia
          component="image"
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6" fontWeight="bold">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <div>
            <Typography color="gray">{channelDetail?.snippet?.customUrl}</Typography>
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          </div>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
