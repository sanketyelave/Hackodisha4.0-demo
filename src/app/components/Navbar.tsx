"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
  };
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
    <button onClick={handleClick}
    className={`md:hidden transition-all duration-300 ease-out 
     ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
    >
      <Image
      src={"/Ham.svg"}
      width={40}
      height={30}
      alt='ham'
      />
    </button>
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
    <ul className={`flex flex-col w-[100%] py-4 pl-8 backdrop-blur-sm  gap-4 lg:gap-8 fixed top-16 transition-transform duration-500 ease-in-out text-white text-2xl left-0 ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}>
        <li className={`hover:text-[#06EBE5] transition-transform duration-500 ease-in-out delay-300 ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}><a href='#'>Home</a></li>
        <li className={`hover:text-[#06EBE5] transition-transform duration-500 ease-in-out delay-450 ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}><a href='#'>About Us</a></li>
        <li className={`hover:text-[#06EBE5] transition-transform duration-700 ease-in-out delay-450 ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}><a href='#'>Contact Us</a></li>
        <li className={`hover:text-[#06EBE5] transition-transform duration-700 ease-in-out delay-300 ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}><a href='#'>Events</a></li>
      </ul>
    </div>
  )
}

export default Navbar
