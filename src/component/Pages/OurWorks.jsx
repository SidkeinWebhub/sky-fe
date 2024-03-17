import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import WorksBanner from '../WorksBanner';
import GalleryWork from '../GalleryWork';
import Footer from '../Footer';

function OurWorks() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Navbar/>
        <WorksBanner/>
        <GalleryWork/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default OurWorks
