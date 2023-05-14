import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello! I'm</h5>
        <h1> Meng Yew, or Michael!</h1>
        <h5 className='text-light'>Software Engineering, development, and product</h5>
        <CTA />
        <HeaderSocial />

        <a href="#contact" className='scroll_down'>Find out more</a>
      </div>
    </header>
  )
}

export default Header