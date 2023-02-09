import React from 'react'
import "./navbar.css"

import { useState } from 'react'
const Navbar = () => {
  const [active,setActive] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActive('#')} className={active ==='#' ? "active":''}>Home</a>
      <a href="#about" className={active ==='#about' ? "active":''} onClick={()=>setActive('#about')}>About</a>
      <a href="#experience" className={active ==='#experience' ? "active":''} onClick={()=>setActive('#experience')}>Learnings</a>
      <a href="#portfolio" className={active ==='#portfolio' ? "active":''} onClick={()=>setActive('#portfolio')} >Projects</a>
      <a href="#contact" className={active ==='#contact' ? "active":''} onClick={()=>setActive('#contact')}>Contact Me</a>
    </nav>
  )
}

export default Navbar
