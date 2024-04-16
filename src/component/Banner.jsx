import React from 'react'
import { NavLink } from 'react-router-dom'
import banner1 from '../assets/banner6.png'
import banner2 from '../assets/banner9.svg'
import banner3 from '../assets/banner8.png'
import banner4 from '../assets/banner4.png'
import './css/banner.css'

function Banner() {
  return (
    <div id="carouselExampleFade" className="banner-bg carousel slide  carousel-dark" data-bs-ride="carousel" data-bs-pause="false" >
  <div className="carousel-inner" >
    <div className="carousel-item active" data-bs-interval="4000">
      <img src={banner1}  
      className="gear-img1 d-block rounded  mx-auto" alt="..."></img>
      <div className="carousel-caption  text-light text-start">
        <h3 className='banner-text'><i>SKY Engineering Design</i></h3>
        <p>At SKY Engineering Design, we're committed to excellence in engineering solutions tailored to meet your needs. 
        <NavLink to={`/SKYEngineering`} className='nav-link text-start pt-2'>
          <button className="button1">Explore Now !</button>
        </NavLink>
        </p>
        
        {/* <button class="button">Explore Now !</button> */}
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={banner2}  className="gear-img1 d-block rounded mx-auto" alt="..."></img>
      <div className="carousel-caption  text-light text-start">
        <h3 className='banner-text'> <i>KKS Engineering and Contractor</i></h3>
        <p>At KKS Engineering and Contractor, we specialize in providing exceptional civil and mechanical construction services tailored to meet the unique needs of our clients.
        <NavLink to={`/KKSEngineering`} className='nav-link text-start pt-2'>
          <button className="button1">Explore Now !</button>
        </NavLink>
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={banner3}  className="gear-img1 d-block rounded  mx-auto" alt="..."></img>
      <div className="carousel-caption  text-light text-start">
        <h3 className='banner-text'> <i>Vinoveda Enterprises</i></h3>
        <p>At Vinoveda Enterprises, we specialize in providing comprehensive industrial hiring services tailored to meet your staffing needs. 
        <NavLink to={`/Vinoveda`} className='nav-link text-start pt-2'>
          <button className="button1">Explore Now !</button>
        </NavLink>
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={banner4}  className="gear-img d-block rounded  mx-auto" alt="..."></img>
      <div className="carousel-caption text-light text-start">
        <h3 className='banner-text'> <i>Shiva Ganapathy Travels</i></h3>
        <p>At Shiva Ganapathy Travels, we believe that every journey is an opportunity for adventure, discovery, and transformation.
        <NavLink to={`/ShivaGanapathy`} className='nav-link text-start pt-2'>
          <button className="button1">Explore Now !</button>
        </NavLink>
        </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner
