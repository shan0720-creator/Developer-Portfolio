import "./HeroImgStyle.css"


import React from 'react'
import Image3 from "../assets/Image3.jpg"
import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Image3}/>
        </div>
        <div className="content">
            <p>HI, I'M A FULLSTACK WEB DEVELOPER</p>
            <h1>React Developer</h1>
        <div>
        
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg