import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const page = () => {
  return (
    <div className='relative'>
      <Hero/>
      <Navbar/>
    </div>
  )
}

export default page
