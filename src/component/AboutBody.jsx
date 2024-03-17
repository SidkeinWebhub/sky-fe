import React from 'react'
import './css/aboutbody.css'
import value from '../assets/value.png'
import icon from '../assets/icon1.png'
import icon1 from '../assets/icon2.png'
import icon2 from '../assets/icon3.png'
import icon3 from '../assets/icon4.png'

function AboutBody() {
  return (
    <div className="mission-container container ">
        <div className=" row">
            <div className=' ff-secondary  fw-normal '>
                <h1 className='mission-bg text-lg-center text-md-end text-sm-end text-xl-center '>Our Mission & Values</h1>
                <p className='mission-p mt-5 '>At SKY Groups, we bring together a diverse range of expertise to provide integrated solutions tailored to your needs. With a commitment to excellence, innovation, and customer satisfaction, we are your trusted partner for success. <br /> At SKY Groups, our mission is to empower businesses and individuals by providing seamless access to a wide range of services under one roof. We strive to simplify complexity, enhance efficiency, and drive innovation in every project we undertake. Our goal is to create value and exceed expectations, helping our clients achieve their objectives and unlock new possibilities.</p>
            </div>
            <div><img src={value} alt="value bg" className='rounded mx-auto d-block value-img'/></div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt-2">
                                <div className="rn-address ">
                                    <div className="icon  mx-auto d-block ">
                                        <img src={icon} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title1 ff-secondary  fw-normal">Excellence</h4>
                                        <p>We are committed to delivering excellence in everything we do, setting high standards for quality, performance, and customer satisfaction.</p>
                                    </div>
                                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt-2">
                                <div className="rn-address ">
                                    <div className="icon  mx-auto d-block ">
                                        <img src={icon1} alt="icon" className='rounded mx-auto d-block' width={70}/>
                                       
                                    </div>
                                    <div className="inner">
                                        <h4 className="title1 ff-secondary  fw-normal">Innovation</h4>
                                        <p> We embrace innovation as a driving force for progress, constantly seeking new ways to improve and add value to our services.</p>
                                    </div>
                                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt-2">
                                <div className="rn-address ">
                                    <div className="icon  mx-auto d-block ">
                                        <img src={icon2} alt="icon" className='icon3 rounded mx-auto d-block' width={58} />
                                       
                                    </div>
                                    <div className="inner">
                                        <h4 className="title1 ff-secondary  fw-normal">Integrity</h4>
                                        <p>We conduct business with honesty, transparency, and integrity, upholding the highest ethical standards in all our interactions.</p>
                                    </div>
                                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt-2">
                                <div className="rn-address ">
                                    <div className="icon  mx-auto d-block ">
                                        <img src={icon3} alt="icon" className='rounded mx-auto d-block' width={75}/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title1 ff-secondary  fw-normal">Customer Focus</h4>
                                        <p>We prioritize the needs and satisfaction of our customers, striving to exceed their expectations and deliver exceptional value in every interaction.</p>
                                    </div>
                                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutBody
