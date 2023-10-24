"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';


import { EffectCreative } from 'swiper/modules';

const BannerCard = () => {
    return ( 
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
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
            className='h-auto w-full'
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
 
export default BannerCard;