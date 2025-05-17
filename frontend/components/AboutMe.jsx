"use client"
import React from 'react'

const AboutMe = ({text}) => {
  return (
    <div className='flex w-full h-full items-center justify-center'>
      <p className='font-italic pt-10'>{text}</p>
    </div>
  )
}

export default AboutMe
