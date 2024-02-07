import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import cutetiger from '../assets/cute-dev-tiger.jpg'
import { IoMdTime } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdMore } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
const ContentVideoBox = ({ DataSlice, index }) => {

    const [MouseDown, serMouseDown] = useState({})
    return (

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
            {DataSlice[index].map((data) => (
                <Link key={data.id} to={`/view/${data.id}`}>
                    <div  className="grid grid-rows-[60%_40%] h-[280px]  m-2"
                        onMouseEnter={() => serMouseDown({ [data.id]: true })}
                        onMouseLeave={() => serMouseDown({ [data.id]: false })}
                    >

                        <div className="rounded-md relative">
                            {!data.photo && <img src={cutetiger} alt="" className='w-full h-full object-cover rounded-xl border' />}
                            {data.photo && <img src={`${data?.photo}/${data?.id * 10}`} alt="" className='w-full h-full object-cover rounded-xl border hover:rounded-none transition ease-in-out' />}
                            <div className="absolute text-white text-xs bottom-1 right-2 bg-black px-1 rounded-sm">{data.period}</div>

                            {
                                MouseDown[data.id] && <div className="absolute flex gap-1 flex-col text-white text-3xl top-1 right-2">
                                    <IoMdTime className=' bg-black px-1 rounded-md' />
                                    <HiMenuAlt3 className=' bg-black px-1 rounded-md' />
                                </div>
                            }
                        </div>

                        <div className="pt-2 grid gap-2 grid-cols-[15%_75%_10%] overflow-hidden ">
                            {!data.photo && <img src={cutetiger} alt="" className='w-[35px] h-[35px] bg-black rounded-full object-cover hover:scale-110' />}
                            {data.photo && <img src={`${data?.photo}/${data?.id * 10}`} alt="" className='w-[35px] h-[35px] bg-black rounded-full object-cover hover:scale-110' />}

                            <div className="flex gap-1 flex-col text-clip overflow-hidden">
                                <p>{data.title}</p>
                                {/* {data.id} */}
                                <div className='flex flex-col  text-sm'>
                                    <p className='flex gap-1 items-center'>{data.nameUser}<IoMdCheckmarkCircle /></p>
                                    <p>การดู {data?.view} ครั้ง {data?.time}</p>
                                </div>
                            </div>
                            {
                                MouseDown[data.id] && <IoMdMore className='text-xl' />
                            }
                        </div>
                    </div>
                </Link>
            ))}

        </div>


    )
}

export default ContentVideoBox