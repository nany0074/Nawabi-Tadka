import { Box, Grid } from '@mui/material'
import React from 'react'
import BlogCard from '../components/BlogCard';
function BlogPost() {
  return (
    <>
    <Box sx={{color:'white',textAlign:'center',margin:'10px',padding:'10px'}}>
      <h3 style={{fontFamily:'Great Vibes',color:'#ff9f0d'}}>Blog Post</h3>
      <h1><span style={{color:'#ff9f0d'}}>La</span>test News & Blog</h1>
    </Box>
    <Grid container spacing={4} sx={{margin:'0px'}} >
      <Grid item >
      <BlogCard sx={{}}/>
      </Grid>
      <Grid item>
      <BlogCard sx={{}}/>
      </Grid>
      <Grid item>
      <BlogCard sx={{}}/>
      </Grid>
      
    </Grid>
    </>
  )
}

export default BlogPost