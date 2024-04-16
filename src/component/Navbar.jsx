import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logonew.svg'
import './css/navbar.css'

function Navbar2() {
  return (
    <nav className='nav2 navbar navbar-expand-md navbar-light  '>
        <div className="container-fluid ">
            <NavLink to={`/`} className="navbar-brand logo-sky">
                <span className="logo"><img src={logo} alt="" className='bg-transparent' height={250} width={250} />
                </span>
            </NavLink>

            <button className="navbar-toggler navbar-button" type="button" data-bs-toggle="offcanvas" aria-controls="offcanvasNavbar" data-bs-target="#menu">
                <span className="navbar-toggler-icon "></span>
            </button>

            <div className="offcanvas offcanvas-end  " tabIndex="-1"  id="menu" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className=" navbar-nav justify-content-end flex-grow-1 ms-1 ">
                        <li className="nav-item ">
                            <NavLink to={`/`} className=" nav-link " aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to={`/about`} className="nav-link">About Us</NavLink>
                        </li>
                        
                        <li className="nav-item  dropdown">
                            
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </a>
                            {/* <a href="#" class="nav-link dropdowm-toggle" data-bs-toggle="dropdown">Projects</a> */}
                            <ul className="dropdown-menu">
                                <li><NavLink to={`/SKYEngineering`} className="dropdown-item  ">SKY Engineering Enterprises</NavLink></li>
                                <li><NavLink to={`/KKSEngineering`} className="dropdown-item ">KKS Engineering and Contractor</NavLink></li>
                                <li><NavLink to={`/Vinoveda`} className="dropdown-item ">Vinoveda Enterprises</NavLink></li>
                                <li><NavLink to={`/ShivaGanapathy`} className="dropdown-item ">Shiva Ganapathy Travels</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/works`} className="nav-link">Our Works</NavLink>
                        </li>
                        {/* <li className="nav-item ms-3">
                            <NavLink to={`/`} className="nav-link">Experiences</NavLink>
                        </li> */}
                        {/* <li className="nav-item ">
                            <NavLink to={`/client`} className="nav-link">Clients</NavLink>
                        </li> */}
                        <li className="nav-item ">
                            <NavLink to={`/contact`} className="nav-link">Contact Us</NavLink>
                        </li>
                        <li className="nav-item ms-5 me-5 ps-5 pe-5">
                            
                                <div id="button-container">
                                    <NavLink to={`https://twitter.com/SkyersGroup`} className=" button" id="youtube">
                                    {/* <button class="button" id="youtube"> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46" width="256" height="256"><defs><linearGradient id="b" x1="81.07" x2="236.93" y1="144.04" y2="144.04" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffffff" className="stopColorfff svgShape"></stop><stop offset=".28" stopColor="#fcfcfc" className="stopColorfcfcfc svgShape"></stop><stop offset=".44" stopColor="#f4f4f4" className="stopColorf4f4f4 svgShape"></stop><stop offset=".57" stopColor="#e6e6e6" className="stopColore6e6e6 svgShape"></stop><stop offset=".69" stopColor="#d2d2d2" className="stopColord2d2d2 svgShape"></stop><stop offset=".79" stopColor="#b9b9b9" className="stopColorb9b9b9 svgShape"></stop><stop offset=".88" stopColor="#9a9a9a" className="stopColor9a9a9a svgShape"></stop><stop offset=".97" stopColor="#757575" className="stopColor757575 svgShape"></stop><stop offset="1" stopColor="#666666" className="stopColor666 svgShape"></stop></linearGradient><linearGradient id="c" x1="72.8" x2="226.46" y1="172.3" y2="109.56" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffffff" className="stopColorfff svgShape"></stop><stop offset=".41" stopColor="#fdfdfd" className="stopColorfdfdfd svgShape"></stop><stop offset=".56" stopColor="#f6f6f6" className="stopColorf6f6f6 svgShape"></stop><stop offset=".67" stopColor="#eaeaea" className="stopColoreaeaea svgShape"></stop><stop offset=".75" stopColor="#d9d9d9" className="stopColord9d9d9 svgShape"></stop><stop offset=".83" stopColor="#c3c3c3" className="stopColorc3c3c3 svgShape"></stop><stop offset=".89" stopColor="#a8a8a8" className="stopColora8a8a8 svgShape"></stop><stop offset=".95" stopColor="#888888" className="stopColor888 svgShape"></stop><stop offset="1" stopColor="#666666" className="stopColor666 svgShape"></stop></linearGradient></defs><rect width="203.49" height="203.49" x="39.99" y="43.26" fill="transparent" rx="41.58" ry="41.58"></rect><path fill="url(#b)" d="M155.03,136.64l-7.72-10.2-28.46-37.62h-37.78l46.7,61.03,7.68,10.02,30.13,39.39h36.81l-47.37-62.62Zm-12.43,14.74l-7.74-10.03-31.37-40.68h11.84l25.37,33.7,7.66,10.19,32.27,42.87h-10.24l-27.79-36.04Z"></path><path fill="url(#c)" d="M134.86,141.35l7.74,10.03-7.15,8.49-34.84,41.31h-15.69l42.86-51.34,7.09-8.5Zm43.85-52.53l-31.4,37.62-6.61,7.92,7.66,10.19,6.67-7.91,40.33-47.82h-16.64Z"></path></svg>
                                    {/* </button> */}
                                    </NavLink>
                                    <NavLink to={`whatsapp://send?text=Hi!&phone=9841796660`} className="button" id="github">
                                    {/* <button className="button" id="github"> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 100 100" width="256" height="256"><g id="Graphics-_x2F_-App-Icons-_x2F_-WhatsApp" fill="#000000" className="color000 svgShape"><g id="Icon_6_" fill="transparent" className="color000 svgShape"><path id="Background_7_" fill="url(#Background_13_)" d="M28.4 5H26c-2 .1-4.6.2-5.7.5-1.8.4-3.5.9-4.9 1.6-1.6.8-3.1 1.9-4.4 3.2-1.3 1.3-2.3 2.7-3.2 4.4-.7 1.4-1.3 3.1-1.6 4.8-.2 1.2-.4 3.8-.5 5.8V74c.1 2 .2 4.6.5 5.7.4 1.8.9 3.5 1.6 4.9.8 1.6 1.9 3.1 3.2 4.4 1.3 1.3 2.7 2.3 4.4 3.2 1.4.7 3.1 1.3 4.8 1.6 1.2.2 3.8.4 5.8.5h48.7c2-.1 4.6-.2 5.7-.5 1.8-.4 3.5-.9 4.9-1.6 1.6-.8 3.1-1.9 4.4-3.2 1.3-1.3 2.3-2.7 3.2-4.4.7-1.4 1.3-3.1 1.6-4.8.2-1.2.4-3.8.5-5.8V25.3c-.1-2-.2-4.6-.5-5.7-.4-1.8-.9-3.5-1.6-4.9-.8-1.6-1.9-3.1-3.2-4.4C88.4 9 87 8 85.3 7.1c-1.4-.7-3.1-1.3-4.8-1.6-1.2-.2-3.8-.4-5.8-.5H28.4z"></path><path id="WhatsApp-Icon" fill="#ffffff" d="M66.6 54.4c-.8-.4-4.8-2.3-5.5-2.6-.7-.3-1.3-.4-1.8.4s-2.1 2.6-2.5 3.1c-.5.5-.9.6-1.7.2-.8-.4-3.4-1.2-6.5-3.9-2.4-2.1-4-4.7-4.5-5.5-.5-.8 0-1.2.4-1.6.4-.4.8-.9 1.2-1.4.4-.5.5-.8.8-1.3.3-.5.1-1-.1-1.4-.2-.4-1.8-4.3-2.5-5.9-.7-1.5-1.3-1.3-1.8-1.4h-1.5c-.5 0-1.4.2-2.1 1-.7.8-2.8 2.7-2.8 6.6 0 3.9 2.9 7.6 3.3 8.2.4.5 5.7 8.5 13.7 11.9 1.9.8 3.4 1.3 4.6 1.7 1.9.6 3.7.5 5.1.3 1.5-.2 4.8-1.9 5.4-3.7.7-1.8.7-3.4.5-3.7-.4-.4-.9-.6-1.7-1M51.3 75c-4.8 0-9.4-1.3-13.5-3.7l-1-.6-10 2.6 2.7-9.7-.6-1c-2.6-4.2-4-9-4-14 0-14.5 11.9-26.3 26.5-26.3C58.3 22.3 65 25 70 30c5 5 7.7 11.6 7.7 18.6C77.7 63.1 65.8 75 51.3 75m22.5-48.8c-6-6-14-9.3-22.5-9.3-17.5 0-31.8 14.2-31.8 31.7 0 5.6 1.5 11 4.2 15.8l-4.5 16.4L36 76.4c4.6 2.5 9.9 3.9 15.2 3.9C68.7 80.3 83 66.1 83 48.6c.1-8.4-3.2-16.4-9.2-22.4" className="colorfff svgShape"></path></g></g></svg>
                                    {/* </button> */}
                                    </NavLink>
                                    <NavLink to={`https://www.linkedin.com/in/skyers-group-673346304/`} className="button" id="dribbble">
                                    {/* <button className="button" id="dribbble"> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="256" height="256"><g fill="none" fillRule="evenodd"><path fill="#ffffff" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z" className="colorFFF svgShape"></path></g></svg>
                                    {/* </button> */}
                                    </NavLink>
                                    <NavLink to={`https://www.instagram.com/skyers.group/`} className="button" id="instagram">
                                    {/* <button className="button" id="instagram"> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                    {/* </button> */}
                                    </NavLink>
                                    <NavLink to={`https://www.facebook.com/profile.php?id=61558165572743`} className="button" id="facebook">
                                    {/* <button className="button" id="facebook"> */}
                                    <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                    {/* </button> */}
                                    </NavLink>
                                    <button className="button" id="share">
                                    <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <circle r="3" cy="5" cx="18"></circle>
                                    <circle r="3" cy="12" cx="6"></circle>
                                    <circle r="3" cy="19" cx="18"></circle>
                                    <line y2="17.49" x2="15.42" y1="13.51" x1="8.59"></line>
                                    <line y2="10.49" x2="8.59" y1="6.51" x1="15.41"></line>
                                    </svg>
                                    </button>
                                </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar2
