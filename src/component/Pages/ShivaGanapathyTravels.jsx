import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import ShivaBanner from '../ShivaBanner';
import ShivaAbout from '../ShivaAbout';
import ShivaService from '../ShivaService';
import Footer from '../Footer4';

function ShivaGanapathyTravels() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Navbar/>
        <ShivaBanner/>
        <ShivaAbout/>
        <ShivaService/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default ShivaGanapathyTravels
