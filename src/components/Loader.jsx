import { Triangle } from "react-loader-spinner";
import { Box } from "@mui/material";

import React from "react";

const Loader = ({ alignItems }) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: alignItems,
        display: "flex",
        width: "100%",
      }}
      minHeight="90vh"
    >
      <Triangle color="white" />
      <br />
      <br />
    </Box>
  );
};

export default Loader;
