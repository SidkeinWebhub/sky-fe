import React from 'react'
import carani from '../assets/carani.png'
import icon from '../assets/caricon1.png'
import icon1 from '../assets/caricon2.png'
import icon2 from '../assets/caricon3.png'
import icon3 from '../assets/caricon4.png'
import icon4 from '../assets/caricon5.png'
import icon5 from '../assets/caricon6.png'

function ShivaService() {
  return (
    <div className=" container mb-5">
    <div className=" row">
        <div className=' ff-secondary  fw-normal '>
        <center className='  mb-2'>
                <h1 className='service-title1 ff-secondary  fw-normal'>Our Services</h1>
            </center>
            <p className='mission-p mt-5 '>At Shiva Ganapathy Travels, we offer a comprehensive range of car travel services designed to meet your needs and exceed your expectations.</p>
        </div>
        <div>
            <div className="row-1">
                <div className="image-container">
                    <img className="img" src={carani} alt="img" />
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Airport Transfers</h4>
                                    <p>Start and end your journey hassle-free with our reliable airport transfer services. Our professional drivers will ensure that you arrive at the airport on time and in comfort, and will be there to greet you upon your return.</p>
                                </div>
                            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon1} alt="icon" className='rounded mx-auto d-block' width={70}/>
                                   
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Point-to-Point Transfers</h4>
                                    <p>Whether you need a ride to a business meeting, a special event, or a night out on the town, we provide convenient point-to-point transfers to any destination of your choice.</p>
                                </div>
                            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon2} alt="icon" className='icon3 rounded mx-auto d-block' width={58} />
                                   
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">City Tours</h4>
                                    <p>Explore the sights and sounds of your destination with our personalized city tour services. Our knowledgeable drivers will take you to all the must-see attractions, hidden gems, and local hotspots, ensuring an unforgettable sightseeing experience.</p>
                                </div>
                            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon3} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Day Trips</h4>
                                    <p>Escape the city and discover nearby destinations with our day trip services. Whether you're craving a scenic drive through the countryside, a visit to a historic town, or a day of relaxation at the beach, we'll take you there and back safely and comfortably.</p>
                                </div>
                            </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon4} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Corporate Travel</h4>
                                    <p>Streamline your business travel with our corporate car services. From airport transfers to executive transportation, we provide reliable and professional transportation solutions for all your corporate needs.</p>
                                </div>
                            </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon5} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Special Occasions</h4>
                                    <p>Make your special occasions even more memorable with our chauffeur-driven car services. Whether it's a wedding, anniversary, birthday, or other milestone event, we'll ensure that you arrive in style and luxury.</p>
                                </div>
                            </div>
                 </div>
                 
         
            </div>
        </div>
  )
}

export default ShivaService
