import React from 'react'

import products from './products.js'

// import './sidebar.css'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <About />
      <Subscribe />
      <h3>Products</h3>
      <div>
        {products.map((product, index) => {
          if (index < 5) {
            return (
              <a href={product.url} key={product.name}>
                <div className={styles.productCard}>
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className={styles.productCardImage}
                  />
                  <p className={styles.productCardText}>{product.name}</p>
                </div>
              </a>
            )
          }
        })}
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className={styles.about}>
      <h3 className={styles.aboutHeader}>About Orton-Gillingham Teaching Style</h3>
      <p className={styles.aboutText}>Blurb about teaching method goes here</p>
      <a className={styles.aboutLink} href="#">
        Link to Orton-Gillingham page
      </a>
    </div>
  )
}

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <p className={styles.subscribeHeader}>
        Stay up to date with monthly newsletters of products and posts
      </p>
      <h4>Subscribe</h4>
      <div>
        <input name="email" type="text" />
        <label htmlFor="email" placeholder="Email" />
      </div>
    </div>
  )
}

export default Sidebar
