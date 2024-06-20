import React, { useRef, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion" 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import assets from '../../assets/assets.js';
function Hero() {
  
  return (
     
    <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[85vh] lg:rounded-[40px] overflow-hidden"
      >
        <SwiperSlide className=' relative flex justify-center items-center'> <motion.h1  animate={{opacity:1}} transition={{ ease: "linear",duration: 1,}} className='signlogo font-extrabold text-[80px] text-[#000000b7] absolute bottom-10 left-14'>High-Top</motion.h1> <h1 className=' absolute top-0 right-7 snker text-[45px] text-[#000000b7]'>SNKER</h1> <img className=' w-full h-full rounded-md object-cover obj' src={assets.hero2}  alt="" /></SwiperSlide>
        <SwiperSlide className=' relative flex justify-center items-center'> <motion.h1  animate={{opacity:1}} transition={{ ease: "linear",duration: 1,}} className='signlogo font-extrabold text-[80px] text-[#000000b7] absolute bottom-10 left-14'>Sneakers</motion.h1> <h1 className=' absolute top-0 right-7 snker text-[45px] text-[#000000b7]'>SNKER</h1> <img className=' w-full h-full rounded-md object-cover object-center' src={assets.hero1} alt="" /></SwiperSlide>
        <SwiperSlide className=' relative flex justify-center items-center'> <motion.h1  animate={{opacity:1}} transition={{ ease: "linear",duration: 1,}} className='signlogo font-extrabold text-[80px] text-[#000000b7] absolute bottom-10 left-14'>Running Shoes</motion.h1> <h1 className=' absolute top-0 right-7 snker text-[45px] text-[#000000b7]'>SNKER</h1> <img className=' w-full h-full rounded-md object-cover object-center' src={assets.hero3} alt="" /></SwiperSlide>
        <SwiperSlide className=' relative flex justify-center items-center'> <motion.h1  animate={{opacity:1}} transition={{ ease: "linear",duration: 1,}} className='signlogo font-extrabold text-[80px] text-[#000000b7] absolute bottom-10 left-14'>Boots</motion.h1> <h1 className=' absolute top-0 right-7 snker text-[45px] text-[#000000b7]'>SNKER</h1> <img className=' w-full h-full rounded-md object-cover object-center' src={assets.hero4} alt="" /></SwiperSlide>
        <SwiperSlide className=' relative flex justify-center items-center'> <motion.h1  animate={{opacity:1}} transition={{ ease: "linear",duration: 1,}} className='signlogo font-extrabold text-[80px] text-[#e7e7e7b7] absolute bottom-10 left-14'>Nike High-top</motion.h1> <h1 className=' absolute top-0 right-7 snker text-[45px] text-[#e7e7e7b7]'>SNKER</h1> <img className=' w-full h-full rounded-md object-cover object-center' src={assets.hero5} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero