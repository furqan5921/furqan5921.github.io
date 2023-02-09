import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/furqan5921/"  target="_blank" rel='noreferrer'><BsLinkedin/></a>
      <a href="https://www.github.com/furqan5921" target="_blank" rel='noreferrer'><FaGithub/></a>
      <a href="https://www.instagram.com/furqan_ahmad_official/" target="_blank" rel='noreferrer'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials
