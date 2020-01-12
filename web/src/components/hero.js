import React from 'react'
import HeaderImage from './images/logo.jpg'
import StoreLogo from './images/tptlogo.png'

import './hero.css'

import {FaInstagram, FaPinterest, FaFacebook, FaEnvelope} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="Hero">
      <h1>Welcome</h1>
      <div className="Header__image">
        <img src={HeaderImage} alt="site logo" />
      </div>
      <div className="Social">
        <FaInstagram className="Social__logo" />
        <FaPinterest className="Social__logo" />
        <FaEnvelope className="Social__logo" />
        <FaFacebook className="Social__logo" />
        <img className="Social__logo" src={StoreLogo} alt="teacher pay teachers store" />
      </div>
    </div>
  )
}
export default Hero
