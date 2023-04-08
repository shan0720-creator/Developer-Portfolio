import "./FooterStyles.css"



import React from 'react'
import { FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter,FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff",marginRight: "2rem"}}/>
                
                <div>
                    <p>Azad Nagar Patna Bihar</p>
                    <p>India</p>
                </div>
                </div>
                <div className="phone">
                <h4> <FaPhone size={20} style={{color: "#fff",marginRight: "2rem"}}/>
                +91-9304587976 </h4>
                </div>
                <div className="email">
                <h4> <FaMailBulk size={20} style={{color: "#fff",marginRight: "2rem"}}/>
                santleasemj3@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>Hey there, This is me Shantanu Sahay. A FullStack developer
                    Specialising in Mern Stack Technology. Feel Free to Contact!
                </p>
                  
                  <div className="Social">
                    <a href="https://github.com/shan0720-creator">
                 <FaGithub size={30} style={{color: "#fff",marginRight: "1rem"}}/>
                 </a>
                 <a href="https://twitter.com/Shantanusahay14">
                <FaTwitter size={30} style={{color: "#fff",marginRight: "1rem"}}/>
                 </a>
                 <a href="https://www.linkedin.com/in/shantanu-sahay-883a57192/">
                <FaLinkedin size={30} style={{color: "#fff",marginRight: "1rem"}}/>
                </a>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer