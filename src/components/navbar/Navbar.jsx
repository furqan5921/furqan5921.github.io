import React from 'react'
import "./navbar.css"
import {SiHomebridge} from "react-icons/si"
import {FaUserCircle} from "react-icons/fa"
import {GiStabbedNote} from "react-icons/gi"
import {GoProject} from "react-icons/go"
import {BiMessageDots} from "react-icons/bi"
import { useState } from 'react'
const Navbar = () => {
  const [active,setActive] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActive('#')} className={active ==='#' ? "active":''}><SiHomebridge/></a>
      <a href="#about" className={active ==='#about' ? "active":''} onClick={()=>setActive('#about')}><FaUserCircle/></a>
      <a href="#experience" className={active ==='#experience' ? "active":''} onClick={()=>setActive('#experience')}><GiStabbedNote/></a>
      <a href="#portfolio" className={active ==='#portfolio' ? "active":''} onClick={()=>setActive('#portfolio')} ><GoProject/></a>
      <a href="#contact" className={active ==='#contact' ? "active":''} onClick={()=>setActive('#contact')}><BiMessageDots/></a>
    </nav>
  )
}

export default Navbar
