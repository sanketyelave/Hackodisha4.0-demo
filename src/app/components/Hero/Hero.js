import React from 'react'

const Hero = () => {
  return (
    <div>


      <div className="img">
        <img src="/Images/homebg.webp" alt="no" className="object-cover absolute h-[100%] w-[100%]"/>
      </div>

      <div className="grad flex h-[100%] w-[100%] absolute">
        <div className="grad1 w-[53%] h-[100%] bg-opacity-[0.32] lg:w-[51%]"><img src="/Images/Rectangle39.png" alt="no" className=' mix-blend-overlay h-screen w-[100%]' /></div>
        <div className="grad2 w-[47%] h-[100%] lg:w-[49%]"><img src="/Images/Rectangle123.png" alt="no" className=' mix-blend-color-burn h-screen w-[100%]'/></div>
      </div>

      <div className="box flex justify-center pt-[50%]">
      <div className="logo absolute flex-row justify-center items-center">
        <div className="ulogo flex justify-center mb-[-12px] bg-transparent w-[100%]"><img src="/Images/upper.png" alt="no" className='w-[83%]'/></div>
        <div className="mlogo flex justify-center w-[100%]"><img src="/Images/Group8.png" alt="no" className='w-[83%]'/></div>
        <div className="llogo flex justify-center mt-[-12px] bg-transparent w-[100%]"><img src="/Images/lower.png" alt="no" className='w-[83%]'/></div>
        <div className="date flex justify-center text-white text-2xl font-gvonz pt-7"><h1 className='border-2 rounded-2xl p-2 px-4'>9 - 10 September{" "}</h1></div>
      </div>
      </div>

    </div>
  )
}

export default Hero
