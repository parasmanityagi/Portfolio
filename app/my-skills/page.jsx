"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import { Tooltip } from '@mui/material'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'

const Page = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div style={{ backgroundImage: "url(bg-2.jpg)" }}
      className='h-screen w-screen flex items-center justify-center bg-cover bg-center'>
      <div className='flex  flex-col gap-10 max-w-[100%] text-center items-center'>
        <div className='flex flex-col items-center gap-1 md:gap-4'>
          <h1 className='font-semibold text-white text-[25px] md:text-[50px]'>Skills
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
              {" "}
              &
              {" "}
            </span>
            Technologies
          </h1>

          <p className='text-gray-400 text-[20px]'>
            Using the Latest Tech to Shape the Future
          </p>
        </div>

        <Swiper
          slidesPerView={viewportWidth > 680 ? 5 : 3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className='max-w-[95vw]'
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Tooltip title={skill.name} arrow>
                <Image src={skill.Image}
                  alt={skill.name}
                  width={viewportWidth > 680 ? skill.width : "60"}
                  height={skill.height} />
              </Tooltip>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={viewportWidth > 680 ? 5 : 3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false
          }}
          speed={5000}
          modules={[Autoplay]}
          className='max-w-[95vw]'
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Tooltip title={skill.name} arrow>
                <Image src={skill.Image}
                  alt={skill.name}
                  width={viewportWidth > 680 ? skill.width : "60"}
                  height={skill.height} />
              </Tooltip>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Page