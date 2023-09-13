import { Box, Grid } from "@mui/material";
import React from "react";
import about1 from "../images/about1.svg";
import about2 from "../images/about2.svg";
import about3 from "../images/about3.svg";
import DoneSharpIcon from '@mui/icons-material/DoneSharp';

function AboutPost() {
  return (
    <Box sx={{ padding: "10px" }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box sx={{ color: "white", paddingLeft: "10px" }}>
            <h1
              style={{
                fontFamily: "Great Vibes",
                color: "#ff9f0d",
                marginBottom: "20px",
              }}
            >
              about us
            </h1>
            <h1>
              <span style={{ color: "#ff9f0d" }}>We</span> Create the best{" "}
            </h1>
            <h1>foody product</h1>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa
              quae impedit. Ex rerum quos doloribus in. Delectus, Qui
              reprehenderit aut maiores voluptatum odit. Aspernatur placeat
              accusamus repellat? Nihil vitae, impedit similique veniam aliquid
              excepturi exercitationem, accusanti um sunt facere eius sapiente
              totam blanditiis temporibeserunt voluptatibus!
            </p>
            <Box sx={{ padding: "0px" }}>
              <Box style={{ padding: "10px",display:'flex',alignItems:'center',justifyContent:'left' }}>
                <DoneSharpIcon sx={{marginRight:'20px'}}/>
                Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet
                consectetur{" "}
              </Box>
              <Box style={{ padding: "10px" ,display:'flex',alignItems:'center',justifyContent:'left'}}>
                <DoneSharpIcon sx={{marginRight:'20px'}}/>
                Lorem ipsum sit ametfhffm ipsum dolor sit amet consectetur
                adipisicing elit.{" "}
              </Box>
              <Box style={{ padding: "10px",display:'flex',alignItems:'center',justifyContent:'left' }}>
                <DoneSharpIcon sx={{marginRight:'20px'}}/>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem,
                ipsum.ljjghh
              </Box>
            </Box>

            <button
              style={{
                background: "#ff9f0d",
                padding: "20px",
                borderRadius: "30px",
                color: "white",
                width: "190px",
                height: "60px",
                marginTop:'20px'
              }}
            >
              Read More
            </button>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <img src={about1} />
            </Grid>

            <Grid item md={6}>
              <img src={about2} />
            </Grid>
            <Grid item md={6}>
              <img src={about3} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutPost;
