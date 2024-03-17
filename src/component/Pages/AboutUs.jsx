import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import About from '../About';
import Service from '../Service';
import AboutBody from '../AboutBody';
import Footer from '../Footer';

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Navbar/>
        <About/>
        <Service/>
        <AboutBody/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default AboutUs
