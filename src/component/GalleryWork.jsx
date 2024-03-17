import React, {useEffect,useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import './css/gallerywork.css'
import gallery1 from '../assets/gallery1.jpeg'
import gallery2 from '../assets/gallery2.jpeg'
import gallery3 from '../assets/gallery3.jpeg'
import gallery4 from '../assets/gallery4.jpeg'
import gallery5 from '../assets/gallery5.jpeg'
import gallery6 from '../assets/gallery6.jpeg'
import gallery7 from '../assets/gallery7.jpeg'
import gallery8 from '../assets/gallery8.jpeg'
import gallery9 from '../assets/gallery9.jpeg'
import gallery10 from '../assets/gallery10.jpeg'
import gallery11 from '../assets/gallery11.jpeg'
import gallery12 from '../assets/gallery12.jpeg'
import gallery13 from '../assets/gallery13.jpeg'

function GalleryWork() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesRef.current) return;
      const { top, bottom } = servicesRef.current.getBoundingClientRect();

      const services = Array.from(servicesRef.current.children);

      if (top <= window.innerHeight && bottom >= 0) {
        for (let i = 0; i < services.length; i++) {
          setTimeout(() => {
            services[i].classList.add("active");
          }, 150 * i);
        }
      } else {
        services.forEach((service) => service.classList.remove("active"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
        <div className="container mt-5 pt-5 ">
        <div className="row " ref={servicesRef}>
            <center className=' ff-secondary  fw-normal service1'>
                <h1 className='service-title1 '>Our Works</h1>
                <p className='gallery-p mt-5 '>Our portfolio represents just a glimpse of the diverse projects we've undertaken. Whether it's engineering, construction, equipment rental, or travel services, we're dedicated to delivering exceptional results that exceed expectations. Explore our works and get inspired for your next project with SKY Groups. <br /> Contact us today to discuss your project requirements, learn more about our services, or request a quote. We're here to help you turn your vision into reality.</p>
            </center>
        </div>
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        loop= {true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper mb-5 "
      >
        <SwiperSlide>
          <img src={gallery1} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery3} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery4} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery5} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery6} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery7} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery8} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery9} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery10} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery11} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery12} alt='works=gallery' height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery13} alt='works=gallery' height={300}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default GalleryWork
