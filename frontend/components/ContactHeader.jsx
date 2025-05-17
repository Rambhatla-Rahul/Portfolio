import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
const ContactHeader = () => {
  return (
    <div className='flex w-[90%] bg-gray-900 mt-10 boder-b-2 border-gray-950 rounded-lg shadow-lg justify-evenly p-2'>
        <span className='font-light text-[14px] flex items-center'><span className='text-[14px]'><FaPhone/></span> &nbsp; +91-7802981187</span>
        <span className='font-light text-[14px] flex items-center'><span className='text-[16px] text-yellow-500'><MdOutlineMail/></span> &nbsp; <a className='underline' href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank'>rrambhat@gitam.in</a></span>
        <span className='font-light text-[14px] flex items-center'><span className='text-purple-600'><GrLinkedin/></span> &nbsp; <a className='text-blue-400 hover:cursor-pointer underline' href='https://linkedin.com/in/rahul-rambhatla-a38049310' target='_blank'>LinkedIn</a></span>
        <span className='font-light text-[14px] flex items-center'><span className='text-[18px]'><FaGithubSquare /></span> &nbsp; <a className='font-bold hover:cursor-pointer' href='https://github.com/Rambhatla-Rahul' target='_blank'>Github</a></span>
    </div>
  )
}

export default ContactHeader
