import { Box, Grid } from '@mui/material';
import React from 'react';
import clients from '../images/clients.svg';
import client1 from  '../images/client1.svg';
import client2 from '../images/client2.svg';
import client3 from '../images/client3.svg';
import client4 from '../images/client4.svg';
function ClientPost() {
  return (
    <Box sx={{backgroundImage:`url(${clients})`,width:'1340px',marginTop:'100px',height:'469px',backgroundRepeat:'no-repeat',textAlign:'center',opacity:'0.5'}}>
      <Grid container spacing={4}>
        <Grid item md={3}>
          <Box sx={{color:'white',margin:'100px',textAlign:'center'}}>
            <img src={client1} style={{}}/>
            <h5 style={{margin:'10px',}}>Professional Chefs</h5>
            <h2>420</h2>
          </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{color:'white',margin:'100px',textAlign:'center'}}>
            <img src={client2}/>
            <h5 style={{margin:'10px',}}>Items Of Food</h5>
            <h2>320</h2> 
          </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{color:'white',margin:'100px',textAlign:'center'}}>
            <img src={client3}/>
            <h5 style={{margin:'10px',}}>Years Of Experience</h5>
            <h2>30+</h2>
          </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{color:'white',margin:'100px',textAlign:'center',marginRight:'150px'}}>
            <img src={client4}/>
            <h5 style={{margin:'10px',}}>Happy Customers</h5>
            <h2>220</h2>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ClientPost;