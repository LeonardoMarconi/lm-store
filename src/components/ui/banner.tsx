"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return ( 
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image 
          src="/banner_home_01.png"
          height={0}
          width={0}
          className='h-auto w-full'
          sizes='100vw'
          alt='Periféricos a partir de R$ 99,00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/banner_home_02.png"
            height={0}
            width={0}
            className='h-full w-full'
            sizes='100vw'
            alt='Periféricos a partir de R$ 99,00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/banner_home_03.png"
            height={0}
            width={0}
            className='h-auto w-full'
            sizes='100vw'
            alt='Periféricos a partir de R$ 99,00'
          />
        </SwiperSlide>
      </Swiper>
     );
}
 
export default Banner;