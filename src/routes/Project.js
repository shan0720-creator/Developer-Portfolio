import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import WorkCard from '../components/WorkCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="PROJECTS" text="Some of my recent works"/>
        <Work/>
        <PricingCard/>
        <Footer/>
    </div>
  )
}

export default Project