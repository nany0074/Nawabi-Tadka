import { Box } from "@mui/material";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Carousel from "./carousel";
import Chef from "./chef";
import FoodPost from "./foodPost";
import ClientPost from "./clientPost";
import MenuPost from "./menuPost";
import CreativePost from "./creativePost";
import BlogPost from "./blogPost";
import AboutPost from "./aboutPost";
import MainPage from "./mainPage";
import ChoosePost from './choosePost';

function Layout({ children }) {
  return (
    <div>
      <Box sx={{ background: "black" }}>
        <Navbar />

        <Box sx={{ md: 10, xs: 3 }}>{children}</Box>

        <MainPage />
        <AboutPost />
        <FoodPost />
        <ChoosePost/>
        <ClientPost />
        <MenuPost />
        <Chef />
        <Carousel />
        <CreativePost />
        <BlogPost />

        <Box py={1} px={1}>
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default Layout;
