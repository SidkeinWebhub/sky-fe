import React from 'react'
import contactbanner from '../assets/contactbanner.png'

function ContactBanner() {
  return (
    <>
    <div className='cen-client mb-5'>
        <div className='container '>
        <div className="row" >
            <div className="col-lg-6 col-md-6 col-sm-12 "><h1 className='h-sky ff-secondary '>Contact Us</h1></div>
            <div className="col-lg-6 col-md-6 col-sm-12 "> 
                <img src={contactbanner} height={300} width={400} 
            className="build-img float-end" alt="Building"></img>
            </div>
        </div>
        </div>
    </div>
    
</> 
  )
}

export default ContactBanner
