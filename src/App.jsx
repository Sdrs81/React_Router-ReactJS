import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from ".//components/Home"
import AboutUs from ".//components/AboutUs"
import Navbar from './components/Navbar'
import Mission from './components/Mission'
import WrongPath from './components/WrongPath'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes >
        <Route path='/' element={<Home />} />  {/* Bu şekilde direk localhost da çalışır */}
        <Route path='/aboutUs' element={<AboutUs />} />  {/* Bu şekilde url'yi belirtiriz */}
        <Route path='/mission' element={<Mission />} />
        <Route path='*' element={<WrongPath />} />  {/* Yukarıdaki url'ler harici bu sayfaya gider */}
      </Routes>
    </>
  )
}

export default App
