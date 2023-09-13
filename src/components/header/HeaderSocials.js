import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaHackerrank} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/pratik-dhere-4b5316251" ><BsLinkedin/></a>
        <a href="https://github.com/Pratik4412" ><FaGithub/></a>
        <a href="https://www.hackerrank.com/pratikdhere2018" ><FaHackerrank/></a>
    </div>
  )
}

export default HeaderSocials