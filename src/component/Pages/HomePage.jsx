import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import Banner from '../Banner';
import Service from '../Service';
import Service1 from '../Service1';
import GalleryWork from '../GalleryWork';
import WhyChooseUs from '../WhyChooseUs';
import Contact from '../Contact';
import Footer from '../Footer';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Navbar/>
        <Banner/>
        <Service/>
        <Service1/> 
        <WhyChooseUs/>
        <GalleryWork/>
        <Contact/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default HomePage
