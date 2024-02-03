import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const MainLayout = () => {
  return (
    <div className=''>
      <div className="sticky top-0 w-screen h-[56px] bg-white z-10">
        <Navbar/>
      </div>  
      <div className="grid sm:grid-cols-[15%_1fr] h-[5000px]">
       
        <Sidebar />

        
        <Content/>
      </div>
       
    </div>
  )
}

export default MainLayout