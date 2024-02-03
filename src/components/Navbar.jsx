import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import  cutetiger from '../assets/cute-dev-tiger.jpg'
import { RiVideoAddLine } from "react-icons/ri";
import { CgBell } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className=' flex justify-between items-center h-full  px-[20px]'>
        <div className="text-blue-600 flex items-center gap-6">
            <div className='hidden text-xl text-black w-[40px] h-[40px] sm:flex items-center justify-center hover:bg-hoverbase hover:rounded-full'>
                <AiOutlineMenu />
            </div>

            <div className='flex items-center'>
                {/* <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png" alt="" 
                className='h-[56px] w-[120px] object-cover'/> */}
                <FaYoutube className='text-2xl mr-[0.1rem] text-iconYube'/>
                <h1 className='font-semibold text-black'>YouTube</h1>
            </div>
             
        </div>
        <div className="hidden  md:flex gap-4 items-center lg:w-[650px]">
        <div className="flex justify-between border rounded-3xl items-center h-[40px] w-full truncate">
            <input type="text" placeholder="search" className='pl-4  outline-none'/>
            <div className='text-xl flex items-center justify-center  w-[60px] h-full bg-base hover:bg-hoverbase '>
                <div><IoIosSearch /></div>
            </div>
        </div>
            <div className= " flex items-center justify-center bg-base rounded-full h-[40px] w-[40px] text-xl hover:bg-hoverbase">
                <IoMdMic/>
            </div>
        </div>
        <div className="flex gap-7 items-center text-2xl">
            <div><RiVideoAddLine /></div>
            <div className='relative '>
                <CgBell />
                <div className='absolute shadow text-[10px] text-white p-[1px] bg-red-500 w-[15px] h-[15px] rounded-full top-[-2px] right-[-5px] flex items-center justify-center '>1</div>
            </div>
            <div>
                <img src={cutetiger} alt="" className="w-[32px] h-[32px] object-cover rounded-full shadow-2xl"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar