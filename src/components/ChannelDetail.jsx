import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  useEffect(() => {
    document.title = `Discovr`;
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
      document.title = `${channelDetail?.snippet?.title} | Discovr`;
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setChannelVideos(data?.items);
      }
    );
  }, [channelDetail?.snippet?.title, id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(122deg, rgba(48,126,210,1) 0%, rgba(30,136,218,1) 35%, rgba(206,94,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        <Container maxWidth="xxl">
          <Box p={2}>
            <Box>
              <Videos videos={channelVideos} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
