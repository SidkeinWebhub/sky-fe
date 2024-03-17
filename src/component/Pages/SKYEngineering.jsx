import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import SKYBanner from '../SKYBanner';
import SKYAbout from '../SKYAbout';
import SKYService from '../SKYService';
import Footer from '../Footer';

function SKYEngineering() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Navbar/>
        <SKYBanner/>
        <SKYAbout/>
        <SKYService/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default SKYEngineering
