import React from 'react'
import CV from "../../assets/pratik-cv.pdf"
import "./header.css"

const CTA = () => {
  return (
    <div className='cta' >
        <a href={CV} dawnload className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA