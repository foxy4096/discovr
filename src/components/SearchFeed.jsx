import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    setVideos([]);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      document.title = `${searchTerm} | Discovr`;
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results for:{" "}
          <span style={{ color: "#5561eb" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} alignItems="center" />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
