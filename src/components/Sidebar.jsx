import React,{useState} from 'react'
//icons
import { MdHomeFilled } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { LiaFileVideo } from "react-icons/lia";
import { GiBackwardTime } from "react-icons/gi";
import { MdAccessTime } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { PiUserSquareLight } from "react-icons/pi";
import { RiVideoLine } from "react-icons/ri";
import { LuListVideo } from "react-icons/lu";
import { PiFireLight } from "react-icons/pi";
import { PiMusicNoteThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { CiTrophy } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";
import { BiCommentError } from "react-icons/bi";
//component
import TagboxInsiderbar from './TagboxInsiderbar'

//sideData
// import { mainTag,secTag, follow, explore, more, setting} from '../data/sideData';

const Sidebar = () => {

  
  const mainTag =[
    {
      name:'หน้าแรก',
      icon:<MdHomeFilled />
    },
    {
      name:'shorts',
      icon:<LiaFileVideo />
    },
    {
      name:'การติดตาม',
      icon:<PiVideoLight />
    }
  ]

  const secTag =[
        {
      name:'ช่องของคุณ',
      icon:<PiUserSquareLight />
    },
        {
      name:'ประวัติการเข้าชม',
      icon:<GiBackwardTime />
    },
    {
      name:'วิดิโอของคุณ',
      icon:<RiVideoLine />
    },    {
      name:'ดูภายหลัง',
      icon:<MdAccessTime />
    },    {
      name:'วิดิโอที่ชอบ',
      icon:<BiLike />,
      listLikes:[
        {
          name:'videoLike1',icon:<LuListVideo />
        },
        {
          name:'videoLike2',icon:<LuListVideo />
        },
        {
          name:'videoLike3',icon:<LuListVideo />
        },
        {
          name:'videoLike4',icon:<LuListVideo />
        },
        {
          name:'videoLike5',icon:<LuListVideo />
        },
      ]
    }
  ]

const follow =[
        {
      name:'follow-1',   
      img:'https://picsum.photos/200/300'
    },
        {
      name:'follow-2',
     img:'https://picsum.photos/500/300'
    },
    {
      name:'follow-3',
      img:'https://picsum.photos/400/300'
    },    {
      name:'follow-4',
      img:'https://picsum.photos/600/100'
    },   {
      name:'follow-5',
      img:'https://picsum.photos/800/70'
    },   {
      name:'follow-6',
      img:'https://picsum.photos/700/10'
    },   {
      name:'follow-7',
      img:'https://picsum.photos/900/500'
    },   {
     name:'follow-8',
      img:'https://picsum.photos/600/90'
    },   {
      name:'follow-9',
      img:'https://picsum.photos/800/80'
    },   {
      name:'follow-10',
      img:'https://picsum.photos/700/30'
    },
  ]

  const explore =[
    {
      title:'มาแรง',
      icon:<PiFireLight />
    },
        {
      title:'เพลง',
      icon:<PiMusicNoteThin />
    },
        {
      title:'เกม',
      icon:<IoGameControllerOutline />
    },
        {
      title:'ข่าวสาร',
      icon:<PiNewspaperClippingLight />
    },
        {
      title:'กีฬา',
      icon:<CiTrophy />
    },
  ]

  const more =[
    {
      title:'YouTube Premium',
      icon:<FaYoutube />
    },
        {
      title:'YouTube Studio',
      icon:<SiYoutubemusic />
    },
        {
      title:'YouTube Music',
      icon:<SiYoutubemusic />
    },
        {
      title:'YouTube Kids',
      icon:<FaYoutube />
    },
  ]

  const setting =[
    {
      title:'การตั้งค่า',
      icon:<IoSettingsOutline />
    },
        {
      title:'ประวัติรายงาน',
      icon:<BsFlag />
    },
        {
      title:'ความช่วยเหลือ',
      icon:<GoQuestion />
    },
        {
      title:'ส่งความคิดเห็น',
      icon:<BiCommentError />
    },
  ]

  return (
    <div className='z-5'>
      <div className=' fixed top-[56px] w-[10%] text-xs hidden sm:block mx-2 pb-[5%] hover:br-1  h-[95%] bg-white overflow-y-scroll  '>
        <div className="border-b-2 pb-2">

            {mainTag.map((tag, index) =>(
            <div key={`${index}`} className='lg:flex items-center   gap-5 px-2 py-2 hover:bg-base hover:rounded-xl'>       
                <p className='text-2xl '>{tag.icon}</p>      
                <p >{tag.name}</p>               
            </div>
          ))}   
        </div>

        <div className=" sm:hidden md:block">
          {/* boxcomponent */}
            <TagboxInsiderbar Tag={secTag} title={'คุณ'}/>
        </div>
        
        <div className=" sm:hidden  lg:block"> 
            <TagboxInsiderbar Tag={follow} title={'ติดตาม'}/>
        </div>

        <div className="border-b-2 sm:hidden  lg:block">
          <p className='flex items-center gap-2 text-[17px]  mt-2 py-2 px-2'>สำรวจ</p>
                  {explore.map(({title, icon}, i) => (
                    
                        <div key={i} className='lg:flex items-center gap-5 py-2 px-2 hover:bg-base hover:rounded-xl'>
                            <p className='text-2xl'>{icon}</p> 
                            <p>{title}</p>
                        </div>                        
                  ))}
        </div>

        <div className="border-b-2 sm:hidden  lg:block">
          <p className='flex items-center gap-2 text-[17px]  mt-2 py-2 px-2'>เพิ่มเติมจาก Youtube</p>
                  {more.map(({title, icon}, i) => (
                    
                        <div key={i} className='lg:flex items-center gap-5 py-2 px-2 hover:bg-base hover:rounded-xl'>
                            <p className='text-2xl text-red-500'>{icon}</p> 
                            <p>{title}</p>
                        </div>                        
                  ))}
        </div>

        <div className="border-b-2 sm:hidden  md:block">
          
                  {setting.map(({title, icon}, i) => (
                    
                        <div key={i} className='lg:flex items-center gap-5 py-2 px-2 hover:bg-base hover:rounded-xl'>
                            <p className='text-xl'>{icon}</p> 
                            <p>{title}</p>
                        </div>                        
                  ))}
        </div>        
    </div>
    </div>
    
  )
}

export default Sidebar