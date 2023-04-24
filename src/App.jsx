import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from ".//components/Home"
import AboutUs from ".//components/AboutUs"
import Navbar from './components/Navbar'
import Mission from './components/Mission'
import WrongPath from './components/WrongPath'
import History from './components/History'
import Team from ".//components/Team"
import Company from ".//components/Company"


function App() {

  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />  {/* Bu şekilde direk localhost da çalışır */}
        <Route path='/aboutUs' element={<AboutUs />} />  {/* Bu şekilde url'yi belirtiriz */}
        <Route path='/mission' element={<Mission />} />
        <Route path='/history' element={<History/>}>
          <Route path='company' element={<Company/>}/>  {/* Bunun gibi child path lerin başına / koyunca hata veriyor*/}
          <Route path='team' element={<Team/>}/>
        </Route>
        <Route path='*' element={<WrongPath />} />  {/* Yukarıdaki url'ler harici bu sayfaya gider */}
      </Routes>
    </>
  )
}

export default App
