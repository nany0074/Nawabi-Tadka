import { Box, Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'
import chef from '../images/chef1.svg'

function chefData() {
  return (
    <>
<Box sx={{backgroundImage:`url(${chef})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    width:'100%',
    height:'350px',
    position: 'relative',
    flexDirection:'column',
    display:'flex'
    }}>

{/* <img src={chef} style={{zIndex:'-1',position:'absolute'}}/> */}

<Box sx={{
        color:'black',
        background:'white !important',
        width:'181px',
        height:'67px',
        zIndex:'1',
        position:'absolute',
        left:'0 !important',
        bottom:'0 !important',
        padding:'20px'}}>
            <h4>D.Estwood</h4>
            <h6 style={{color:'grey'}}>Chief Chef</h6>
</Box>
</Box>
    
    </>
  )
}

export default chefData;