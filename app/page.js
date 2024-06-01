import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{ backgroundImage: "url(main-bg.webp)" }}>
        <div className='text-center md:pr-0 md:text-left px-[1rem] lg:pl-20 pb-[70px] md:pb-20 flex flex-col gap-1 sm:gap-5 z-[10] md:max-w-[60%] lg:max-w-[750px]'>
          <h1 className='text-[20px] sm:text-[50px] text-white font-semibold'>
            Make anything possible with {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
              Web Development
            </span>
          </h1>

          <p className='text-gray-200 block'>
            I'm a dedicated web developer with a passion for transforming ideas into reality using the latest technologies. I specialize in creating beautiful, functional web applications and have expertise in both front-end and back-end development. My goal is to deliver seamless and engaging user experiences.
          </p>

          {/* desktop menu */}
          <div className='flex-col md:flex-row hidden md:flex gap-5'>
            <Link href="/my-skills" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 lg:text-lg text-white max-w-[200px]' >
              Learn more
            </Link>

            <Link href="/my-projects" className='rounded-[20px] group relative bg-transparent px-5 border border-white py-3 lg:text-lg text-white max-w-[200px]' >
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
              My Projects
            </Link>

            <Link href="/contact-me" className='rounded-[20px] group relative bg-transparent px-5 border border-white py-3 lg:text-lg text-white max-w-[200px]' >
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
              Contact me
            </Link>
          </div>

        </div>
      </div>

      {/* mobile menu */}
      <div className='absolute flex bottom-20 z-[20] right-5 flex-col md:hidden gap-2 sm:gap-5'>
        <Link href="/my-skills" className='rounded-[20px] bg-blue-500 px-2 sm:px-5 py-1 sm:py-3 text-md text-center sm:text-lg text-white max-w-[200px]' >
          Learn more
        </Link>

        <Link href="/my-projects" className='rounded-[20px] bg-transparent border border-white px-2 sm:px-5 py-1 sm:py-3 text-md text-center sm:text-lg text-white max-w-[200px]' >
          My Projects
        </Link>

        <Link href="/contact-me" className='rounded-[20px] bg-transparent border border-white px-2 sm:px-5 py-1 sm:py-3 text-md text-center sm:text-lg text-white max-w-[200px]' >
          Contact me
        </Link>
      </div>

      <div className='absolute bottom-0 right-0 z-[10]'>
        <Image src="/horse.png" alt="horse" height={300} width={300} className='hidden md:block absolute right-515 top-140' />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} className='hidden md:block mr-[-12rem] mb-[12rem]' />
      </div>

      <div className='absolute bottom-0 z-[5] w-full h-auto xl:-bottom-3'>
        <Image src="/trees.webg" alt="trees" width={200} height={200} />
      </div>
      <Image src="/stars.png" alt="stars"
        height={300} width={300} className='absolute top-10 left-0 z-[10]' />
    </main>
  )
}

export default Home