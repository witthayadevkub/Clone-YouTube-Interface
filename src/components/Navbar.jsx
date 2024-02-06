import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import cutetiger from '../assets/cute-dev-tiger.jpg'
import { RiVideoAddLine } from "react-icons/ri";
import { CgBell } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount, MdOutlineExitToApp, MdOutlineTranslate } from "react-icons/md";
import { ImCoinDollar } from "react-icons/im";
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiShieldUserLine } from "react-icons/ri";
import { RiShieldLine } from "react-icons/ri";
import { GoMoon } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { BiCommentError } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";

const Navbar = () => {

    const [detail, setDetail] = useState(false);

    const user = {
        img: cutetiger,
        name: 'Witthaya Faengsap',
        email: '@witthaya'
    }

    const set1 = [
        { icon: <FaGoogle />, title: 'บัญชี Google' }, { icon: <MdOutlineSwitchAccount />, title: 'สลับบัญชี' }, { icon: <MdOutlineExitToApp />, title: 'ออกจากระบบ' },
    ]
    const set2 = [
        { icon: <ImCoinDollar />, title: "YouTube Studio" }, { icon: <IoPlayCircleOutline />, title: "การซื้อและการขายเป็นสมาชิก" }
    ]
    const set3 = [
        { icon: <RiShieldUserLine />, title: "ข้อมูลของคุณใน YouTube" }, { icon: <GoMoon />, title: "ธีมของแอป:ธีมของอุปกรณ์" }, { icon: <MdOutlineTranslate />, title: "ภาษา: ไทย" },
        { icon: <RiShieldLine />, title: "โหมดที่จำกัด: ปิด" }, { icon: <TbWorld />, title: "ประเทศ: ประเทศไทย" }, { icon: <FaRegKeyboard />, title: "แป้นพิมพ์ลัด" },
    ]
    const set4 = [{ icon: <IoSettingsOutline />, title: 'การตั้งค่า' }]
    const set5 = [{ icon: <GoQuestion />, title: 'ความช่วยเหลือ' }, { icon: <BiCommentError />, title: 'ส่งความคิดเห็น' }]


    const box = (data) => {
        return (
            <div className="border-b-2 ">
                {data.map((e, i) => (
                    <div key={i} className='flex gap-4 justify-center items-center p-3 hover:bg-base '>
                        <div className='flex-2   text-2xl '>
                            {e.icon}
                        </div>
                        <div className='flex-1 text-sm'>{e.title}</div>
                    </div>
                ))}

            </div>
        )
    }

    return (
        <div className=' flex justify-between items-center h-full  px-2 relative'>
            <div className="text-blue-600 flex items-center gap-3">
                <div className='hidden text-xl text-black w-[40px] h-[40px] sm:flex items-center justify-center hover:bg-base hover:rounded-full'>
                    <AiOutlineMenu />
                </div>

                <div className='flex items-center'>
                    <FaYoutube className='text-2xl mr-[0.1rem] text-iconYube' />
                    <h1 className='font-semibold text-black'>YouTube</h1>
                </div>

            </div>
            <div className="hidden  md:flex gap-3 items-center lg:w-[650px]">
                <div className="flex justify-between border rounded-3xl items-center h-[40px] w-full truncate">
                    <input type="text" placeholder="ค้นหา" className='pl-4  outline-none text-sm' />
                    <div className='text-xl flex items-center justify-center  w-[60px] h-full bg-base hover:bg-hoverbase '>
                        <div><IoIosSearch /></div>
                    </div>
                </div>
                <div className=" flex items-center justify-center bg-base rounded-[100%] h-[40px] w-[40px] text-xl hover:bg-hoverbase">
                    <div>
                        <IoMdMic />
                    </div>

                </div>
            </div>
            <div className="flex gap-7 items-center text-2xl pr-5">
                <div><RiVideoAddLine /></div>
                <div className='relative '>
                    <CgBell />
                    <div className='absolute shadow text-[10px] text-white p-[1px] bg-red-500 w-[15px] h-[15px] rounded-full top-[-2px] right-[-5px] flex items-center justify-center '>1</div>
                </div>
                <div>
                    <img src={user.img} alt="" onClick={() => setDetail(!detail)} className=" w-[32px] h-[32px] object-cover rounded-full shadow-2xl cursor-pointer" />

                </div>
            </div>
            {detail &&
                <div className='w-[300px]  absolute right-5 top-[100%] bg-white border rounded-lg shadow-lg '>
                    <div className='flex gap-5 p-4 border-b-2'>
                        <img src={user.img} alt="" className='w-[45px] h-[45px] object-cover rounded-full shadow-2xl' />
                        <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p className="text-blue-500 text-sm">ช่องของคุณ</p>
                        </div>
                    </div>
                    <div className="overflow-y-scroll sm:h-[200px] md:h-[400px] lg:h-auto">
                        {box(set1)}
                        {box(set2)}
                        {box(set3)}
                        {box(set4)}
                        {box(set5)}
                    </div>

                </div>}

        </div>
    )
}

export default Navbar