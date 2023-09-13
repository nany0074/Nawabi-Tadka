import React from "react";
import Carousel from "react-material-ui-carousel";
import Contact from "../pages/Contact";
import { Box } from "@mui/material";
import mapple from "../images/mapple.svg";
function carousel() {
  return (
    <Box sx={{}}>
      <Box sx={{ padding: "20px", margin: "5px" }}>
        <h2
          style={{
            color: "#ff9f0d",
            width: "128px",
            height: "40px",
            fontFamily: "Great Vibes",
          }}
        >
          Testimonials
        </h2>
        <h1 style={{ color: "white", width: "629px", height: "56px" }}>
          What our client are saying
        </h1>
      </Box>

      <Box>
        <Box sx={{ zIndex: "-1", position: "relative" }}>
          <Carousel style={{ color: "#ff9f0d" }}>
            <Contact />
            <Contact />
            <Contact />
          </Carousel>
        </Box>

        <img
          src={mapple}
          style={{
            float: "right",
            position: "absolute",

            zIndex: "1",
          }}
        />
      </Box>
    </Box>
  );
}

export default carousel;
