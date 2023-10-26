"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';

const BannerCard = () => {
    return ( 
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image 
          src="/1.png"
          height={0}
          width={0}
          className='h-auto w-full'
          sizes='100vw'
          alt='Periféricos a partir de R$ 99,00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/2.png"
            height={0}
            width={0}
            className='h-auto w-full'
            sizes='100vw'
            alt='Periféricos a partir de R$ 99,00'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/3.png"
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
 
export default BannerCard;