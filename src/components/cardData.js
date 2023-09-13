import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Ellipse from "../images/Ellipse.svg";
import { alignProperty } from "@mui/material/styles/cssUtils";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import zIndex from "@mui/material/styles/zIndex";

function cardData() {
  return (
    <Box Width="300px" sx={{ background: "transparent", padding: "50px",display:'absolute' }}>
       {/* <img src={Ellipse} alt='logo' 
      style={{
            width:'133.97px',
            height:'133.97px',
            position:'relative',
            borderRadius:'50%',
            zIndex:'0'
            }}/> */}

      <Card
        sx={{
          width: "868.47px",
          height: "450.89px",
          margin:'auto !important',
          textAlign: "center",
          alignSelf:'center',
          alignContent: "center !important",
        }}
      >
       <img src={Ellipse} alt='logo' 
      style={{
            width:'133.97px',
            height:'133.97px',
            position:'relative',
            borderRadius:'50%',
            zIndex:'6',
            marginTop:'-20px'
            }}/>

        <Box sx={{ textAlign: "center", }}>
          {/* <CardMedia
            sx={{
              height: "132.92px",
              width: "133.97px",
              background: "red",
              borderRadius: "50%",
              margin: 0,
              display: "relative",
              alignContent: "center",
            }}
            image="../images/Ellipse.svg"
            title="green iguana"
          /> */}
          
     
          <FormatQuoteOutlinedIcon
            sx={{
              fontWeight:'20 !important',
              color: "#ff9f0d",
              width: "47px",
              height: "47px",
              textAlign: "center",
              margin: "25px",
            }}
          />
        </Box>
        <CardContent>
          <Typography
            variant="body2"
            color="black"
            align="center"
            margin="25px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </Typography>

          <Box
            sx={{
              margin: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StarOutlinedIcon sx={{ color: "#ff9f0d" }} />
            <StarOutlinedIcon sx={{ color: "#ff9f0d" }} />
            <StarOutlinedIcon sx={{ color: "#ff9f0d" }} />
            <StarOutlinedIcon sx={{ color: "#ff9f0d" }} />
            <StarOutlinedIcon sx={{ color: "grey" }} />
          </Box>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "700", textAlign: "center", margin: "25px" }}
          >
            Alamin Hasan
          </Typography>

          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{ color: "grey", textAlign: "center" }}
          >
            Food Specialist
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default cardData;
