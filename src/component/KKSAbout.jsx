import React from 'react'
import kksabout from '../assets/gallery12.jpeg'
import kksabout1 from '../assets/gallery4.jpeg'

function KKSAbout() {
  return (
    <div className=' mb-5 pt-5'>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="col-12 text-start ">
                <img className=" rounded w-75 "  src={kksabout} alt='about us' />
            </div>    
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12  inner" style={{marginTop: '5%'}}>
            <h2 className="mb-4 ff-secondary  text-center">Welcome to <i className="  me-2 ff-secondary service-title">KKS Engineering and Contractor!</i></h2>
            <p className='p-4'>At KKS Engineering and Contractor, we specialize in providing exceptional civil and mechanical construction services tailored to meet the unique needs of our clients. With years of experience in the industry, our team is dedicated to delivering top-quality projects on time and within budget.</p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div className="col-12  ">
                <img className=" rounded w-75  float-end " 
                        src={kksabout1} style={{marginTop: '25%'}} alt='about us' />
            </div>  
        </div>
      </div>
     </div>
  )
}

export default KKSAbout
