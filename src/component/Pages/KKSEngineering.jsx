import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import KKSBanner from '../KKSBanner'
import KKSAbout from '../KKSAbout'
import KKSService from '../KKSService'
import Footer from '../Footer';

function KKSEngineering() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Navbar/>
        <KKSBanner/>
        <KKSAbout/>
        <KKSService/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default KKSEngineering
