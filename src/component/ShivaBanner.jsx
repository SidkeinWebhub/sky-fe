import React from 'react'
import banner1 from '../assets/shivabanner.svg'
import './css/shiva.css'

function ShivaBanner() {
  return (
    <>
    <div className='cen-client mb-5'>
        <div className='container '>
        <div className="row" >
            <div className="col-lg-6 col-md-6 col-sm-12 "><h1 className='h-sky ff-secondary '>Shiva Ganapathy Travels</h1></div>
            <div className="col-lg-6 col-md-6 col-sm-12 "> <img src={banner1} height={300} width={500} 
        className="build-img float-end" alt="Building"></img></div>
        </div>
        </div>
    </div>
   
</> 
  )
}

export default ShivaBanner
