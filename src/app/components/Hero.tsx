import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main className=' flex flex-col justify-center items-center'>
      <div className='w-full'>
        <div className='w-full'>
          <Image
          src={"/homebg.webp"}
          height={2000}
          width={2000}
          alt='bg image'
          className='h-screen w-screen object-cover'
          priority
          />
        </div>
      </div>
      <div className='absolute flex flex-col justify-center items-center top-[6rem] text-white max-w-[38rem]'>
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
        <h1 className='border-2 rounded-2xl p-2 text-3xl md:text-5xl mb-6 mt-4 md:w-[25rem] text-center lg:w-[34rem] font-gvonz'>9-10 September</h1>
        <a 
         className='border-2 rounded-2xl p-2 text-xl mb-8 lg:w-[16rem] font-syoog text-center hover:bg-[#096D6A] transition-colors ease-in' 
         href='https://hackodisha3.devfolio.co/'
         target='_blank'
         >Apply on Devfolio</a>
        <a className='border-2 rounded-3xl p-2 text-xl mt-4 font-syoog md:hidden' >Join Discord</a>
      </div>

    </main>
  )
}

export default Hero
