"use client"
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='backdrop-blur-sm p-6 px-8 flex justify-between z-50'>
    <div>
      <Image 
      src={"/HO3.svg"} 
      alt="logo"
      width={80}
      height={80}
      />
    </div>
    <div>
      <Image
      src={"/Ham.svg"}
      width={30}
      height={30}
      alt='ham'
      />
    </div>
    </div>
  )
}

export default Navbar
