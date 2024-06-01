"use client";
import React, { useState } from 'react';
import { Projects } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [flipStates, setFlipStates] = useState(Array(Projects.length).fill(false));

  const handleMouseEnter = (index) => {
    if (!isTouchDevice()) {
      const newFlipStates = [...flipStates];
      newFlipStates[index] = true;
      setFlipStates(newFlipStates);
    }
  };

  const handleMouseLeave = (index) => {
    if (!isTouchDevice()) {
      const newFlipStates = [...flipStates];
      newFlipStates[index] = false;
      setFlipStates(newFlipStates);
    }
  };

  const handleTouchStart = (index) => {
    const newFlipStates = [...flipStates];
    newFlipStates[index] = !newFlipStates[index];
    setFlipStates(newFlipStates);
  };

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className='flex justify-center items-center text-white min-h-screen bg-cover bg-center'
    >
      <div className='w-full flex justify-center items-center gap-4 flex-wrap p-4'>
        {Projects.map((project, index) => (
          <div
            key={index}
            className='w-[90%] sm:w-[80%] md:w-[300px] lg:w-[400px] h-[300px] md:h-[400px] text-center flex justify-center flex-col border border-purple-500 bg-black cursor-pointer rounded-3xl'
            
          >
            {flipStates[index] ? (
              <div className='text-[14px] md:text-[18px] flex flex-col items-center justify-center gap-5 bg-purple-400 h-full rounded-3xl' onMouseLeave={() => handleMouseLeave(index)}
              onTouchStart={() => handleTouchStart(index)}>
                <p>{project.text}</p>
              </div>
            ) : (
              <div>
                <h1 className='text-[18px] md:text-[22px] py-3 font-semibold text-white'>
                  {project.title}
                </h1>
                <Image onMouseEnter={() => handleMouseEnter(index)}
            onTouchStart={() => handleTouchStart(index)}
                  src={project.src}
                  width={300}
                  height={400}
                  className='w-[90%] sm:w-[80%] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] pb-2 rounded-3xl mx-auto'
                />
                <Link href={project.link} className='text-blue-500 font-semibold text-[14px]'>
                  Live View
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
