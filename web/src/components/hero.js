import React from 'react'
import HeaderImage from './images/logo.jpg'

import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Header Image</h1>

      <img className={styles.heroImage} src={HeaderImage} alt="site logo" />
    </div>
  )
}
export default Hero
