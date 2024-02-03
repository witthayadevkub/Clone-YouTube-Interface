import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'

//data
import { data } from './data/data'
function App() {

  console.log(data)

  return (
  <div>
      <MainLayout/>
  </div>
  )
}

export default App
