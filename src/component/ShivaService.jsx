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
            <p className='mission-p mt-5 '>At Shiva Ganapathy Travels, We provide 5 seater, 7 seater, 14 seater, 54 seater vehicle for passengers, Commercial Vehicle such as Bolero camper, 1 MT INTRA V10/V20, 1.5 MT Bolero, LPT (Long Platform Truck) upto 18 MT Capacity on rental / hire basis to various industries.</p>
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
                                    <h4 className="title1 ff-secondary  fw-normal">Passenger Vehicle Rental</h4>
                                    <p><b>5-seater sedans:</b> Ideal for individuals or small groups looking for comfortable transportation for short-distance travel or airport transfers. <br />
                                    <b>7-seater SUVs:</b> Perfect for families or small groups requiring extra space and comfort for longer journeys or city tours. <br />
                                    <b>14-seater vans:</b> Suitable for medium-sized groups for outings, day trips, or corporate events, offering ample seating capacity and luggage space. <br />
                                    <b>54-seater buses:</b> Designed for large groups or corporate outings, providing spacious interiors and onboard amenities for extended trips or events.</p><br />
                                </div>
                            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon1} alt="icon" className='rounded mx-auto d-block' width={70}/>
                                   
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Commercial Vehicle Rental</h4>
                                    <p><b>Bolero camper:</b> Versatile utility vehicle suitable for various commercial applications, including transportation of equipment, or personnel to remote sites. <br />
                                    <b>1 MT INTRA V10/V20:</b> Compact and efficient commercial vehicle ideal for urban deliveries, small-scale logistics. <br />
                                    <b>1.5 MT Bolero:</b> Robust and reliable commercial vehicle suitable for medium-scale logistics, construction material transportation, or industrial operations. <br />
                                    <b>LPT (Long Platform Truck) up to 18 MT capacity:</b> Heavy-duty commercial vehicle capable of transporting large loads, machinery, or equipment for infrastructure projects.</p> <br />
                                </div>
                            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon2} alt="icon" className='icon3 rounded mx-auto d-block' width={58} />
                                   
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Industry-Specific Transportation Solutions</h4>
                                    <p><b>Oil & Gas Industries:</b> Tailored transportation services to support operations in the oil and gas sector, including personnel transportation to remote sites and project support. <br />
                                    <b>Pharma:</b> Customized transportation solutions for pharmaceutical companies, ensuring secure and timely delivery of medical supplies, samples to designated locations. <br />
                                    <b>Infrastructure Development Projects:</b> Dedicated transportation support for infrastructure development including construction site logistics, material transportation, and personnel movement management.</p> <br />
                                </div>
                            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon3} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Reliable and Well-Maintained Vehicles</h4>
                                    <p>All vehicles are regularly serviced and maintained to ensure optimal performance, safety, and reliability. <br />
                                    Routine inspections and maintenance checks conducted by qualified technicians to uphold vehicle standards and compliance regulations.</p>
                                </div>
                            </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon4} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Experienced Drivers</h4>
                                    <p>Professional drivers with extensive training and experience in passenger and commercial vehicle operation. <br />
                                    Courteous and knowledgeable drivers committed to providing safe, comfortable, and efficient transportation services for all passengers and cargo.</p>
                                </div>
                            </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
                            <div className="rn-address ">
                                <div className="icon  mx-auto d-block ">
                                    <img src={icon5} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                </div>
                                <div className="inner">
                                    <h4 className="title1 ff-secondary  fw-normal">Flexible Rental Options</h4>
                                    <p>Short-term and long-term rental options available to accommodate varying project durations, schedules, and requirements. <br />
                                    Flexible rental terms tailored to meet specific client needs, including daily, weekly, monthly, or custom rental packages.</p>
                                </div>
                            </div>
                 </div>
                 
         
            </div>
        </div>
  )
}

export default ShivaService
