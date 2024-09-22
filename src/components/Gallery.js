import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import swiperImage from "../Data/SwiperImages";
import { Typography } from '@mui/material';

function Gallery() {
  return (
    <div className="grid lg:grid-cols-2 lg:place-items-center xs:place-items-center xs:grid-cols-1 gap-x-10 p-24 ">
        <div className="xs:w-[70vw] lg:w-[30vw]">
          <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
          }}
          >
            {swiperImage.map((image, i) => (
            <SwiperSlide key={i} className="w-[50vw]">
             <img src={image.image} alt="" className="lg:w-[30vw] xs:w-[100vw] h-[45vh]" />
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="lg:w-[50vw] xs:w-[70vw]">
          <Typography
            variant="h3"
            sx={{
              fontFamily: "open-sans",
            }}
            className="underline text-blue-400 xs:text-4xl font-bold"
          >
            Gallery
          </Typography>
          <Typography className="lg:w-[40vw] xs:w-[70vw]">
          Get inspired by the beauty of travel! Explore our gallery, featuring breathtaking destinations, stunning landscapes, and unforgettable moments captured by travelers around the world. Let these images fuel your wanderlust and help you discover your next dream destination with Kenji Flight.
          </Typography>
        </div>
      </div>
  )
}

export default Gallery
