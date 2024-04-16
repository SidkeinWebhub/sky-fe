import React from 'react'
import { NavLink } from 'react-router-dom'
import lt from '../assets/lt.png'
import nrp from '../assets/NRP.png'
import swiss from '../assets/Swiss Garnier.png'
import agp from '../assets/AG&P Pratham.png'
import './css/client.css'

function Clients() {
  return (
    <>
    
    <div className=" container mb-5 pb-5 ">
        
        <center className=''>
            <h1 className=' service-title1 ff-secondary  fw-normal  pt-5 '>Our Clients</h1>
        </center>
        <div className="client-bg row pt-5 content">
            
            <div className="col-md-6 col-lg-3 col-sm-6">
            <NavLink to={`https://www.agppratham.com/`} className="nav-link">
            <div className="slide4 ">
                <img src={agp} className="rounded mx-auto d-block" alt="agp" />
            </div>
            </NavLink>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
            <NavLink to={`https://www.swissgarnier.com/index.php`} className="nav-link">
            <div className="slide4">
                <img src={swiss} className="rounded mx-auto d-block" alt="swiss" /> 
            </div>
            </NavLink>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
            <NavLink to={`https://www.nrpprojects.in`} className="nav-link">
            <div className="slide4">
                <img src={nrp} className="rounded mx-auto d-block" alt="nrp" /> 
            </div>
            </NavLink>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
            <NavLink to={`https://www.larsentoubro.com`} className="nav-link">
            <div className="slide4">
                <img src={lt}  className="rounded mx-auto d-block" alt="l&t" />
            </div>
            </NavLink>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Clients
