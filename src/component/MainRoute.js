import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Works from './Pages/OurWorks'
import KKSEngineering from './Pages/KKSEngineering'
import SKYEngineering from './Pages/SKYEngineering'
import Vinoveda from './Pages/VinovedaEnterprises'
import ShivaGanapathy from './Pages/ShivaGanapathyTravels'
import ScrollToTop from './ScroolToTop'

function MainRoute() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path={`/about`} element={<AboutUs/>} />
            <Route path={`/SKYEngineering`} element={<SKYEngineering/>} />
            <Route path={`/KKSEngineering`} element={<KKSEngineering/>} />
            <Route path={`/Vinoveda`} element={<Vinoveda/>} />
            <Route path={`/ShivaGanapathy`} element={<ShivaGanapathy/>} />
            <Route path={`/works`} element={<Works/>} />
            <Route path={`/contact`} element={<ContactUs/>} />
            
        </Routes>
        <ScrollToTop/>
    </Router>  
  )
}

export default MainRoute
