import { Box, Grid } from "@mui/material";
import React from "react";
import choose1 from "../images/choose1.svg";
import choose2 from "../images/choose2.svg";
import choose3 from "../images/choose3.svg";
import choose4 from "../images/choose4.svg";
import choose5 from "../images/choose5.svg";
import choose6 from "../images/choose6.svg";
import choose7 from "../images/choose7.svg";
import choose8 from "../images/choose8.svg";
import choose9 from "../images/choose9.svg";

function ChoosePost() {
  return (
    <>
      <Box sx={{margin:'10px'}}>
        <Grid container spacing={8}>
          <Grid item md={6}>
            <Grid container md={12}>
              <Grid item md={7}>
                <img src={choose4} style={{maxWidth:'362px',maxHeight:'356px',borderRadius:'6px'}} />
              </Grid>
              <Grid item md={5}>
                <img src={choose5} style={{maxWidth:'281px',maxHeight:'231px',borderRadius:'6px'}} />
              </Grid>
            </Grid>
            <Grid container spacing={0} md={12}>
              <Grid item md={5}>
                <img src={choose6} style={{maxWidth:'244px',maxHeight:'306px',borderRadius:'6px'}} />
              </Grid>
              <Grid item md={4}>
                <img src={choose7} style={{maxWidth:'221px',maxHeight:'226px',borderRadius:'6px',marginLeft:'-14px'}} />
              </Grid>
              <Grid item spacing={9} md={3}>
                <img src={choose8} style={{maxWidth:'161px',maxHeight:'168px',borderRadius:'6px'}} />
                <img src={choose9} style={{maxWidth:'161px',maxHeight:'166px',borderRadius:'6px'}} />

              </Grid>
            </Grid>
            
          </Grid>

          <Grid item md={6}>
            <Box sx={{ color: "white" }}>
              <h1
                style={{
                  color: "#ff9f0d",
                  fontFamily: "Great Vibes",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                Why Choose You
              </h1>
              <h1>
                <span style={{ color: "#ff9f0d" }}>Ex</span>tra ordinary taste
              </h1>
              <h1>And Experienced</h1>
              <p style={{ marginTop: "30px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique labore aspernatur quaerat, rerum mollitia iure
                consequuntur optio modi in cupiditate. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Iure, eius modi nesciunt
                doloribus accusamus quaerat expedita . Id? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Cupiditate voluptatum at
                dolores eligendi ipsum sed aliquid earum sunt officia
                laboriosam!
              </p>

              <Box
                sx={{
                  marginTop: "40px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{}}>
                  <img
                    src={choose1}
                    style={{
                      background: "#ff9f0d",
                      width: "102",
                      height: "100px",
                      marginRight: "20px",
                      borderRadius: "5px",
                    }}
                  />
                  <h4 style={{}}>Fast Food</h4>
                </Box>
                <Box sx={{}}>
                  <img
                    src={choose2}
                    style={{
                      background: "#ff9f0d",
                      width: "102",
                      height: "100px",
                      marginRight: "20px",
                      borderRadius: "5px",
                    }}
                  />
                  <h4 style={{}}>Lunch</h4>
                </Box>
                <Box>
                  <img
                    src={choose3}
                    style={{
                      background: "#ff9f0d",
                      width: "102",
                      height: "100px",
                      marginRight: "20px",
                      borderRadius: "5px",
                    }}
                  />
                  <h4 style={{}}>Dinner</h4>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                background: "white",
                borderRadius: "5px",
                borderLeft: " 15px solid #ff9f0d",
                width: "374px",
                height: "93px",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                marginTop: "40px",
              }}
            >
              <h1 style={{ margin: "40px", color: "#ff9f0d" }}>30+</h1>
              <Box>
                <h6>Years of</h6>
                <h3>Experienced</h3>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ChoosePost;
