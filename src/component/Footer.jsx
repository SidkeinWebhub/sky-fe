import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './css/footer.css'

function Footer() {
  return (
    <div className='wave'>  
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-sm-12 footer-div">
              <center>
                <img src={logo} alt="" className='bg-transparent footer-img pe-5 me-5' height={70} width={250} />
              </center>
                
              <p className='footer-p'>Thank you for visiting SKY Groups! We appreciate your interest in our services. If you have any questions or inquiries, please don't hesitate to contact us.</p>
              
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 footer-div footer-link">
              <h5 className='link-h'>Quick Links</h5>
              <ul className='link-ul'>
                <li>
                  <NavLink to={`/`} className="nav-link">Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/about`} className="nav-link">About Us</NavLink>
                </li>
                <li>
                  <NavLink to={`/SKYEngineering`} className="nav-link">SKY Engineering Enterprises</NavLink>
                </li>
                <li>
                  <NavLink to={`/KKSEngineering`} className="nav-link">KKS Engineering and Contractor</NavLink>
                </li>
                <li>
                  <NavLink to={`/Vinoveda`} className="nav-link">Vinoveda Enterprises</NavLink>
                </li>
                <li>
                  <NavLink to={`/ShivaGanapathy`} className="nav-link">Shiva Ganapathy Travels</NavLink>
                </li>
                <li>
                  <NavLink to={`/works`} className="nav-link">Our Works</NavLink>
                </li>
                <li>
                  <NavLink to={`/contact`} className="nav-link">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 footer-div  footer-link1 support-sec">
                
                    <h5 className='link-h link-hs '>Support</h5>
                    <div className='link-support'>
                      <span className='link-span'><i className="bi bi-telephone-fill  link-i"></i>+91-9842384534</span>
                      <br /><br />
                      <span className='link-span'><i className="bi bi-envelope-fill  link-i"></i> kksengineeringcontractor@gmail.com</span>
                      <br /><br />
                      <span className='link-span'><i className="bi bi-geo-alt-fill  link-i"></i> T9 Block A,
                                            Leela towers,
                                            Kovilambakkam
                                            Opposite to mothers world 
                                            Chennai 600117</span>
                    </div>
                
            </div>
            <center className='social-link'>
              <span className='social-span'><NavLink to={"whatsapp://send?text=Hi!&phone=9842384534"} className="bi bi-whatsapp" ></NavLink></span>
              <span className='social-span'><NavLink to={"mailto:kksengineeringcontractor@gmail.com"} className="bi bi-envelope-fill" ></NavLink></span>
              <span className='social-span'><NavLink to={"www.linkedin.com/in/sidkein-webhub-5604112a2"} className='bi bi-linkedin'></NavLink></span>
              <span className='social-span'><NavLink to={"https://www.facebook.com/profile.php?id=61553984105623&mibextid=LQQJ4d"} className='bi bi-facebook'></NavLink></span>
              <span className='social-span'><NavLink to={"https://instagram.com/sidkein_webhub?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"} className='bi bi-instagram'></NavLink></span>
              <span className='social-span'><NavLink to={"https://twitter.com/SidkeinWebhub"} className='bi bi-twitter-x'></NavLink></span>
              <span className='social-span'><h6 className=' copyright'>Copyright © 2024 SKY Groups. All Rights Reserved.</h6></span>
          </center>
        </div>
      </div>
     </div>   
   
  )
}

export default Footer
