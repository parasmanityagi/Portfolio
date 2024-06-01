import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>

            <div className='flex flex-row gap-3 items-center'>
                <h1 className='text-white text-[25px] font-semibold'>Paras
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                        {" "}
                        Mani
                        {" "}
                    </span>
                </h1>
            </div>

            <div className="flex flex-row gap-5 mb-2">
                {Socials.map((social) => (
                    <Tooltip title={social.title} arrow>
                        <Link href={social.href}>
                            <Image
                                key={social.name} src={social.src} alt={social.name} width={28} height={28}
                            />
                        </Link>
                    </Tooltip>
                ))}
            </div>

        </div>
    )
}

export default Navbar