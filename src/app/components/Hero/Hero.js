import React from 'react'

const Hero = () => {
  return (
    <>
    <div>


      <div className="img">
      <img src="/Images/homebg.webp" alt="no" className="object-cover absolute h-[100%] w-[100%]"/>
      </div>
  

      <div className="grad flex h-[100%] w-[100%] absolute overflow-hidden">

      <img src="/gif/rain.gif" alt="no" className='absolute h-screen w-screen mix-blend-screen md:mix-blend-lighten opacity-60'/>

        <div className="grad1 w-[53%] h-[100%] bg-opacity-[0.32] lg:w-[51%]">
        <div className="thunder hidden lg:block absolute mix-blend-lighten opacity-20 w-[45%] h-[110%]"><img src="/gif/thunder3.gif" alt="no" className='h-[100%] mix-blend-difference'/></div>
        <img src="/Images/Rectangle39.png" alt="no" className=' mix-blend-overlay h-[100%] w-[100%]' /></div>


        <div className="grad2 w-[47%] h-[100%] lg:w-[49%]">
        <div className="thunder hidden lg:block absolute mix-blend-lighten opacity-20 w-[47%] h-[110%]"><img src="/gif/thunder3.gif" alt="no" className='h-[100%] mix-blend-difference'/></div>
        <img src="/Images/Rectangle123.png" alt="no" className='mix-blend-color-burn h-[100%] w-[100%]'/></div>
        

      </div>

      <div className="box flex justify-center pt-[50%] md:pt-[14%] lg:pt-[10%] xl:pt-[8%] 2xl:pt-[6%]">
      <div className="logo absolute flex-row justify-center items-center">
        <div className="ulogo flex justify-center mb-[-12px] bg-transparent w-[100%] "><img src="/Images/upper.png" alt="no" className='w-[83%] md:w-[36%] h-max-[240px] lg:w-[48%] xl:w-[60%] 2xl:w-[73%]'/></div>
        <div className="mlogo flex justify-center w-[100%] "><img src="/Images/Group8.png" alt="no" className='w-[83%]  md:w-[36%] h-max-[80px] lg:w-[48%] xl:w-[60%] 2xl:w-[73%]'/></div>
        <div className="llogo flex justify-center mt-[-12px] bg-transparent w-[100%] "><img src="/Images/lower.png" alt="no" className='w-[83%] md:w-[36%] h-max-[240px] lg:w-[48%] xl:w-[60%] 2xl:w-[73%]'/></div>
        <div className="date flex justify-center text-white text-2xl font-gvonz pt-5 md:text-5xl"><h1 className='border-2 rounded-2xl p-2 px-4'>9 - 10 September</h1></div>
        <div className="devbtn flex justify-center text-white font-gvonz pt-2 items-center text-sm mt-3 cursor-pointer md:text-lg "><span className='hover:bg-[#096D6A] flex items-center border-2 rounded-xl px-4 py-2 transition-colors ease-in bg-black bg-opacity-35'><a href="/">Apply on Devfolio </a><img src="/Images/link2.png" alt="no" className=' w-4 h-4 ml-4 hover:bg-[#096D6A]'/></span></div>
        <div className="devbtn flex justify-center text-white font-gvonz pt-2 items-center text-sm mt-3 cursor-pointer md:hidden"><span className='hover:bg-[#096D6A] flex items-center border-2 rounded-2xl px-4 py-2 transition-colors ease-in bg-black bg-opacity-35'><a href="/">Join Discord</a></span></div>
      </div>
      </div>

      

    </div>
    </>
  )
}

export default Hero
