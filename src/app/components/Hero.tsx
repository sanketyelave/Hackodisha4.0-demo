import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className='relative flex flex-col justify-center items-center'>
      <div className='w-full relative'>
        <div className='absolute -z-10 w-full'>
          <Image
          src={"/homebg.webp"}
          height={1000}
          width={1000}
          alt='bg image'
          className='h-screen w-screen object-cover'
          />
        </div>
      </div>
      <div className='absolute z-10 flex flex-col justify-center items-center top-[10rem]'>
      <Image
        src={"/upper.svg"}
        height={120}
        width={80}
        alt='hero logo'
        className='w-10/12'
        />
        <Image
        src={"/Group 8.svg"}
        height={120}
        width={80}
        alt='hero logo'
        className='w-10/12'
        />
        <Image
        src={"/lower.svg"}
        height={120}
        width={80}
        alt='hero logo'
        className='w-10/12'
        />
      </div>
      <div className='absolute z-10 flex flex-col justify-center items-center top-[29rem] gap-6 text-white'>
        <h1 className='border-2 rounded-2xl p-2 text-4xl'>9-10 September</h1>
        <a className='border-2 rounded-2xl p-2 text-2xl'>Apply on Devfolio</a>
        <a className='border-2 rounded-3xl p-2 text-xl mt-4'>Join Discord</a>
      </div>
    </main>
  )
}

export default Hero
