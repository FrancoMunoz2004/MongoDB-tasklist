import { Box } from "@chakra-ui/react";
import React from "react";
import "./spinner.css";
const Spinner = () => {
  return (
    <Box height={"100%"} width={"100%"} display="flex" justifyContent={"center"} alignItems="center">
      <p className="lds-dual-ring"></p>
    </Box>
  );
};

export default Spinner;
