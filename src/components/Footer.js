import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { LocationOn, PhoneAndroid, Email } from '@mui/icons-material';
import React from 'react'

function Footer() {
  return (
        <Box className="bg-gray-400 grid lg:grid-cols-4 md:grid-cols-2 md:gap-y-10 xs:gap-y-10 justify-center ContainerLinks lg:pl-9 sm:pl-9 pt-28">
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, width: 220}}>
                <Typography variant='h5'>About Kenji Flight</Typography>
                <Box><Typography variant='subtitle1'>At Kenji Flight, we believe in making travel easy, affordable, and accessible for everyone. Whether you're planning your next adventure or booking a last-minute getaway, we provide the best flight deals, personalized recommendations, and seamless booking experiences.</Typography></Box>
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'justify'}}>
                <Typography variant='h5'>Pages</Typography>
                <Box><Link to={'#'}>Home</Link></Box>
                <Box><Link to={'#'}>Services</Link></Box>
                <Box><Link to={'#'}>About</Link></Box>
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'justify'}}>
                <Typography variant='h5'>Resources</Typography>
                <Box><Link to={'#'}>Home</Link></Box>
                <Box><Link to={'#'}>Services</Link></Box>
                <Box><Link to={'#'}>About</Link></Box>
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'justify'}}>
                <Typography variant='h5'>Contact</Typography>
                <Box><Email/><Link to={'mailto:okolochidera223@gmail.com'}>okolochidera223@gmail.com</Link></Box>
                <Box><PhoneAndroid/><Link to={'tel:+2347086661378'}>+2347086661378</Link></Box>
                <Box><LocationOn/><Link to={'#'}> No 16th new world street ajao estate</Link></Box>
              </Box>
          </Box>
  )
}

export default Footer
