import React from 'react'
import carabout from '../assets/carabout.jpg'

function ShivaAbout() {
  return (
    <div className='container mb-5 para'>
        <center className='pb-2  mb-5'>
                <h1 className='service-title1 ff-secondary  fw-normal'>About Us</h1>
            </center>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
            <h2 className="mb-4 ff-secondary  text-center">Welcome to <i className="  me-2 ff-secondary service-title">Shiva Ganapathy Travels!</i></h2>
            <p>At Shiva Ganapathy Travels, we specialize in providing top-notch car travel services that cater to all your transportation needs. Whether you're planning a leisurely weekend getaway, a business trip, or simply need a reliable ride to your destination, we are here to make your journey smooth, comfortable, and memorable.</p>
             
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12  inner" style={{marginTop: '10%'}}>
            <div className="col-12 text-center ">
              <img className=" rounded w-75 " 
                      src={carabout}  alt='about us' />
            </div> 
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12" style={{marginTop: '15%'}}>
            <figure>
                <blockquote className="blockquote">
                    <p className="  ff-secondary service-title">Explore in Comfort and Style!</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Experience the convenience of traveling in our fleet of well-maintained and luxurious vehicles. From elegant sedans to spacious SUVs, we offer a wide range of options to suit your preferences and travel requirements.
                </figcaption>
            </figure>
            <figure>
                <blockquote className="blockquote">
                    <p className="  ff-secondary service-title">Personalized Service, Every Time!</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    At Shiva Ganapathy Travels, we believe in delivering personalized service that exceeds your expectations. Our friendly and knowledgeable drivers are committed to providing you with a seamless and enjoyable travel experience from start to finish.
                </figcaption>
            </figure>
           
      </div>
    </div>
   </div>
  )
}

export default ShivaAbout
