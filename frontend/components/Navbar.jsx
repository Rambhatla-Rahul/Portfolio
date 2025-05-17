'use client';
import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";

const Navbar = () => {
  const [width, setWidth] = React.useState(100); // Initial width in px
  const [isOpen, setIsOpen] = React.useState(true);

  const handleResize = () => {
    setIsOpen(!isOpen);
    setWidth(isOpen ? 80 : 130); // Shrink to 60px, expand to 200px
  };

  return (
    <div className="fixed flex flex-row w-full items-center justify-end gap-14 p-4 pr-10 transition-all duration-500 ease-in-out font-bold">
      {/* <div className='flex flex-row items-center justify-center w-fullrelative gap-8 text-[20px] text-center'>
        <button className="flex items-center gap-2 whitespace-nowrap font-bold ">
            <IoHomeOutline />
            <span>Home</span>
        </button>
        <button className="flex items-center gap-2 whitespace-nowrap">
            <MdInfoOutline />
            <div>About</div>
        </button>
        <button className="flex items-center gap-2 whitespace-nowrap">
            <VscFileSubmodule />
            <div>Projects</div>
        </button>
      </div> */}
      <div className='flex hover:cursor-pointer' onClick={()=>{window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank')}}>
        <Gmail className='text-2xl text-gray-600'/>
      </div>
      <div className='flex hover:cursor-pointer' onClick={()=>{window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank')}}>
        <Gmail className='text-2xl text-gray-600'/>
      </div>
      <div className='flex hover:cursor-pointer' onClick={()=>{window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank')}}>
        <Gmail className='text-2xl text-gray-600'/>
      </div>
    </div>
  );
};
export function Gmail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457"
      ></path>
    </svg>
  )
}



export default Navbar;
