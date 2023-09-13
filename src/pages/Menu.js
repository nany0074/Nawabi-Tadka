import { Box, Grid } from '@mui/material'
import React from 'react';
import about1 from '../images/about1.svg';
import about2 from '../images/about2.svg';
import about3 from '../images/about3.svg';

function AboutPost() {
  return (
   <>
   <Grid container spacing={10}>
    <Grid item md={6}>
      <Box sx={{color:'white'}}>
        <h1 style={{fontFamily:'Great Vibes',color:'#ff9f0d',marginBottom:'20px'}}>about us</h1>
        <h1><span style={{color:'#ff9f0d'}}>We</span> Create the best </h1>
        <h1>foody product</h1>
        <p style={{marginTop:'30px',marginBottom:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Rem ipsa quae impedit. Ex rerum quos doloribus in. Delectus,
          alias voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit aut maiores voluptatum odit. Aspernatur placeat accusamus repellat? Nihil vitae, impedit similique veniam aliquid excepturi exercitationem, accusantium sunt facere eius sapiente totam blanditiis temporibus ex tenetur a. Fugiat earum consequuntur minus sequi, incidunt 
           minima assumenda unde sint quae deserunt voluptatibus!</p>
        <ul style={{padding:'20px',}}>
          <li style={{padding:'10px'}}>Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur </li>
          <li style={{padding:'10px'}}>Lorem ipsum dolor sit ametfhffm ipsum dolor sit amet consectetur adipisicing elit. </li>
          <li style={{padding:'10px'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem, ipsum.ljjghh</li>
        </ul>

        <button style={{background:'#ff9f0d',padding:'20px',borderRadius:'30px',color:'white',width:'190px',height:'60px'}}>Read More</button>
      </Box>
    </Grid>

    <Grid item spacing={2} md={6} >
      <Grid item  md={12}><img src={about1}/></Grid>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',}}>
      <Grid item  md={6}><img src={about2}/></Grid>
      <Grid item md={6}><img src={about3}/></Grid>
      </Box>
      
    </Grid>
   </Grid>
   </>
  )
}

export default AboutPost