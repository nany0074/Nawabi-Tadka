import { Box, Grid } from "@mui/material";
import React from "react";
import ChefData from "../components/chefData";
import chef2 from "../images/chef2.svg";
function chef() {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Box sx={{ color: "white", textAlign: "center", margin: "30px" }}>
        <h3 style={{ color: "#ff9f0d", fontFamily: "Great Vibes" }}>Chefs</h3>
        <h1>
          {" "}
          <span style={{ color: "#ff9f0d" }}>Me</span>et Our Chef
        </h1>
      </Box>
      {/* <Box sx={{ zIndex: "-1", position: "absolute" }}>
        <img src={chef2} className="chef2" width={402} height={531} />
      </Box> */}

      <Grid
        container
        spacing={2}
        sx={{  }}
      >
        <Grid item md={3}>
          <ChefData />
        </Grid>
        <Grid item md={3}>
          {" "}
          <ChefData style={{}} />
        </Grid>
        <Grid item md={3}>
          {" "}
          <ChefData />
        </Grid>
        <Grid item md={3}>
          {" "}
          <ChefData />
        </Grid>
      </Grid>

      <button
        style={{
          top: "15px",
          marginLeft: "45%",
          color: "#ff9f0d",
          borderRadius: "25px",
          position: "relative",
          background: "black",
          width: "155px",
          height: "50px",
          border: "1px solid #ff9f0d",
        }}
      >
        See More
      </button>
    </Box>
  );
}

export default chef;
