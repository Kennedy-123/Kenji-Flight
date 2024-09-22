import { Box, CardMedia, Typography } from '@mui/material'
import pic from '../images/john-mcarthur-PrdNTrIrG8w-unsplash (2).jpg'
import React, { useEffect } from 'react'
import SearchForm from './SearchForm'
import { useLocation } from 'react-router-dom';

function Flight() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the section if a hash is present in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <Box>
      <Box sx={{ position: 'relative', width: '100%', marginBottom: 10}}>
        <CardMedia component="img" src={pic} className="w-full h-[95vh] object-cover"/>
        <Box sx={{position: 'absolute', top: 0, left: 0, width: '100%',height: '95vh', backgroundColor: 'rgba(0, 0, 0, 0.6)',  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Typography variant="h4" color={'white'} sx={{fontWeight: {sm: 50}, fontSize: {sm: 70}, fontFamily:'open-sans'}} align='center'>
            Our Flight
            </Typography>
        </Box>
      </Box>
      {/* input section */}
      <div id="section1"><SearchForm/></div>
    </Box>
  )
}

export default Flight
