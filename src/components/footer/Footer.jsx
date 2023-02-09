import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import "./footer.css"
export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MOHAMMAD FURQAN</a>
      <ul className='permalinks'>
        <li><a href="#"></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
     </ul>
     <div className="footer__socials">
     <a href="https://www.linkedin.com/in/furqan5921/" target="_blank"><BsLinkedin/></a>
      <a href="https://www.github.com/furqan5921" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/furqan_ahmad_official/" target="_blank"><FaInstagram/></a>
     </div>
     <div className="footer__copyright">
      <small>&copy;Furqan's Portfolio. All right reserved</small>
     </div>
    </footer>
  )
}


