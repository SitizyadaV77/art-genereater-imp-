import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  // const { data } = useGetUserQuery(userId);
  const data = {
    id: 1,
    name: "John Doe",
  };
  return (
    <Box display={isNonMobile ? "flex" : "block" } width="100%" height="100%">
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
