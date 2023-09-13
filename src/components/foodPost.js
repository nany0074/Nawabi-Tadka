import { Box, Grid } from '@mui/material';
import React from 'react'
import food1 from '../images/food1.svg';
import food2 from '../images/food2.svg';
import food3 from '../images/food3.svg';
import food4 from '../images/food4.svg';

function FoodPost() {
  return (
    <>
    <Box sx={{color:'white',padding:'20px',textAlign:'center',margin:'20px'}}>
      <h1 style={{fontFamily:'Great Vibes',color:'#ff9f0d'}}>Food Category</h1>
      <h1><span style={{color:'#ff9f0d'}}>Ch</span>oose Food Item</h1>
    </Box>
    <Grid container spacing={0}mx={1}>
      <Grid item md={3} sx={{}} >
      <Box sx={{backgroundImage:`url(${food1})`,width:'100%',height:'100%', backgroundRepeat:'no-repeat',paddingTop:'100px'}}>
        <Box sx={{color:'#ff9f0d',padding:'10px',background:'white',borderRadius:'6px',width:'125px',height:'40px',marginLeft:'40px'}}>Save 30%</Box>
        <Box sx={{color:'white',padding:'10px',background:'#ff9f0d',borderRadius:'6px',width:'200px' ,height:'46px',marginTop:'10px'}}>Fast Food Dish</Box>
      </Box>
      
      </Grid>
      <Grid item md={3} ><img src={food2}/></Grid>
      <Grid item md={3}><img src={food3}/></Grid>
      <Grid item md={3}><img src={food4}/></Grid>
    </Grid>
    </>
  )
}

export default FoodPost;