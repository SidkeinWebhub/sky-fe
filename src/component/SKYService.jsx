import React from 'react'
import './css/skyservice.css'
import icon5 from '../assets/icon5.png'
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
import skyservice3 from '../assets/field.webp'
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
                  <h1 className=' section-title ff-secondary  fw-normal '>Design</h1>    
              </center>
              <p>Sky Engineering Design provides design services, likely encompassing conceptualization, planning, and creating the initial blueprints or models for various projects.</p>

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
                      <h4 className="title1 ff-secondary  fw-normal">Conceptualization</h4>
                        <p>This is the initial phase where Sky Engineering Design collaborates with clients to understand their vision, requirements, and objectives for the project. They may conduct feasibility studies, site surveys, and gather relevant data to inform the design process.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon7} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Planning</h4>
                        <p>Once the conceptual framework is established, Sky Engineering Design develops a detailed plan outlining the scope, goals, and milestones of the project. This plan serves as a roadmap for the design process, guiding the team through each stage from conception to completion. </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon8} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Creating Initial Blueprints or Models</h4>
                        <p>Using advanced software tools and their expertise, Sky Engineering Design translates conceptual ideas into tangible blueprints, models, or sketches. These initial designs serve as the foundation for the project, providing a visual representation of the proposed solution.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon9} alt="icon" className='rounded  d-block' width={40} height={60}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Iterative Design Process</h4>
                        <p>Design is an iterative process, and Sky Engineering Design embraces feedback and revisions throughout the development cycle. They collaborate closely with clients, architects, and other stakeholders to refine the design based on input, changes in requirements, or new insights. </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon9} alt="icon" className='rounded  d-block' width={40} height={60}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Compliance and Standards</h4>
                        <p>Sky Engineering Design adheres to relevant industry standards, codes, and regulations throughout the design process. They ensure that the design meets safety requirements, environmental regulations, and other legal obligations. </p>
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
                  <h1 className=' section-title ff-secondary  fw-normal '>Detail Engineering</h1>    
              </center>
              <p>This involves the meticulous planning and execution of engineering designs, ensuring that all aspects are thoroughly considered and detailed.</p>

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
                      <h4 className="title1 ff-secondary  fw-normal">Detailed Analysis</h4>
                        <p>Sky Engineering Design conducts a thorough analysis of the initial designs, considering factors such as structural integrity, load-bearing capacity, and environmental impact. They use advanced engineering tools and techniques to perform simulations, calculations, and feasibility.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon10} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Technical Specifications</h4>
                        <p>Sky Engineering Design develops detailed technical specifications outlining the materials, components, and construction methods required for the project. These specifications serve as a blueprint for procurement, construction, and quality control, ensuring consistency.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon11} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Engineering Drawings</h4>
                        <p>Sky Engineering Design creates precise engineering drawings, including plans, elevations, sections, and details, that provide a comprehensive representation of the design.These drawings serve as a communication tool for  contractors, fabricators, and other stakeholders involved in the construction process.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon12} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Risk Management</h4>
                        <p>Detail engineering involves identifying and mitigating potential risks that may arise during the construction phase. Sky Engineering Design conducts risk assessments, contingency planning, and value engineering to minimize project risks while maximizing value and efficiency. </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon13} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Coordination and Collaboration</h4>
                        <p>Sky Engineering Design collaborates closely with architects, contractors, suppliers, and other project stakeholders to coordinate design efforts and resolve any conflicts or discrepancies that may arise. They facilitate interdisciplinary communication, foster teamwork, and ensure alignment with project objectives and client expectations.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon14} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Quality Assurance and Control</h4>
                        <p>Throughout the detail engineering process, Sky Engineering Design implements rigorous quality assurance and control measures to maintain the highest standards of quality and performance. They conduct regular inspections, audits, and reviews to verify compliance with specifications, identify deviations, and implement corrective actions as needed.</p>
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
                  <h1 className=' section-title ff-secondary  fw-normal '>Field Change Design</h1>    
              </center>
              <p>Sky Engineering Design's expertise in Field Change Design enables them to efficiently adapt and adjust designs in response to these changes while minimizing disruption and maintaining project momentum. Here's a detailed explanation of their approach.</p>

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
                      <h4 className="title1 ff-secondary  fw-normal">Site Assessment</h4>
                        <p>Sky Engineering Design first conducts a thorough assessment of the site conditions, taking into account factors such as topography, soil stability, accessibility, and existing infrastructure. This assessment helps them understand the context and implications of the proposed changes and informs their decision-making process.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon16} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Impact Analysis</h4>
                        <p> Sky Engineering Design evaluates the potential impact of the proposed changes on various aspects of the project, including structural integrity, functionality, cost, schedule, and regulatory compliance. They use advanced modeling and simulation tools to analyze different scenarios and assess the feasibility and consequences of each option.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon17} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Design Modification</h4>
                        <p>Sky Engineering Design proposes appropriate modifications to the original design to accommodate the requested changes effectively. They leverage their expertise in engineering principles, construction techniques, and regulatory requirements to develop alternative solutions that meet the project objectives while addressing the new requirements or constraints.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon18} alt="icon" className='rounded  d-block' width={40} height={60}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Collaboration and Communication</h4>
                        <p>Sky Engineering Design collaborates closely with the project team, including architects, contractors, clients, and regulatory authorities, to discuss the proposed changes, solicit feedback, and obtain necessary approvals. They maintain open lines of communication and facilitate constructive dialogue to ensure alignment and consensus among stakeholders.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon19} alt="icon" className='rounded  d-block' width={40} height={60}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Documentation and Documentation</h4>
                        <p>Sky Engineering Design documents all field change requests, including the rationale, scope, impact, and resolution of each change. They update relevant drawings, specifications, and other project documentation to reflect the revised design accurately. This documentation helps maintain clarity, accountability, and traceability throughout the project lifecycle.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon20} alt="icon" className='rounded  d-block' width={40} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Implementation Support</h4>
                        <p>Sky Engineering Design provides on-site support and technical assistance during the implementation of field changes to ensure smooth execution and compliance with the revised design. They collaborate with contractors and subcontractors to address any challenges or issues that may arise during construction and monitor progress to ensure that the changes are implemented correctly and efficiently.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon21} alt="icon" className='rounded  d-block' width={40} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Quality Assurance and Control</h4>
                        <p>Throughout the Field Change Design process, Sky Engineering Design maintains a focus on quality assurance and control to ensure that the revised design meets the same rigorous standards as the original design. They conduct inspections, audits, and reviews to verify compliance with specifications, identify deviations, and address any quality concerns promptly.</p>
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
                  <h1 className=' section-title ff-secondary  fw-normal '>As-Built</h1>    
              </center>
              <p>After a project is completed, accurate as-built documentation is crucial for record-keeping and future reference. Sky Engineering Design probably provides services to create detailed as-built drawings reflecting the constructed reality.</p>

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
                      <h4 className="title1 ff-secondary  fw-normal">Site Verification</h4>
                        <p> Sky Engineering Design begins by conducting thorough site verification to assess the actual construction as compared to the original design. This involves physically inspecting the site, reviewing construction drawings and specifications, and documenting any deviations or modifications that were made during the construction process.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon23} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">Data Collection</h4>
                        <p>They collect data from various sources, including construction reports, field notes, photographs, and subcontractor documentation, to compile a comprehensive record of the as-built conditions. This may involve coordinating with project managers, contractors, and other stakeholders to gather all relevant information accurately.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1 ">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon24} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner">
                      <h4 className="title1 ff-secondary  fw-normal">As-Built Drawings</h4>
                        <p>Sky Engineering Design creates detailed as-built drawings that accurately reflect the final constructed reality of the project. These drawings typically include plans, elevations, sections, and details, highlighting any changes or deviations from the original design. They use industry-standard CAD software and drafting techniques to ensure clarity, accuracy, and consistency in the drawings.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon25} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Documentation Accuracy</h4>
                        <p>Sky Engineering Design pays close attention to detail to ensure that the as-built documentation accurately reflects the actual conditions of the project. They cross-reference multiple sources of information, verify measurements and dimensions on-site, and reconcile any discrepancies to maintain the integrity and reliability of the documentation.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon26} alt="icon" className='rounded mx-auto d-block' width={75}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Quality Assurance</h4>
                        <p>Sky Engineering Design implements rigorous quality assurance measures to ensure the accuracy and completeness of the final deliverables. They conduct internal reviews, peer audits, and validation checks to verify that the drawings meet the required standards and specifications.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon27} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Client Review and Approval</h4>
                        <p>Once the as-built drawings are prepared, Sky Engineering Design submits them to the client for review and approval. They accommodate any feedback or revisions requested by the client to ensure that the documentation meets their needs and expectations.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper1'>
                <div className="rn-address1">
                    <div className="icon  mx-auto d-block ">
                       <img src={icon27} alt="icon" className='rounded mx-auto d-block' width={75} height={70}/>
                    </div>
                    <div className="inner ">
                      <h4 className="title1 ff-secondary  fw-normal">Delivery and Archiving</h4>
                        <p>Sky Engineering Design delivers the final as-built documentation to the client in the desired format, whether digital or hardcopy. They also maintain archival copies of the drawings for future reference and use, ensuring that the information remains accessible and retrievable over the long term.</p>
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
