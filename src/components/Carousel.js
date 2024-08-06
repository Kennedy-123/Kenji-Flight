import { Box, Container, Typography } from '@mui/material'
import swiperImage from '../Data/SwiperImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import React from 'react'

function Carousel() {
  return (
    <Box>
        <Box align="center" className="mt-14 mb-10 bg-blue-400">
          <Typography
            variant="h3"
            color={'white'}
            sx={{ fontFamily: 'open-sans', fontSize: { xs: 35, md: 50 } }}
          >
            Popular Destination
          </Typography>
        </Box>
        <Container>
          <Swiper
            spaceBetween={50}
            modules={[Autoplay]}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {swiperImage.map((img, i) => {
              const { city, image, country } = img;
              return (
                <SwiperSlide key={i}>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      src={image}
                      sx={{ height: '24rem', width: '100%' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '24rem',
                        width: '100%',
                      }}
                    >
                      <Typography
                        variant="h4"
                        color={'white'}
                        sx={{
                          fontWeight: { sm: 50 },
                          fontSize: { sm: 50 },
                          fontFamily: 'open-sans',
                        }}
                        align="center"
                      >
                        {city}
                        <span className="block">
                          <Typography variant="subtitle1">{country}</Typography>
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
    </Box>
  )
}

export default Carousel
