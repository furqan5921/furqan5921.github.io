import React from 'react'
import CTA from './CTA'
import "./header.css"
import me from "../../assets/mydp.jpeg"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <section>
    <header>
        <div className="container header__container">

            <h5>Hello I'm</h5>
            <h1>Mohammad Furqan</h1>
            <h5 className="text-light">Full Stack Web Developer</h5>
          
            <CTA/>
            <HeaderSocials/>
            <div className='me'  >
             <img className='profile' src={me} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
    </section>
  )
}

export default Header
