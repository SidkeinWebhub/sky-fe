import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import ContactBanner from '../ContactBanner';
import ContactData from '../ContactData';
import Contact from '../Contact';
import Map from '../Map';
import Footer from '../Footer';

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Navbar/>
        <ContactBanner/>
        <ContactData/>
        <Contact/>
        <Map/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default ContactUs
