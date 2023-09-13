import { Box, Grid } from '@mui/material'
import React from 'react'
import menu2 from '../images/menuc1.svg'

function MenuCards() {
  return (
    <Box sx={{width:'376px',height:'79px' ,margin:'20px'}}>
     <Grid container>
      <Grid item><img src={menu2} width={80} height={79} style={{}}/></Grid>
      <Grid item>
        <Box sx={{color:'white',padding:'5px',margin:'0px'}}>
        <h3 style={{margin:'2px'}}>Lettuce Leaf</h3>
        <h6 style={{margin:'2px',fontWeight:'400'}}>Lorem ipsum dolor sit amet consectetur.akdldlood.</h6>
        <h3 style ={{color:'#ff9f0d',margin:'5px'}}>12.5$</h3>
        </Box>
      </Grid>
     </Grid>
      

    </Box>
  )
}

export default MenuCards;