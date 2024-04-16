import React, {useEffect,useRef, useState} from 'react'
import { toast, ToastContainer  } from 'react-toastify'
import axios from 'axios'
import './css/contact.css'
import contactman from '../assets/contactman.png'

function Contact() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesRef.current) return;
      const { top, bottom } = servicesRef.current.getBoundingClientRect();

      const services = Array.from(servicesRef.current.children);

      if (top <= window.innerHeight && bottom >= 0) {
        for (let i = 0; i < services.length; i++) {
          setTimeout(() => {
            services[i].classList.add("active");
          }, 150 * i);
        }
      } else {
        services.forEach((service) => service.classList.remove("active"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [user,setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    message: ""
});
const readValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
}

const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
        await axios.post(`https://project-sky-be.vercel.app/api/v1/create`, user)

         axios
            .post(
                `https://project-sky-be.vercel.app/api/v1/sendmailUser`,
                { email: user.email }
            )
         axios
            .post(`https://project-sky-be.vercel.app/api/v1/sendmail`, {
              userName: user.userName,
              email: user.email,
              phone: user.phone,
              message: user.message
            })
            .then(res => {
                toast.success("Message send  successfully!");
                // setUser({userName: "", email: "", phone: "", message: "" });
            }).catch(err => toast.error(err.response.data.msg))
    } catch (err) {
        toast.error("Email Id/ Mobile Number Already Exist")
    }
}
  return (
    <>
    <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    <div className="container contact-home">
      <div className="row" ref={servicesRef}>
          <div className="col-lg-6 col-md-12 col-sm-12  p-5 pl-5 mt-1 mb-5 service1">
            <div className=" text-center mb--50 ">
                <h4 className="section-title description text-justify text-center ff-secondary   ">Have a question? Need assistance with your project? <br /> We're here to help!</h4>
                        <hr />
                  <p className="descriptionp  ">  Contact SKYERS Group today using the contact form, and one of our friendly representatives will be in touch with you shortly.</p>
            </div>
            
            <img src={contactman} height={"70%"} width={"70%"} alt="" className='contact-img mb-5'/>
            
        </div>
        
        <div className="col-md-12 col-lg-6 col-sm-12 service1 ">
          <form className="form" onSubmit={submitHandler}>
            <div className="flex ff-secondary  fw-normal">
              <div className="login color ">Contact US</div>
                <label className="color">Name :</label>
                <input type="text" className="input" name="userName" id="userName" value={user.userName} onChange={readValue}  required="required"/>
                <label className="color">Email :</label>
                <input type="email" className="input" name="email" id="email" value={user.email} onChange={readValue}  required="required"/> 
                <label className="color">Phone Number :</label>
                <input type="mobile" className="input" name="phone" id="phone" value={user.phone} onChange={readValue}   required="required" /> 
                <label className="color">Message :</label>
                {/* <textarea type="message" class="input" rows={3}/>  */}
                <textarea className="input" placeholder="" rows="3" name="message" id="message" value={user.message} onChange={readValue}  required=""></textarea>
                <button type="submit" value="Submit" className="">Submit</button>
                <br/>
                
            </div>
          </form>
        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default Contact
