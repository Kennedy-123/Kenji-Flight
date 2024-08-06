import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pic from '../images/pexels-asadphoto-1268855.jpg';
import { Box } from '@mui/material';
import '@fontsource/open-sans';
import { ReactTyped } from 'react-typed';
import 'swiper/swiper-bundle.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';


export default function Home() {
  return (
    <Box>
      <Box sx={{ width: '100%', position: 'relative'}}>
        <CardMedia component="img" src={pic} sx={{ height: '95vh' }} />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '95vh',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            color={'white'}
            sx={{
              fontWeight: { sm: 50 },
              fontSize: { sm: 50, xs: 25 },
              fontFamily: 'open-sans',
            }}
            align="center"
          >
            Travel to the most beautiful places in the world,
            <Box>
              <span>Like </span>
              <ReactTyped
                strings={[
                  'Los Angeles in America',
                  'Toronto in Canada',
                  'London in United Kingdom',
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              ></ReactTyped>
            </Box>
          </Typography>
          <Button variant="contained">
            <Link>Contact Us</Link>
          </Button>
        </Box>
        <Carousel/>
        {/* section */}
        <Box className='text-white bg-blue-400 mt-14 mb-10 p-11'>
          <Typography variant="h3" align='center' sx={{ fontFamily: 'open-sans', fontSize: { xs: 25, md: 50 } }}>Plan your travel now and get in touch with us.</Typography>
          <Typography variant="h3" align='center' sx={{ fontFamily: 'open-sans', fontSize: { xs: 23, md: 30 } }}>Explore every destination</Typography>
          <Box align='center' sx={{marginTop: '12px'}}>
            <Button variant="contained" className='p-4 rounded-xl xs:w-60 xs:text-xs'>
              <Link>Search Flights Everywhere</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
