import React from 'react'
import kksservice from '../assets/kksservice1.svg'
import './css/kksservice.css'
import kksservice1 from '../assets/banner1.png'
import icon31 from '../assets/icon31.png'
import icon32 from '../assets/icon32.png'
import icon33 from '../assets/icon33.png'
import icon34 from '../assets/icon34.png'
import icon35 from '../assets/icon35.png'
import icon36 from '../assets/icon36.png'
import icon37 from '../assets/icon37.png'
import icon38 from '../assets/icon38.png'
import icon39 from '../assets/icon39.png'
import icon40 from '../assets/icon40.png'
import icon41 from '../assets/icon41.png'

function KKSService() {
  return (
    <>
        <center className='  mb-2'>
            <h1 className='service-title1 ff-secondary  fw-normal'>Our Services</h1>
        </center>
        <div className="container ">
        <div className="row ">
            
           
            <div className="col-md-9 col-lg-9 col-sm-12 ">
              <center className='mt-5 mb-4 '>
                  <h1 className=' section-title ff-secondary  fw-normal '>Civil Construction</h1>    
              </center>
              {/* <p>Here's a more detailed breakdown of our services</p> */}
                <div className="row  m-5 ">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div id="carouselExampleFade" className=" carousel slide  carousel-dark" >
                        <div className="carousel-inner " >
                        <div className="carousel-item active mt-4" >
                        <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon31} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal mb-4">Site Preparation</h4>
                            <p>Clearing, grading, and leveling of land to prepare it for construction.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon32} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal">Infrastructure Development</h4>
                            <p>Building roads, highways, bridges, and other essential infrastructure to connect communities and facilitate transportation.</p>
                        </div>
                        </div>
                        
                        
                    </div>
                    </div>
                    
                        </div>
                        <div className="carousel-item mt-4" >
                        <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon33} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal mb-4">Commercial & Residential Developments</h4>
                            <p>From small-scale residential projects to large commercial developments, we have the expertise to handle projects of any size.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon34} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal">Earthworks</h4>
                            <p>Excavation, backfilling, and compaction to prepare the ground for construction.</p>
                        </div>
                        </div>
                        
                        
                    </div>
                    </div>
                    
                        </div>
                        <div className="carousel-item mt-4" >
                        <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon35} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal mb-4">Utilities Installation</h4>
                            <p>Installation of water, sewer, and drainage systems to ensure efficient and reliable utility services for buildings and communities.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon36} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal">Landscaping & Beautification</h4>
                            <p>Design and implementation of landscaping and beautification projects to enhance the aesthetic appeal of properties and public spaces.</p>
                        </div>
                        </div>
                        
                        
                    </div>
                    </div>
                    
                        </div>
                        </div>
                        <button className="carouselButton carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carouselButton1 carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                        
                    </div>
            
                </div>
                  
             
            </div>
             <div className="  col-md-3 col-lg-3 col-sm-12 text-center">
                <img className="kks-img " src={kksservice} alt='about us' />  
            </div>
        </div>
        </div>

        <div className="container ">
        <div className="row ">
            
            <div className="  col-md-3 col-lg-3 col-sm-12 text-center">
                
                <img className=" kks-img "    src={kksservice1} alt='about us' />
                
            </div>

            <div className="col-md-9 col-lg-9 col-sm-12 ">
              <center className='mt-5 mb-4 '>
                  <h1 className=' section-title ff-secondary  fw-normal '>Mechanical Construction</h1>    
              </center>
    
                <div className="row  m-5 ">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div id="carouselExampleFade1" className=" carousel slide  carousel-dark" >
                        <div className="carousel-inner " >
                        <div className="carousel-item active mt-4" >
                        <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon37} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal mb-4">HVAC Installation</h4>
                            <p>Design and installation of heating, ventilation, and air conditioning systems for commercial, industrial, and residential buildings.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon38} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal">Piping Systems</h4>
                            <p>Fabrication and installation of piping systems for water, gas, steam, and other fluids in industrial facilities, commercial buildings, and residential properties.</p>
                        </div>
                        </div>
                        
                        
                    </div>
                    </div>
                    
                        </div>
                        <div className="carousel-item mt-4" >
                        <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon39} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal mb-4">Equipment Installation</h4>
                            <p>Installation of mechanical equipment such as boilers, chillers, pumps, and compressors to support various industrial processes and building operations.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon40} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal">Plumbing</h4>
                            <p>Installation of plumbing systems for residential, commercial, and industrial buildings, including piping, fixtures, and fittings.</p>
                        </div>
                        </div>
                        
                        
                    </div>
                    </div>
                    
                        </div>
                        <div className="carousel-item mt-4" >
                        <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="rn-address ">
                        <div className="icon  mx-auto d-block ">
                        <img src={icon41} alt="icon" className='rounded mx-auto d-block' width={75}/>
                        </div>
                        <div className="inner">
                        <h4 className="title1 ff-secondary  fw-normal mb-4">Fire Protection Systems</h4>
                            <p>Design and installation of fire sprinkler systems, fire alarms, and other fire protection systems to ensure the safety of occupants and assets in buildings.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                        </div>
                        </div>
                        <button className="carouselButton carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carouselButton1 carousel-control-next" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                        
                    </div>
            
                </div>
                  
             
            </div>
        </div>
        </div>
    </>
  )
}

export default KKSService
