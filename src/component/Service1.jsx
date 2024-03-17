import React, {useEffect,useRef} from 'react'
import './css/service1.css'

function Service1() {
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
    <div className="container specify ">
        <div className="row " ref={servicesRef}>
            <center className=' ff-secondary  fw-normal '>
                <h1 className='service-title1'>Our Services</h1>
            </center>
            <div className="col-md-6 col-lg-3 col-sm-12 service1">
                <div className="flip-card ">
                    <div className="flip-card-inner">
                        <div className="flip-card-front flip-card-image1">
                            <p className="title ff-secondary  text-end me-3">SKY Engineering Enterprises</p>
                            <p className="text-end me-3">Engineering Concern</p>
                        </div>
                        <div className="flip-card-back para p-4">
                            <p>Explore our range of engineering services provided by SKY Engineering Enterprises, tailored to meet the demands of various industries. From mechanical to electrical engineering, we have the expertise to support your projects.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 service1">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front flip-card-image2">
                            <p className="title ff-secondary text-end me-3">KKS Engineering and Contractor</p>
                            <p className="text-end me-3">Civil and Mechanical Construction</p>
                        </div>
                        <div className="flip-card-back para p-4">
                            <p>Partner with KKS Engineering and Contractor for top-tier civil and mechanical construction services. With a commitment to quality craftsmanship and timely delivery, we ensure your projects are completed to the highest standards.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 service1">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front flip-card-image3">
                            <p className="title ff-secondary text-end me-3">Vinoveda Enterprises</p>
                            <p className="me-3  text-end ">Industrial Hiring Services</p>
                        </div>
                        <div className="flip-card-back para p-4">
                            <p>Vinoveda Enterprises offers a wide selection of construction equipment and machinery available for rent. From excavators to generators, we provide flexible rental options to meet your project requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 service1">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front flip-card-image4">
                            <p className="title ff-secondary text-end me-3">Shiva Ganapathy Travels</p>
                            <p className="text-end me-3">Travel Services</p>
                        </div>
                        <div className="flip-card-back para p-4">
                            <p>At Shiva Ganapathy Travels, we understand that every journey is an adventure waiting to unfold. That's why we are dedicated to providing you with the ultimate car travel experience, ensuring comfort, convenience, and reliability every step of the way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service1
