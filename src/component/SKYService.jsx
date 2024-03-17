import React from 'react'
import './css/skyservice.css'
import icon5 from '../assets/icon5.png'
import icon from '../assets/icon1.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'
import icon10 from '../assets/icon10.png'
import icon11 from '../assets/icon11.png'
import icon12 from '../assets/icon12.png'
import icon13 from '../assets/icon13.png'
import icon14 from '../assets/icon14.png'
import icon15 from '../assets/icon15.png'
import icon16 from '../assets/icon16.png'
import icon17 from '../assets/icon17.png'
import icon18 from '../assets/icon18.png'
import icon19 from '../assets/icon19.png'
import icon20 from '../assets/icon20.png'
import icon21 from '../assets/icon21.png'
import icon22 from '../assets/icon22.png'
import icon23 from '../assets/icon23.png'
import icon24 from '../assets/icon24.png'
import icon25 from '../assets/icon25.png'
import icon26 from '../assets/icon26.png'
import icon27 from '../assets/icon27.png'
import skyservice1 from '../assets/skyservice1.png'
import skyservice2 from '../assets/skyservice2.png'
import skyservice3 from '../assets/skyservice3.png'
import skyservice4 from '../assets/skyservice4.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function SKYService() {
  return (
    <>
    <center className='  mb-2'>
                <h1 className='service-title1 ff-secondary  fw-normal'>Our Services</h1>
            </center>
    <div className="container  sky-service">
        <div className="row ">
            
           
            <div className="col-md-10 col-lg-9 col-sm-12 ">
              <center className='m-4 '>
                  <h1 className=' section-title ff-secondary  fw-normal '>Civil Engineering</h1>    
              </center>
              <p>Our Civil Engineering Services at SKY Engineering Enterprises are comprehensive and designed to cover various aspects of infrastructure development and management. </p>

              <Swiper
                slidesPerView={2}
                spaceBetween={-20}
                pagination={{
                  clickable: true,
                }}
                centeredSlides={false}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className='swiper1'>
                  <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon6} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Infrastructure Design</h4>
                        <p>We provide comprehensive civil engineering services for infrastructure projects, including roads, highways, bridges, tunnels, airports, and water supply systems, from concept to construction.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon7} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Construction Management</h4>
                        <p>Our construction management services ensure smooth project execution, including scheduling, budgeting, quality control, and safety management, to deliver projects on time and within budget.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon8} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Environmental Engineering</h4>
                        <p>We offer environmental engineering expertise, including environmental impact assessments, remediation plans, and sustainable design solutions, to minimize environmental impact and promote sustainability.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon9} alt="icon" className='rounded  d-block' width={40} height={60}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Geotechnical Engineering</h4>
                        <p>We perform site investigations to assess soil conditions, groundwater levels, and geological features, providing valuable data for foundation design and construction planning.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
             
            </div>
             <div className=" sky-service1 col-md-2 col-lg-3 col-sm-12 text-center">
             
                <img className=" sky-img2 "    src={skyservice1} alt='about us' />
                
            </div>
        </div>
    </div>

    <div className="container  sky-service">
        <div className="row ">
          <div className=" sky-service1 col-md-2 col-lg-3 col-sm-12 text-center">
             
             <img className=" sky-img3  "    src={skyservice2} alt='about us' />
             
          </div>
           
            <div className="col-md-10 col-lg-9 col-sm-12 ">
              <center className='m-4 '>
                  <h1 className=' section-title ff-secondary  fw-normal '>Mechanical Engineering</h1>    
              </center>
              <p>Here are the mechanical engineering services provided by SKY Engineering Enterprises. </p>

              <Swiper
                slidesPerView={2}
                spaceBetween={-20}
                pagination={{
                  clickable: true,
                }}
                centeredSlides={false}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className='swiper1'>
                  <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon5} alt="icon" className='rounded mx-auto d-block' width={50}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Conceptualization & Design</h4>
                        <p>Our team specializes in conceptualizing ideas and transforming them into viable mechanical designs. We work closely with clients to understand their requirements and develop innovative solutions that meet their needs.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon10} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Computer-Aided Design (CAD)</h4>
                        <p>Using the latest CAD software, we create detailed 2D and 3D models of mechanical components and systems. CAD allows us to visualize designs, identify potential issues, and make necessary modifications before prototyping.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon11} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Prototyping and Testing</h4>
                        <p>We offer prototyping services to create physical models of mechanical designs for testing and validation. Through rapid prototyping techniques, we can quickly iterate on designs, ensuring optimal performance and functionality.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon12} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Manufacturing Support</h4>
                        <p>Our team provides support throughout the manufacturing process, including material selection, tooling design, and production planning. We aim to optimize manufacturing processes to improve efficiency and reduce costs while maintaining quality standards.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon13} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Mechanical Systems Integration</h4>
                        <p>We specialize in integrating mechanical components into larger systems or products. Whether it's designing HVAC systems for buildings or integrating machinery for industrial applications, we ensure seamless integration and compatibility.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon14} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Documentation and Support</h4>
                        <p>We provide detailed documentation, including technical drawings, specifications, and user manuals, to support and maintenance of our mechanical engineering solutions. our team offers ongoing technical support to address any issues that may arise.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
             
            </div>
             
        </div>
    </div>

    <div className="container  sky-service">
        <div className="row ">
            
           
            <div className="col-md-10 col-lg-9 col-sm-12 ">
              <center className='m-4 '>
                  <h1 className=' section-title ff-secondary  fw-normal '>Structural Engineering</h1>    
              </center>
              <p>SKY Engineering Enterprises is dedicated to providing high-quality structural engineering services that meet the highest standards of excellence, innovation, and client satisfaction. Whether you're planning a new construction project, renovating an existing structure, or addressing structural issues, we have the expertise and resources to support your needs effectively.</p>

              <Swiper
                slidesPerView={2}
                spaceBetween={-20}
                pagination={{
                  clickable: true,
                }}
                centeredSlides={false}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className='swiper1'>
                  <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon15} alt="icon" className='rounded mx-auto d-block' width={55} height={70}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Structural Analysis and Design</h4>
                        <p> We provide comprehensive structural analysis and design services for a wide range of projects, including buildings, bridges, towers, and industrial structures. Our team utilizes advanced analytical tools and techniques to ensure structural integrity, stability, and safety.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon16} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Seismic Design and Retrofitting</h4>
                        <p> With expertise in seismic design and retrofitting, we help clients mitigate the risk of earthquake-induced damage to structures. Our seismic design solutions enhance structural resilience and compliance with building codes and standards in seismically active regions.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon17} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Foundation Design</h4>
                        <p> Our structural engineers specialize in the design of foundations, including shallow and deep foundations, pile foundations, and mat foundations. We conduct thorough geotechnical investigations to develop foundation solutions that support the structural loads and soil conditions.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon18} alt="icon" className='rounded  d-block' width={40} height={60}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Structural Rehabilitation and Strengthening</h4>
                        <p> We offer structural rehabilitation and strengthening services for existing structures to extend their service life, enhance performance, and meet current design standards. Our solutions may include adding reinforcements, retrofitting, or implementing structural repairs as needed.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon19} alt="icon" className='rounded  d-block' width={40} height={60}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Structural Inspection and Assessment</h4>
                        <p>  Our team conducts structural inspections and assessments to evaluate the condition and integrity of existing structures. Through non-destructive testing, visual inspections, and structural analysis, we identify deficiencies,  recommend necessary repairs or upgrades.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon20} alt="icon" className='rounded  d-block' width={40} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Building Information Modeling (BIM)</h4>
                        <p>  We leverage Building Information Modeling (BIM) technology to create accurate digital representations of structural elements and systems. BIM facilitates collaborative design, coordination, leading to more efficient project delivery and better-informed decision-making.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon21} alt="icon" className='rounded  d-block' width={40} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Specialized Structural Solutions</h4>
                        <p> In addition to standard structural engineering services, we offer specialized solutions for unique challenges special-purpose buildings, and innovative structural systems. Our team collaborates closely with clients to develop custom solutions that meet their specific project requirements.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
             
            </div>
             <div className=" sky-service1 col-md-2 col-lg-3 col-sm-12 text-center">
             
                <img className=" sky-img2 "    src={skyservice3} alt='about us' />
                
            </div>
        </div>
    </div>

    <div className="container  sky-service">
        <div className="row ">
          <div className=" sky-service1 col-md-2 col-lg-3 col-sm-12 text-center">
             
             <img className=" sky-img3  "    src={skyservice4} alt='about us' />
             
          </div>
           
            <div className="col-md-10 col-lg-9 col-sm-12 ">
              <center className='m-4 '>
                  <h1 className=' section-title ff-secondary  fw-normal '>Consulting Services</h1>    
              </center>
              <p>SKY Engineering Enterprises combines technical expertise, industry experience, and a client-focused approach to deliver comprehensive consulting services that address the unique needs and challenges of each project. </p>

              <Swiper
                slidesPerView={2}
                spaceBetween={-20}
                pagination={{
                  clickable: true,
                }}
                centeredSlides={false}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className='swiper1'>
                  <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon22} alt="icon" className='rounded mx-auto d-block' width={50}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Engineering Consulting</h4>
                        <p>Our engineering consulting services provide expert guidance and advice on a wide range of technical matters. We offer insights into engineering best practices, industry standards, and regulatory requirements.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon23} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Project Management</h4>
                        <p>SKY Engineering Enterprises offers project management services to oversee and coordinate engineering projects. Our project managers are skilled in scheduling, budgeting, resource allocation, and risk management.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon24} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Risk Assessment and Mitigation</h4>
                        <p>Our consulting team conducts comprehensive risk assessments to identify potential threats and vulnerabilities associated with projects. We analyze various factors, including technical, financial, and regulatory risks.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon25} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Feasibility Studies</h4>
                        <p>We conducts feasibility studies to assess the potential outcomes of projects. We evaluate technical, economic, and environmental factors to determine the project's feasibility and potential return on investment.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon26} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Technical Analysis and Troubleshooting</h4>
                        <p>Our team offers technical analysis and troubleshooting services to address engineering challenges. We leverage our expertise in various engineering disciplines to identify root causes and propose effective solutions.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon27} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Regulatory Compliance Assistance</h4>
                        <p>We helps clients navigate regulatory requirements and ensure compliance with applicable laws, codes, and standards. We provide guidance on regulatory frameworks and compliance audits to mitigate legal.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
             
            </div>
             
        </div>
    </div>
    </>
  )
}

export default SKYService
