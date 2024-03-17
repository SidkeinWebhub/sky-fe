import React from 'react'
import banner from '../assets/service2.jpeg'
import './css/works.css'

function WorksBanner() {
  return (
    <>
        <div className='cen-client mb-5'>
            <div className='container '>
            <div className="row" >
                <div className="col-lg-6 col-md-6 col-sm-12 "><h1 className='h-sky ff-secondary '>Our Works</h1></div>
                <div className="col-lg-6 col-md-6 col-sm-12 "> 
                    <img src={banner} className="work-banner float-end" alt="Building"></img>
                </div>
            </div>
            </div>
        </div>
        
    </> 
  )
}

export default WorksBanner
