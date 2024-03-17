import React from 'react'
import './css/about.css'
import banner from '../assets/banner3.png'

function About() {
  return (
    <>
        <div className='cen-client mb-5'>
            {/* <h1 className='h-client ff-secondary '>About Us</h1>
            <img src={banner} height={300} width={360} 
            className="cap-img   float-end" alt="cap"></img> */}
            <div className='container '>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12"><h1 className='h-client ff-secondary '>About Us</h1></div>
                <div className="col-lg-6 col-md-6 col-sm-12"> <img src={banner} height={300} 
            className="cap-img  " alt="cap"></img></div>
            </div>
            </div>
        </div>
        
    </> 
  )
}

export default About
