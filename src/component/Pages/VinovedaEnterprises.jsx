import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import VinovedaBanner from '../VinovedaBanner';
import VinovedaAbout from '../VinovedaAbout';
import VinovedaService from '../VinovedaService';
import Footer from '../Footer3';

function VinovedaEnterprises() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Navbar/>
        <VinovedaBanner/>
        <VinovedaAbout/>
        <VinovedaService/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default VinovedaEnterprises
