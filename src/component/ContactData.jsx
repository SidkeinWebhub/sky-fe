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
                                        <h4 className="title1 ff-secondary  fw-normal">Phone Number</h4><hr />
                                        <p className='text-center'>+91 78459 02477</p> <br />
                                        <p className='text-center'>+91 78459 20477</p> <br />
                                        <p className='text-center'>+91 98417 96660</p> <br />
                                        <p className='text-center'>+91 97505 42802</p>
                                    </div>
                                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="rn-address ">
                                    <div className="icon  mx-auto d-block ">
                                        <img src={logo2} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                    </div>
                                    <div className="inner mt-3">
                                        <h4 className="title1 ff-secondary  fw-normal">Email Address</h4> <hr />
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
                                        <h4 className="title1 ff-secondary  fw-normal">Location</h4> <hr />
                                        <p className='text-center'>PLOT NO 02 & 03 ALUKRISH AVENUE, MANGALAM VILLAGE, MADURANTAKAM TALUK, CHENGALPATTU DISTRICT, TAMIL NADU 603107</p>
                                        <br />
                                        <p className='text-center'>NO 03 FIRST FLOOR, KAMMALAR STREET, NELLI VILLAGE, PALLIYAGARAM POST, MADURANTAKAM TALUK, CHENGALPATTU DISTRICT, TAMIL NADU 603107</p>
                                        <br /> <br />
                                    </div>
                                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactData
