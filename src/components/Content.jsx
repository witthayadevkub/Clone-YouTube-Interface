import React,{useState} from 'react'
import  cutetiger from '../assets/cute-dev-tiger.jpg'
import { IoMdTime } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdMore } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";

const content = () => {
    const tag =['name', 'name', 'name', 'name', 'nameddd', 'name', 'name', 'name']

    const data =[
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },{
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },
        {
            user:'user tiger',
            photo:cutetiger,
            title:'tiger programmer',
            period:'26:30',
            time:'4 ชั่วโมง',
            viwe:'500',
            nameUser:'witthaya feangsap'
        },

    ]

    const [MouseDown, serMouseDown] = useState({})
    // console.log(MouseDown)
  return (

    <div className='mx-3 z-3 sm:ml-4 md:ml-5 lg:ml-5'>
        <div className="flex gap-4 my-2 pl-3 flex-wrap ">
            {
                tag.map((tag, i) => (
                    <div key={`tag-${i}`} className="text-xs py-[3px] px-2 bg-base rounded-md " >
                        <p>{tag}</p>
                    </div>
                ))
            }
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
            {data.map((data, i) => (
                <div key={"content"+i} className="grid grid-rows-[60%_40%] h-[280px]  m-2" 
                    onMouseEnter={()=>serMouseDown({[i]:true})}
                    onMouseLeave={()=>serMouseDown({[i]:false})}>
                    <div className="rounded-md relative">
                        <img src={data.photo} alt="" className='w-full h-full object-cover rounded-xl'/>
                        <div className="absolute text-white text-xs bottom-1 right-2 bg-black px-1 rounded-sm">{data.period}</div>

                        {
                            MouseDown[i] && <div className="absolute flex gap-1 flex-col text-white text-3xl top-1 right-2">
                            <IoMdTime className=' bg-black px-1 rounded-md'/>
                            <HiMenuAlt3 className=' bg-black px-1 rounded-md'/>
                        </div>
                        }                        
                    </div>

                    <div className="pt-2 grid gap-2 grid-cols-[15%_75%_10%] overflow-hidden ">
                        <img src={data.photo} alt="" className='w-[35px] h-[35px] bg-black rounded-full object-cover'/>
                        <div className="flex gap-1 flex-col text-clip overflow-hidden">
                            <p>{data.title}</p> 

                            <div className='flex flex-col  text-sm'>
                                <p className='flex gap-1 items-center'>{data.nameUser}<IoMdCheckmarkCircle /></p>
                                <p>การดู {data.viwe} ครั้ง {data.time}</p>       
                            </div>
                        </div>
                        {
                                    MouseDown && <IoMdMore className='text-2xl'/>
                        }             
                    </div>
                </div>       
        ))}
        </div>
        
    </div>
    
  )
}

export default content