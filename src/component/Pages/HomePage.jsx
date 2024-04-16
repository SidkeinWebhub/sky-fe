import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Suspense } from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner';
import Service from '../Service';
import Service1 from '../Service1';
import GalleryWork from '../GalleryWork';
import WhyChooseUs from '../WhyChooseUs';
import Contact from '../Contact';
import Footer from '../Footer';
import Loading from '../Loading';
import Clients from '../Clients';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Suspense fallback={<Loading />}>
        <Navbar/>
        <Banner/>
        <Service/>
        <Service1/> 
        <WhyChooseUs/>
        <GalleryWork/>
        <Contact/>
        <Clients/>
        {/* <Loading /> */}
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
      </Suspense>
    </>
  )
}

export default HomePage
