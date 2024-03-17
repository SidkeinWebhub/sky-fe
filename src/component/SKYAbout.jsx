import React, {useEffect,useRef} from 'react'
import './css/skyabout.css'
import skyabout from '../assets/skyabout1.svg'
import skyabout1 from '../assets/skyabout.png'

function SKYAbout() {
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
    <div className="container-xxl py-5 mt-5 para">
    <div className="container">
        <div className="row g-5 align-items-center" ref={servicesRef}>
            <div className="col-lg-6 service1">
                <div className="row g-3 " > 
                    <div className="col-6 text-start ">
                        <img className=" sky-img rounded  "   src={skyabout} alt='about us'/>
                    </div>
                    <div className="col-6 text-start ">
                        
                    </div>
                    <div className="col-6 text-end ">
                       
                    </div>
                    <div className="col-6  ">
                        <img className=" sky-img1 rounded "  style={{marginTop: '-95%', marginLeft: '-95%'}}  src={skyabout1} alt='about us'/>
                    </div>
                </div>
            </div>
            <div className=" col-lg-6 service1">
                <h5 className="section-title ff-secondary text-start  fw-normal">About Us</h5>
                <h2 className="mb-4 ff-secondary ">Welcome to <i className="  me-2 ff-secondary service-title">SKY Engineering Enterprises</i></h2>
                <p className="mb-4">At SKY Engineering Enterprises, we're committed to excellence in engineering solutions tailored to meet your needs. With a rich history of innovation and a dedication to quality, we stand as a premier engineering concern, delivering cutting-edge services across various industries. </p>
                <h2 className="mb-4 ff-secondary "> <i className="  section-title ff-secondary text-start  fw-normal ">Who We Are</i></h2>
                <p className="mb-3">At SKY Engineering Enterprises, we are a team of seasoned professionals driven by a passion for engineering excellence. With a diverse skill set and extensive experience, we tackle projects of all sizes and complexities with precision and expertise. </p>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default SKYAbout
