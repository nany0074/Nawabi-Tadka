import { Box, Grid } from '@mui/material';
import React from 'react';
import menu from '../images/menu1.svg';
import menu1 from '../images/menu1.1.svg'
import MenuCards from '../components/menucards';

function MenuPost() {
  return (
    <>
    <Box sx={{textAlign:'center',color:'white',margin:'10px',padding:'10px',marginTop:'30px'}}>
      <h3 style={{fontFamily:"Great Vibes",color:'#ff9f0d'}}>Chase & pick</h3>
      <h1><span style={{color:'#ff9f0d'}}>Fr</span>om Our Menu</h1>
    </Box>
    <Box>
        <ul style={{
          width:'1056px',
          height:'28px',
          color:'white',
          listStyle:'none',
          textDecoration:'none',
          display:'flex',
          
        }}>
          <li style={{margin:'15px',padding:'20px',color:'#ff9f0d'}}>Breakfast</li>
          <li style={{margin:'15px',padding:'20px'}}>Lunch</li>
          <li style={{margin:'15px',padding:'20px'}}>Dinner</li>
          <li style={{margin:'15px',padding:'20px'}}>Dessert</li>
          <li style={{margin:'15px',padding:'20px'}}>Drink</li>
          <li style={{margin:'15px',padding:'20px'}}>Snack</li>
          <li style={{margin:'15px',padding:'20px'}}>Suops</li>
        </ul>
    </Box>

    <Grid container spacing={3} style={{margin:'20px'}}>
        <Grid item > <img src={menu1} width={366} height={362} style={{}}/></Grid>
        <Grid item>
          <MenuCards/>
          <MenuCards/>
          <MenuCards/>
          <MenuCards/>
        </Grid>
        <Grid item>
        <MenuCards/>
          <MenuCards/>
          <MenuCards/>
          <MenuCards/>

        </Grid>
    </Grid>
    </>
  )
}

export default MenuPost;