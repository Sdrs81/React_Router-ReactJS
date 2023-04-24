import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from ".//components/Home"
import AboutUs from ".//components/AboutUs"


function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<Home/>} />  {/* Bu şekilde direk localhost da çalışır */} 
        <Route path='/aboutUs' element={<AboutUs/>} />  {/* Bu şekilde url'yi belirtiriz */}
      </Routes>
    </>
  )
}

export default App
