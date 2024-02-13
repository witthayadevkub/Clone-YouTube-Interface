import React,{useState,useContext} from 'react'
// import  cutetiger from '../assets/cute-dev-tiger.jpg'
import { MyContext } from '../App';
import ContentVideoBox from './ContentVideoBox';

//coponents


const content = () => {
    const tag =['เพลง', 'เกม', 'ข่าวสาร', 'ไลฟ์สด', 'ทีวีอนิเมชัน', 'การ์ตูน', 'การทำอาหาร', 'ฟุตบอล','อัปโหลดล่าสุด','ดูแล้ว','วิดิโอใหม่สำหรับคุณ']
    const  imgURL =  `https://picsum.photos/200/300?random=`
    const shortVideos = [
        {title:'video', img:imgURL},
        {title:'video', img:imgURL},
        {title:'video', img:imgURL},
        {title:'video', img:imgURL},
        {title:'video', img:imgURL},
        {title:'video', img:imgURL},
    ]


    const contextValue = useContext(MyContext);
    // console.log(contextValue)

    

    // คำนวนจำนวนที่อยากจะโชว์ 
    const videoperpage = 10
    const page = Math.ceil(contextValue.length/ videoperpage)

    // แยก array
    const DataSlice = Array.from({length: page},(_,index)=>{
        const start = index * videoperpage
        const end = start+ videoperpage
        return contextValue.slice(start, end)
    })
    // console.log(DataSlice)

  return (

    <div className='md:mx-3 z-3 sm:ml-4 md:ml-5 lg:ml-5'>
        <div className="flex gap-4 my-2 pl-3 flex-wrap items-center ">
            <div className="text-xs  px-3 py-2 bg-black text-white rounded-md ">
                <p>ทั้งหมด</p>
            </div>
            {
                tag.map((tag, i) => (
                    <div key={`tag-${i}`} className="text-xs px-3 py-2 bg-base rounded-md hover:bg-hoverbase" >
                        <p>{tag}</p>
                    </div>
                ))
            }
        </div>
        {/* content video */}
            {DataSlice.map((_,index) =>(
                <div key={'DataSlice'+index} >

                    <ContentVideoBox DataSlice={DataSlice} index={index}/>

                    
                    <div className='hidden md:block '>
                     <div className='flex gap-3 p-3 '>
                     {shortVideos.map((video,i)=>(
                        <div key={i} className='grid grid-rows-[1fr_15%] lg:h-[500px]   '>
                            <img src={`${video.img}${i}`} alt="" className='border rounded-[15px] h-full object-cover'/>
                            <div className='p-2'>
                                <p>short {video.title}</p>
                                <p className='sm:text-[0.7rem]'>การดู 1 ล้าน ครั้ง</p>
                            </div>
                        </div>
                    ))}
                   </div>
                    </div>

              
                </div>
            ))}



    </div>
    
  )
}

export default content