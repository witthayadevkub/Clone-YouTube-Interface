import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MyContext } from '../App';
import cutetiger from '../assets/cute-dev-tiger.jpg'
//icons
import { BsWindowFullscreen } from "react-icons/bs";
import { LuSquare } from "react-icons/lu";
import { IoMdExpand, IoIosMore, IoMdTime, IoMdMore, IoMdSettings  } from "react-icons/io";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdPause, MdVolumeUp, MdVolumeOff, MdClose } from "react-icons/md";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai";
import { HiMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaRegSmileBeam } from "react-icons/fa";

const ViewOver = () => {

    const [like, setLike] = useState(false)
    const [unLike, setUnLike] = useState(false)
    const [countLike, setCountLike] = useState(0)
    const [more, setMore] = useState(false)
    const [onChangeComment, setOnChangeComment] = useState()

    const handleInputChange = (e) => {
        setOnChangeComment(e.target.value);
    };
    const handleLike = () => {
        setLike(true)
        setUnLike(false)
        setCountLike((e) => e + 1)
    }
    const handleUnLike = () => {
        setLike(false)
        setUnLike(true)
        setCountLike((e) => e - 1)
    }


    const { id } = useParams()
    const contextValue = useContext(MyContext);
    const dataId = contextValue.filter((data) => data.id == id)

    const [mouse, setMouse] = useState(false)
    const [sound, setSound] = useState(true)
    const handleSound = () => {
        setSound(!sound)
    }

    const [value, setValue] = useState(1);
    const [MouseDown, serMouseDown] = useState({})
    // Function to handle changes in the range input
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function numberToTime(number) {
        var hours = Math.floor(number / 100); // Extracting hours
        var minutes = number % 100; // Extracting minutes

        // Formatting the time components
        var formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;

        return formattedTime;
    }

    //use for change index in link
    const randomindex = () => Math.floor(Math.random() * 19) + 1;
    if (randomindex == 0) {
        randomindex = 1;
    }

    const title = [
        { title: 'แชร์', icon: <PiShareFatLight /> },
        { title: 'ดาวน์โหลด', icon: <LiaDownloadSolid /> },
        { title: 'บันทึกวิดิโอ', icon: <RiPlayListAddLine /> },

    ]

    return (
        <div>
            <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_25%] px-[7%] gap-7  mt-10 w-full">
                <div className=''>
                    {dataId.map((data) => (
                        <div key={data.id}>
                            <div className="w-full h-[500px] sm:h-[500px] lg:h-[700px] relative ">
                                <div>
                                    <input type="range" id="volume" name="volume" min="0" max={data.period.replace(':', '')} value={value} onChange={handleChange} className='w-full absolute bottom-[10%]  h-[3px] in-range:border-green-500' />
                                </div>
                                <img src={`${data?.photo}/${data?.id * 10}`} alt={data.title} className="w-full h-full rounded-[1rem] border" />

                                <div className='absolute bottom-1 w-full px-10 text-white flex justify-between items-center'>

                                    <div className='flex gap-1 items-center'>

                                        <Link to={`/view/${randomindex()}`}><BiSkipPrevious className='size-10' /></Link>
                                        <MdPause className='size-9' />
                                        <Link to={`/view/${randomindex()}`}><BiSkipNext className='size-10' /></Link>

                                        {sound ? <MdVolumeUp onClick={handleSound} onMouseDown={() => setMouse(!mouse)} className='size-7 ' /> : <MdVolumeOff onClick={handleSound} className='size-7 ' />}
                                        {sound && <input type="range" id="volume" name="volume" min="0" max="5" className={`h-3  ${mouse ? 'block' : 'hidden'}`} />}

                                        <p >{numberToTime(value)}/{data.period}</p>
                                    </div>

                                    <div className='flex gap-5 items-center '>
                                        <BsWindowFullscreen className='size-6' />
                                        <IoMdSettings className='size-7' />
                                        <MdOutlineBrandingWatermark className='size-7' />
                                        <Link to="/"><LuSquare className='size-7' /></Link>

                                        <IoMdExpand className='size-7' />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h1 className='text-2xl font-bold text-wrap my-3 p-2'>{data.title}</h1>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4'>
                                        <img src={`${data?.photo}/${data?.id * 10}`} alt={data.title} className='w-10 h-10 rounded-full' />
                                        <div className=''>
                                            <p className='font-bold '>{data.user}</p>
                                            <p className='text-xs text-gray-500'>ผู้ติดตาม {data.viwe} คน</p>
                                        </div>
                                        <div className='text-white px-4 align-middle py-2 bg-black rounded-[20px]'>ติดตาม</div>
                                    </div>
                                    <div className='flex gap-3 items-top'>

                                        <div className='flex items-center rounded-[20px] overflow-hidden'>
                                            <div className="flex   items-center ">
                                                <div className='flex gap-2 px-3 h-[35px] items-center bg-base hover:bg-hoverbase'>

                                                    {like
                                                        ? <AiFillLike onClick={() => { setLike(!like), setCountLike((e) => e - 1) }} className="text-xl" />
                                                        : <AiOutlineLike onClick={handleLike} className="text-xl" />
                                                    }

                                                    <p className='text-xs'>{Number(data.viwe) + countLike}</p>
                                                </div>
                                                <div className='flex bg-base px-3 h-[35px] items-center hover:bg-hoverbase border-l-2 border-hoverbase'>

                                                    {unLike
                                                        ? <AiFillDislike onClick={() => { setUnLike(!unLike), setCountLike((e) => e + 1) }} className="text-xl " />
                                                        : <AiOutlineDislike onClick={handleUnLike} className="text-xl " />
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className='hidden xl:block'>
                                            <div className='flex gap-3 items-top'>
                                                {
                                                    title.map((title, i) => (
                                                        <div key={i} className=' bg-base flex gap-2 justify-center items-center px-3 h-[35px] rounded-[20px] hover:bg-hoverbase'>
                                                            <div className="lg:text-lg xl:text-xl">{title?.icon}</div>
                                                            {title.title && <p className='text-xs'>{title?.title}</p>}
                                                        </div>
                                                    ))
                                                }

                                            </div>

                                        </div>
                                        <div className=' bg-base flex gap-2 justify-center items-center px-3 h-[35px] rounded-[20px] hover:bg-hoverbase'>
                                            <div className="lg:text-lg xl:text-xl"><IoIosMore /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='h-[100px] bg-base mt-5 rounded-xl p-3'>
                                <p className='text-md'>การดู {data.viwe} ครั้ง . {data.time} ที่แล้ว</p>
                            </div>

                            <div className="">
                                <div className="my-6 flex gap-5">
                                    <h5 className='text-xl font-bold'>ความคิดเห็น {data.viwe} รายการ</h5>
                                    <div className='relative '>
                                        <div onClick={() => setMore(!more)} className='flex items-center text-md '>
                                            <HiOutlineMenuAlt2 className='text-xl' />
                                            <p>จัดเรียงตาม</p>
                                        </div>
                                        {more && <div className='absolute text-sm rounded-md w-[180px] h-auto shadow-lg py-2 bg-white '>
                                            <p className='p-4  bg-hoverbase hover:bg-base'>ความคิดเห็นยอดนิยม</p>
                                            <p className='p-4 hover:bg-base'>ใหม่ล่าสุด</p>
                                        </div>}

                                    </div>

                                </div>
                                <div>
                                    <div className="flex gap-3 items-center">
                                        <img src={cutetiger} alt="" className='w-10 h-10 rounded-full' />
                                        <div className='w-full  text-sm flex items-end pb-1 '>
                                            <input type="text" name="" value={onChangeComment}
                                                onChange={handleInputChange} placeholder="เพิ่มความคิดเห็น..." className='outline-none w-full border-b-2  focus:border-black' />
                                        </div>

                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-lg ml-[3rem]'><FaRegSmileBeam /></p>
                                        <div className="flex gap-4">
                                            <p className='rounded-3xl px-3 py-2 hover:bg-hoverbase'>ยกเลิก</p>
                                            <p className='rounded-3xl px-3 py-2 bg-base hover:bg-hoverbase'>ส่งความคิดเห็น</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    ))}


                </div>
                <div>
                    <div className=' w-full h-[700px] grid grid-flow-rows-[10%_1fr] border rounded-lg'>
                        <div className="flex justify-between items-center m-3">
                            <div className="">
                                <h3 className="font-bold text-md">มิกช์ของฉัน</h3>
                                <p className="text-xs">Mixes are playlists YouTube makes for you</p>
                            </div>

                            <div>
                                <MdClose className='text-3xl' />
                            </div>
                        </div>
                        <div className=' w-full overflow-scroll rounded-lg'>
                            {contextValue.map(data => (
                                <Link to={`/view/${data.id}`} key={data.id}>
                                    <div className='flex pl-6 justify-between items-center gap-2 h-[70px] px-3 hover:bg-base rounded-sm'>
                                        <div className="w-[100px] h-[56px] relative">
                                            <img src={`${data?.photo}/${data?.id * 10}`} alt="" className="w-[100px] h-[56px] rounded-md object-cover border-b-2 border-red-500 " />
                                            <p className="absolute bottom-1 right-1 text-[11px] text-white bg-black p-0.5 px-1 rounded-[5px]">{data.period}</p>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-sm font-semibold leading-7'>{data.title}</p>
                                            <p className='text-xs'>{data.user}</p>
                                        </div>

                                        <p><IoMdMore /></p>
                                    </div>
                                </Link>

                            ))}

                        </div>

                    </div>
                    <div className='w-full border rounded-[20px] my-5 p-2 items-center grid place-content-center text-sm'>
                        <p>แสดงการเล่นแชทซ้ำ</p>
                    </div>

                    <div className=' w-full h-auto'>
                        <div className='flex flex-col gap-2'>
                            {contextValue.map(data => (
                                <Link to={`/view/${data.id}`} key={data.id}>
                                    <div className='flex justify-between items-center gap-2  '
                                        onMouseEnter={() => serMouseDown({ [data.id]: true })}
                                        onMouseLeave={() => serMouseDown({ [data.id]: false })}>

                                        <div className="w-[180px] h-[100px] relative">
                                            <img src={`${data?.photo}/${data?.id * 10}`} alt="" className="w-full h-full rounded-md object-cover " />
                                            <p className="absolute bottom-1 right-1 text-[11px] text-white bg-black p-0.5 px-1 rounded-[5px]">{data.period}</p>
                                            {
                                                MouseDown[data.id] && <div className="absolute flex gap-1 flex-col text-white text-3xl top-1 right-2">
                                                    <IoMdTime className=' bg-black px-1 rounded-md' />
                                                    <HiMenuAlt3 className=' bg-black px-1 rounded-md' />
                                                </div>
                                            }
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-sm font-semibold leading-7'>{data.title}</p>
                                            <p className='text-xs'>{data.user}</p>
                                            <p className='text-xs'>การดู {data.viwe} ครั้ง . {data.time} ที่แล้ว</p>
                                        </div>
                                        {
                                            MouseDown[data.id] && <IoMdMore className='text-xl' />
                                        }

                                    </div>
                                </Link>

                            ))}

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewOver