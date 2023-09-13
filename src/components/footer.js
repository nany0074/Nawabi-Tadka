import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import footer0 from "../images/footer0.svg";
import footer1 from "../images/footer1.svg";
import footer2 from "../images/footer2.svg";
import clock from "../images/Clock.svg";
import { Box, Divider, Grid } from "@mui/material";

function footer() {
  return (
    <div className="footer-body">
      <Grid
        container
        sx={{
          px:25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item md={6} xs={12} sx={{ color: "white" }}>
          <h3>
            {" "}
            <span style={{ color: "#FF9F0D" }}>St</span>
            ill You Need Our Support?{" "}
          </h3>

          <p style={{ color: "white" }}>
            Dont wait make a smart & logical quote.Its pretty easy.
          </p>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display:'flex',
            justifyContent:'right',
            // width: "459px",
            // height: "56px",
            // padding: "1px",
            // px:10,
          }}
        >
          <input
            type="text"
            placeholder="Enter Your Email"
            style={{
              color: "white !important",
              padding: "10px",
              borderRadius: "4px",
              backgroundColor: "#FF9F0D",
            }}
          />
          <button
            style={{
              color: "#FF9F0D",
              padding: "10px",
              borderRadius: "4px",
              backgroundColor: "#FFFFFF",
            }}
          >
            Subscribe
          </button>
        </Grid>
      </Grid>
      <Divider
        sx={{
          width: "70%",
          justifySelf: "center",
          marginTop: "50px",
          bottom: "52px",
          my: 5,
          bgcolor: "#FF9F0D",
        }}
      />

      <footer>
        <div className="container">
          <div className="aboutUs">
            <h2>About Us</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus molestiae laborum unde porro{" "}
            </p>

            <div className="aboutPart">
              <div className="clock">
                <img
                  src={clock}
                  width={78}
                  height={72}
                  style={{ background: "#FF9F0D" }}
                />
              </div>
              <div className="content">
                <h4>Opening Hours</h4>
                <p>Mon - Sat(8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div className="usefulLinks">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>

          <div className="usefulLinks">
            <h2>Help?</h2>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Reporting</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Support Policy</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>

          <div className="recentPost">
            <h2>Recent Post</h2>
            <ul className="info">
              <li style={{ display: "flex" }}>
                <span>
                  <img src={footer0} width={59} height={48} />
                </span>
                <div>
                  <h5>20 Feb 2022</h5>
                  <p>Keep your Business</p>
                </div>
              </li>

              <li style={{ display: "flex" }}>
                <span>
                  <img src={footer1} width={59} height={48} />
                </span>
                <div className="20feb">
                  <h5>20 Feb 2022</h5>
                  <p>Keep your Business</p>
                </div>
              </li>

              <li style={{ display: "flex" }}>
                <span>
                  <img src={footer2} width={59} height={48} />
                </span>
                <div className="20feb">
                  <h5>20 Feb 2022</h5>
                  <p>Keep your Business</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <Box
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#FF9F0D",
          px: 15,
          py: 1,
        }}
      >
        <p>copyright @ by quantmHill.All Rights Reserved.</p>

        <Box
          sx={{
            // backgroundColor: '#fff',
            display: "flex",
            gridTemplateColumns: (5, 60),
            alignItems: "center",
            justifyContent: "space-between",
            px: 5,
            mx: 5,
            padding: "2px",
          }}
        >
          <Box
            sx={{
              px: 1,
              background: "white",
              padding: "3px",
              borderRadius: "4px",
              margin: "10px",
            }}
          >
            <a href="#">
              <FacebookIcon
                sx={{
                  color: "black !important",
                  fontSize: "20px",
                  justifyContent: "center",
                }}
              />
            </a>
          </Box>
          <Box
            sx={{
              px: 1,
              background: "white",
              padding: "3px",
              borderRadius: "4px",
              margin: "10px",
            }}
          >
            <a href="#">
              <TwitterIcon sx={{ color: "black", fontSize: "20px" }} />
            </a>
          </Box>
          <Box
            sx={{
              px: 1,
              background: "white",
              padding: "3px",
              borderRadius: "4px",
              margin: "10px",
            }}
          >
            <a href="#">
              <InstagramIcon sx={{ color: "black", fontSize: "20px" }} />
            </a>
          </Box>
          <Box
            sx={{
              px: 1,
              background: "white",
              padding: "3px",
              borderRadius: "4px",
              margin: "10px",
            }}
          >
            <a href="#">
              <YouTubeIcon sx={{ color: "black", fontSize: "20px" }} />
            </a>
          </Box>
          <Box
            sx={{
              px: 1,
              background: "white",
              padding: "3px",
              borderRadius: "4px",
              margin: "10px",
            }}
          >
            <a href="#">
              <PinterestIcon sx={{ color: "black", fontSize: "20px" }} />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default footer;
