import React, {useEffect,useRef} from 'react'
import './css/whychooseus.css'
import choose1 from '../assets/choose1.png'
import choose2 from '../assets/choose2.png'
import choose3 from '../assets/choose3.png'
import choose4 from '../assets/choose4.png'

function WhyChooseUs() {
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
    <div className='choose mt-5 ' >
        <div className="choose-container container">
            <div className="row " ref={servicesRef}>
                <center className='aboutH2  ff-secondary  fw-normal'>
                    <h1 className='service-title2'>Why Choose Us</h1>
                </center>
                <div className="value-card col-md-6 col-lg-3 col-sm-12 text-center service2">
                    <div className='value-card1 '>
                        <img src={choose1} alt="choose logo" width={100} />
                        <h3 className=' ff-secondary  fw-normal  mb-4 pb-3'>Comprehensive Solutions</h3>
                        <p className='para mt-3'>At SKY Groups, we understand that managing multiple service providers for your projects can be time-consuming and complex. That's why we offer a comprehensive suite of services all under one roof. Whether you need engineering expertise, construction services, equipment rental, or travel arrangements, you can count on us to provide seamless integration and convenience.</p>
                    </div>
                </div>
                <div className="value-card col-md-6 col-lg-3 col-sm-12 text-center mt-2 service2">
                    <div className='value-card1'>
                        <img src={choose2} alt="choose logo " width={80} />
                        <h3 className='mt-3 mb-4 pb-3 ff-secondary  fw-normal'>Expert Collaboration</h3>
                        <p className='para'>When you choose SKY Groups, you're not just getting a service provider – you're gaining access to a network of industry-leading enterprises with specialized knowledge and expertise. Our team comprises seasoned professionals who are experts in their respective fields, from engineering and construction to equipment rental and travel services.</p>
                    </div>
                    
                </div>
                <div className="value-card col-md-6 col-lg-3 col-sm-12 text-center mt-2 service2">
                    <div className='value-card1'>
                        <img src={choose3} alt="choose logo" width={100} />
                        <h3 className='mt-4  ff-secondary  fw-normal mb-4 pb-3 '>Reliability & Flexibility</h3>
                        <p className='para'>Reliability is at the core of everything we do at SKY Groups. We are committed to delivering exceptional results that exceed our clients' expectations, every time. Whether it's meeting project deadlines, adhering to quality standards, or providing responsive customer service, you can trust us to deliver on our promises.</p>
                    </div> 
                </div>
                <div className="value-card col-md-6 col-lg-3 col-sm-12 text-center  service2">
                    <div className='value-card1'>
                        <img src={choose4} alt="choose logo" width={100} className='choose-img4'/>
                        <h3 className='mb-4 pb-3 ff-secondary  fw-normal'>24/7 Support</h3>
                        <p className='para  pt-1'>At SKY Groups, we believe in providing exceptional customer service that goes above and beyond. That's why our dedicated team is available 24/7 to assist you with any questions, concerns, or support needs you may have. With SKY Groups, you're not just a client – you're a valued partner, and we're here to support you every step of the way.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs
