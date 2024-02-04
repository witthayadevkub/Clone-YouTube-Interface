import React,{useState} from 'react'

//icon
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const TagboxInsiderbar = ({Tag,title}) => {
    const [secTagClick, setSecTagClick] = useState(false)
    const sliceSecTag =  secTagClick? Tag : Tag.slice(0, 4);
  return (
            <div className="border-b-2">
              {title==='คุณ' 
              && <p className='flex items-center gap-2 text-[17px]  mt-2 py-2 px-2 hover:bg-base hover:rounded-xl'>{title}<span><IoIosArrowForward/></span></p>
              }
               {title==='ติดตาม' 
              && <p className='flex items-center gap-2 text-[17px]  mt-2 py-2 px-2'>{title}</p>
              }
              
            
             
              <div className=''>
                {
                  sliceSecTag.map((secTag, i) => (
                    <div>
                        <div key={i} className='lg:flex items-center gap-5 py-2 px-2 hover:bg-base hover:rounded-xl'>
                            {secTag.img 
                            ? <img src={secTag?.img} alt={secTag?.img} className='w-6 h-6 rounded-full object-cover'/> 
                            : <p className='text-2xl'>{secTag?.icon}</p>}
                            
                            <p>{secTag.name}</p>
                        </div>

                        
                    </div>

                  ))
                }
                {sliceSecTag.find(e=>e.name === 'วิดิโอที่ชอบ') && <div>
                  {sliceSecTag.map((Tag, i) => (
                  <div key={i}>
                    {Tag?.listLikes?.map((like, i) => (
                      <div key={i} className='lg:flex items-center gap-5 py-2 px-2 hover:bg-base hover:rounded-xl'>
                        <p className='text-2xl'>{like?.icon}</p>
                        <p>{like?.name}</p>
                      </div>
                    ))}
                  </div>
                  
                ))}
                </div>}

                {
                  secTagClick ?
                  <div onClick={()=>setSecTagClick(!secTagClick)}className='lg:flex items-center gap-5 py-2 px-2 hover:bg-base hover:rounded-xl'>
                  <IoIosArrowUp className='text-2xl'/>
                  <p>แสดงน้อยลง</p>
                </div>
                : <div onClick={()=>setSecTagClick(!secTagClick)}className='lg:flex items-center gap-5 py-2 px-2 hover:bg-base hover:rounded-xl'>
                  <IoIosArrowDown className='text-2xl'/>
                  <p>แสดงเพิ่มเติม</p>
                </div>
                }
               
              </div>

        </div>
  )
}

export default TagboxInsiderbar