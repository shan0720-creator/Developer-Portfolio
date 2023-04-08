import "./PricingCardStyle.css"


import { Link } from "react-router-dom"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>Github</h3>
                <span className="bar"></span>
                <p className="btc"> Account</p>
                <p>50+ Projects -</p>
                <p>250+ commits last year</p>
                <p>Featured</p>
                <p>MERN STACK</p>
                 <a href="https://github.com/shan0720-creator">
                 <button className="btn">Github</button>
                 </a>
            </div>
            <div className="card">
                <h3>Frontend</h3>
                <span className="bar"></span>
                <p className="btc"> TechStack</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Chakra-UI</p>
                <p>Sass</p>
                <p>-Responsive Design-</p>
                <p></p>
                <a href="https://www.linkedin.com/in/shantanu-sahay-883a57192/">
                <button className="btn">Linkedin</button>
                </a>
            </div>
            <div className="card">
                <h3>Backend</h3>
                <span className="bar"></span>
                <p className="btc"> Technology</p>
                <p>Node</p>
                <p>Express</p>
                <p>Mongoose and MongoDb</p>
                <p>Sql Database</p>
                <a href="https://twitter.com/Shantanusahay14">
                <button className="btn">Twitter</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default PricingCard