import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Navbar/>
      <div className='w-full'>
        <div className='absolute '>
          <Image
          src={"/homebg.webp"}
          height={2000}
          width={1800}
          alt='bgimage'
          className='h-screen w-screen object-cover md:object-none 2xl:h-full'
          priority
          />
        </div>
        <div>
        <Image
          src={"/rain.gif"}
          height={100}
          width={100}
          alt='rainbg'
          className='absolute w-screen h-screen opacity-50 mix-blend-lighten'
          />
        </div>
        <div className="flex h-full w-full absolute top-0">
          <div className="bg-gradient-to-b from-[#000AFF]/[0.32] from-[84%] mix-blend-overlay bg-opacity-[0.32] basis-[52%] md:basis-[51%]"></div>
          <div className="bg-gradient-to-b from-[#FF0000]/[0.12] from-[88%] mix-blend-color-burn basis-[48%] md:basis-[49%]"></div>
        </div>
        <div className='lg:flex justify-evenly hidden'>
        <Image
          src={"/thunder.gif"}
          height={670}
          width={490}
          alt='thunder1bg'
          className=' mix-blend-lighten opacity-30 h-screen'
          />
          <Image
          src={"/thunder3.gif"}
          height={670}
          width={490}
          alt='thunder2bg'
          className='mix-blend-lighten opacity-30 h-screen'
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
