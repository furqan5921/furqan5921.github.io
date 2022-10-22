import React from 'react'
import CTA from './CTA'
import "./header.css"

import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
        <div className="container header__container">

            <h5>Hello I'm</h5>
            <h1>Mohammad Furqan</h1>
            <h5 className="text-light">Full Stack Web Developer</h5>
          
            <CTA/>
            <HeaderSocials/>
            <div className='me'  >
             <img className='profile' src="https://scontent.fbho4-1.fna.fbcdn.net/v/t39.30808-6/287688910_5454611447929594_1064865802921130711_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DK4MzeIZCbYAX_qKItC&_nc_ht=scontent.fbho4-1.fna&oh=00_AT-7Q0sYNGSh623TlLE47AwHrecX6ML-PF9ID5PnD7xeAA&oe=6357AEC8" alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
