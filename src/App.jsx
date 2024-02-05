
import { createContext } from 'react';
import './App.css'
import MainLayout from './layout/MainLayout'

//data
import { data, dataArrays } from './data/data'

export const MyContext = createContext();

function App() {




  return (
  <MyContext.Provider value={dataArrays}>
      <MainLayout/>
  </MyContext.Provider>
  )
}

export default App
