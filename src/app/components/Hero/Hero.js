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

      <div className="logo">
        <div className="ulogo"></div>
      </div>

    </div>
  )
}

export default Hero
