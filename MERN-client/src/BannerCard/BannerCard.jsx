import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';
const BannerCard = () => {
  return (
    <>
       <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="banner"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default BannerCard
