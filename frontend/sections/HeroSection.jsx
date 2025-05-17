'use client'
import React from 'react'

import ContactHeader from '@/components/ContactHeader';
import AboutMe from '@/components/AboutMe';
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full text-center'>
      <ContactHeader/>
      <div className='flex flex-col items-center justify-center w-full h-full gap-8 text-[20px] text-center mt-20'>
        <div className='flex justify-between w-full max-w-[1200px]'>
          <div className='flex flex-col items-start justify-start'>
            <h1 className='text-4xl font-bold text-white text-start'>Rambhatla Rahul</h1>
            <span id='underlined'/>
            <p><AboutMe text={'Test'}/></p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src='/profile_image.jpg' className='rounded-full w-[400px] h-[400px] object-cover'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
