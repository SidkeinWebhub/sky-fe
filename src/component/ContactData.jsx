import React from 'react'
import logo1 from '../assets/logocontact.png'
import logo2 from '../assets/logocontact1.png'
import logo3 from '../assets/logocontact2.png'

function ContactData() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="rn-address ">
                                    <div className="icon  mx-auto d-block ">
                                        <img src={logo1} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                    </div>
                                    <div className="inner mt-3">
                                        <h4 className="title1 ff-secondary  fw-normal">Phone Number</h4>
                                        <p className='text-center'>+91-9842384534</p>
                                    </div>
                                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="rn-address ">
                                    <div className="icon  mx-auto d-block ">
                                        <img src={logo2} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                    </div>
                                    <div className="inner mt-3">
                                        <h4 className="title1 ff-secondary  fw-normal">Email Address</h4>
                                        <p className='text-center'>kksengineeringcontractor@gmail.com</p>
                                    </div>
                                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="rn-address ">
                                    <div className="icon  mx-auto d-block ">
                                        <img src={logo3} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                    </div>
                                    <div className="inner mt-2">
                                        <h4 className="title1 ff-secondary  fw-normal">Location</h4>
                                        <p className='text-center'>T9 Block A,
                                            Leela towers,
                                            Kovilambakkam
                                            Opposite to mothers world 
                                            Chennai 600117</p>
                                    </div>
                                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactData
