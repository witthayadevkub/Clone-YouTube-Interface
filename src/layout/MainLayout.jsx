import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const MainLayout = () => {
  return (
    <div className=''>
      <div className="fixed top-0 w-screen h-[56px] bg-white z-10">
        <Navbar/>
      </div>  
      <div className="grid sm:grid-cols-[10%_1fr] h-screen pt-[56px]">
       
        <Sidebar />

        
        <Content/>
      </div>
       
    </div>
  )
}

export default MainLayout