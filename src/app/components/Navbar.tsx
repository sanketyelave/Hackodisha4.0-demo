"use client"
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='backdrop-blur-sm p-6 px-8 flex justify-between items-center absolute top-0 w-[100%] max-h-[4rem]'>
    <div>
      <Image 
      src={"/HO3.svg"} 
      alt="logo"
      width={80}
      height={80}
      />
    </div>
    <div className='md:hidden'>
      <Image
      src={"/Ham.svg"}
      width={30}
      height={30}
      alt='ham'
      />
    </div>
    <div className='text-white hidden md:block md:text-xl lg:text-2xl'>
      <ul className='flex items-center gap-4 lg:gap-8'>
        <li className='hover:text-[#06EBE5] hover:underline'><a href='#'>Home</a></li>
        <li className='hover:text-[#06EBE5] hover:underline'><a href='#'>About Us</a></li>
        <li className='hover:text-[#06EBE5] hover:underline'><a href='#'>Contact Us</a></li>
        <li className='hover:text-[#06EBE5] hover:underline'><a href='#'>Events</a></li>
        <li className='border-2 p-2 rounded-2xl font-syoog text-xl hover:bg-[#096D6A] transition-colors ease-in'>
          <a href='https://discord.com/invite/ewun7cxkJh' target='_blank'>Join Discord</a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
