import React from 'react'
import vinoabout from '../assets/vinovedaabout.png'
import vinoabout1 from '../assets/vinovedaabout1.svg'
import './css/vinoveda.css'

function VinovedaAbout() {
  return (
    <div className="container-xxl py-5 mt-5 ">
    <div className="container">
        <div className="row g-5 align-items-center" >
            
            <div className=" col-lg-6 vono-about">
                <h5 className="section-title ff-secondary text-start  fw-normal">About Us</h5>
                <h2 className="mb-4 ff-secondary ">Welcome to <i className="  me-2 ff-secondary service-title">Vinoveda Enterprises</i></h2>
                <p className="mb-4 ">At Vinoveda Enterprises, we take pride in being your trusted partner for all your equipment rental needs. With a focus on reliability, quality, and customer satisfaction, we strive to provide top-notch equipment rental solutions that meet the diverse requirements of our clients across various industries.</p>
                <h2 className="mb-4 ff-secondary "> <i className="  section-title ff-secondary text-start  fw-normal ">Who We Are</i></h2>
                <p className="mb-3">Since 2019 we are providing various industrial equipment’s on hire / rental basis to Oil & Gas Industries, Pharma, Infrastructure development projects.
We provide Dozer, Excavator, Breaker, Loader, Grader, Back hoe, Diesel Generator upto 125 KVA, Compressor upto 500 CFM, De-watering pumps, Trailer, Tractor with required mounted attachment.   
</p>
                <h2 className="mb-4 ff-secondary "> <i className="  section-title ff-secondary text-start  fw-normal ">Our Commitment</i></h2>
                <p className="mb-3">At Vinoveda Enterprises, we are committed to exceeding our clients' expectations by delivering exceptional service and top-of-the-line equipment. Our commitment to quality and reliability is evident in everything we do, from our extensive equipment inventory to our dedicated team of professionals.</p>
                
            </div>

            <div className="col-lg-6 ">
                <div className="row g-3 " > 
                    <div className="col-6 text-start ">
                        <img className="vino-img  rounded  "   src={vinoabout} alt='about us'/>
                    </div>
                    <div className="col-6 text-start ">
                        
                    </div>
                    <div className="col-6 text-end ">
                       
                    </div>
                    <div className="col-6  ">
                        <img className=" vino-img1 rounded "  style={{marginTop: '-120%', marginLeft: '-95%'}}  src={vinoabout1} alt='about us'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default VinovedaAbout
