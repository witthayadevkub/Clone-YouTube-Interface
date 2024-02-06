import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import ViewOver from '../components/ViewOver'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className=''>
      <Router>
            <div className="fixed top-0 w-full h-[56px] bg-white z-10">
                <Navbar/>
            </div>  
            <div > 
            
            <Routes>

                <Route  path="*"exact element={
                  <div className="grid sm:grid-cols-[10%_1fr] h-auto pt-[56px] ">
                    <Sidebar/> 
                    <Content/>
                  </div>
              } />


                <Route path="/view/:id" element={
                  <div className="grid grid-cols-[1fr] h-auto pt-[56px] w-auto">
                      <ViewOver/>
                  </div>
                }/>

          
            </Routes>
          </div>
      </Router>
      
       
    </div>
  )
}

export default MainLayout