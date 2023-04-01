import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos, alignItems, direction }) => {
  if (videos.length === 0) return <Loader alignItems={alignItems} />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
