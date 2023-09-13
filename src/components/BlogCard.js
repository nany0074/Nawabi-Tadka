import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react'
import blog1 from '../images/blog1.svg';
import blog2 from '../images/blog2.svg';
import blog3 from '../images/blog3.svg';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function BlogCard() {
  return (
    
    <Card sx={{background:'black',maxWidth:'400px',maxHeight:'569px',marginTop:'10px'}}>
      <img src={blog1} width={423} height={349}/>

    <CardContent sx={{color:'white'}}>
      <p style={{color:'#ff9f0d',letterSpacing:'1px',fontWeight:'400',lineHeight:'24px'}} >10 February 2022</p>
      <Typography variant="body2">
      <h3>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Alias, minus! Lorem ipsum
         dolor sit amet.</h3>
         </Typography>
    

<Box sx={{display:'flex',
alignItems:'center',
justifyContent:'center',
color:'white',
float:'left',
marginTop:'10px'
}}>
  <Box sx={{lineHeight:'24px',fontWeight:'400'}}><h6>Learn More</h6></Box>

<Box sx={{marginLeft:'250px',padding:'5px'}}>
<ThumbUpOffAltIcon/>
<SmsOutlinedIcon sx={{color:'#ff9f0d'}}/>
<ShareOutlinedIcon/>
</Box>
</Box>
</CardContent>
    </Card>
    
  )
}

export default BlogCard;