import { Box, Divider, Grid } from '@mui/material';
import React from 'react';
import image from '../images/Image.svg';

function MainPage() {
  return (
    <Box sx={{marginBottom:'50px'}}>
     <Grid container >
      <Grid item md={4}>
       
        <Box sx={{color:'white',marginLeft:'50px',marginTop:'100px',}}>
            <Box sx={{borderLeft:'1px solid grey',paddingLeft:'40px'}}>
            <h1 style={{color:'#ff9f0d',fontFamily:'Great Vibes',marginBottom:'20px',}}>Its Quick & Amusing!</h1>
<h1><span style={{color:'#ff9f0d'}}>Th</span>e Art of speed</h1>
<h1>food Quality</h1>
            </Box>

<Box sx={{paddingLeft:'40px',borderLeft:'1px solid grey'}}>
<p style={{marginTop:'20px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quasi eligendi molestias facere porro tur!</p>
        
        <button style={{marginTop:'30px',borderRadius:'30px',width:'190px',height:'60px',background:'#ff9f0d',color:'white'}}>See Menu</button>
</Box>

        </Box>
      </Grid>
      <Grid item md={8}> <img src={image} style={{}}/></Grid>
     </Grid>
    </Box>
  )
}

export default MainPage;