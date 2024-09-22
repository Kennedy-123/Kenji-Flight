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
                <Box><Link to={'/'}>Home</Link></Box>
                <Box><Link to={'#'}>Services</Link></Box>
                <Box><Link to={'/about'}>About</Link></Box>
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'justify'}}>
                <Typography variant='h5'>Resources</Typography>
                <Box><Link to={'/'}>Home</Link></Box>
                <Box><Link to={'#'}>Services</Link></Box>
                <Box><Link to={'/about'}>About</Link></Box>
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'justify'}}>
                <Typography variant='h5'>Contact</Typography>
                <Box><Email/><Link to={'#'}>info@gmail.com</Link></Box>
                <Box><PhoneAndroid/><Link to={'#'}>+1 222 212 3819</Link></Box>
                <Box><LocationOn/><Link to={'#'}> 43 Raymouth Rd. Baltemoer, London 3910</Link></Box>
              </Box>
          </Box>
  )
}

export default Footer
