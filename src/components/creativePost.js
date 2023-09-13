import { Box } from '@mui/material';
import React from 'react'
import creative from '../images/creative.svg';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

function CreativePost() {
  return (
    <Box sx={{backgroundImage:`url(${creative})`,
    width:'1340px',
    height:'558px',
    marginTop:'50px'
    }}>

    <Box sx={{color:'white',
    textAlign:'right',
    padding:'20px'
    }}>
<h1 style={{fontFamily:'Great Vibes',color:'#ff9f0d',margin:'20px',letterSpacing:'2px'}}>Restaurant Active Process</h1>
      <Box sx={{margin:'20px'}}>
      <h1><span style={{color:'#ff9f0d',}}>We</span> Document Every Food</h1>
       <h1 style={{}}> Bean Process until it is saved</h1>
      
      </Box>
      
      <Box sx={{margin:'20px'}}>
      <p style={{textAlign:'right !important'}}>Lorem, ipsum dolor sit amet
       consectetur adipisicing elit. Provident quibusdam cumque a!</p>
       <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      </Box>
      
      <Box sx={{margin:'0px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    float:'right'
    }}>
        <button style={{border:'1px solid #ff9f0d',
        width:'190px',
        height:'60px', 
        borderRadius:'30px',
        background:'transparent',
        color:'white',
       
        }}>Read More</button>

        <Box sx={{display:'flex',
        alignItems:'center',
        justifyContent:'center',padding:'20px'}}>
        <PlayArrowOutlinedIcon sx={{borderRadius:'50%',background:'#ff9f0d',width:'60px',height:'60px',margin:'10px'}}/>
        <h4>Play Vedio</h4>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default CreativePost;