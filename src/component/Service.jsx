import React, {useEffect,useRef} from 'react'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpeg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/service4.jpg'
import './css/service.css'

function Service() {
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
    <div className="container-xxl py-5 mt-5 ">
    <div className="container">
        <div className="row g-5 align-items-center" >
            <div className="col-lg-6">
                <div className="row g-3 " ref={servicesRef}>
                    <div className="col-6 text-start service">
                        <img className="img-fluid rounded w-100 "  src={service1} alt='about us'/>
                    </div>
                    <div className="col-6 text-start service">
                        <img className="img-fluid rounded w-75 " 
                        src={service2} style={{marginTop: '25%'}} alt='about us'/>
                    </div>
                    <div className="col-6 text-end service">
                        <img className="img-fluid rounded w-75"  src={service3} alt='about us'/>
                    </div>
                    <div className="col-6 text-end service">
                        <img className="img-fluid rounded w-100 "  src={service4} alt='about us'/>
                    </div>
                </div>
            </div>
            <div className=" col-lg-6 para">
                <h5 className="section-title ff-secondary text-start  fw-normal">About Us</h5>
                <h1 className="mb-4 ff-secondary ">Welcome to <i className="  me-2 ff-secondary service-title">SKY Groups</i></h1>
                <p className="mb-4">Our SKY Groups brings together the collective expertise of four leading companies, each specializing in different fields but united by a shared commitment to excellence and customer satisfaction. </p>
                <p className="mb-4">With a focus on innovation, quality, and reliability, we aim to provide comprehensive solutions that exceed the expectations of our clients across various industries.
                </p>

                <figure>
                    <blockquote className="blockquote">
                        <p>SKY Engineering Enterprises - Engineering Concern</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                    SKY Engineering Enterprises is dedicated to providing top-tier engineering solutions tailored to meet the unique needs of our clients.
                    </figcaption>
                </figure>
                <figure>
                    <blockquote className="blockquote">
                        <p>KKS Engineering and Contractor - Civil and Mechanical Construction</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                    KKS Engineering and Contractor specializes in civil and mechanical construction projects, offering a wide range of services to bring our clients' visions to life. 
                    </figcaption>
                </figure>
                <figure>
                    <blockquote className="blockquote">
                        <p>Vinoveda Enterprises - Industrial Hiring Services</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                    Vinoveda Enterprises offers a wide selection of construction equipment and machinery available for rent.
                    </figcaption>
                </figure>
                <figure>
                    <blockquote className="blockquote">
                        <p>Shiva Ganapathy Travels - Travel Services</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                    Shiva Ganapathy Travels is your gateway to unforgettable journeys and seamless travel experiences. 
                    </figcaption>
                </figure>
                {/* <div class="row g-4 mb-4">
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                            <div class="ps-4">
                                <p class="mb-0">Years of</p>
                                <h6 class="text-uppercase mb-0">Experience</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                            <div class="ps-4">
                                <p class="mb-0">Popular</p>
                                <h6 class="text-uppercase mb-0">Master Chefs</h6>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <a class="btn btn-outline-secondary py-3 px-5 mt-2" href="">Read More</a> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default Service
