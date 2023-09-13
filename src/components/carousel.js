import React from 'react'
import Carousel from 'react-material-ui-carousel';
import CardData from './cardData';
import { Box } from '@mui/material';
import mapple from '../images/mapple.svg';
function carousel() {
  return (
  <Box sx={{marginLeft:'30px',padding:'10px',marginTop:'100px'}}>
  <Box sx={{}}>
    <h2 style={{color:'#ff9f0d', width:'128px', height:'40px'}}>about us</h2>
      <h1 style={{color:'white',width:'629px' , height:'56px'}}>What our client are saying</h1>
  </Box>
  
    <Carousel>
      <CardData/>
      <CardData/>
      <CardData/>
      <CardData/>
    </Carousel>
{/* <img src={mapple} style={{
background:'white',
float:'right',
position:'absolute',


}}/> */}


  </Box>
  )
}

export default carousel;