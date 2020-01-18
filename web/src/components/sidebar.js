import React from 'react'

import products from './products.js'

// import './sidebar.css'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <About />
      <h3 className={styles.productsHeader}>Products</h3>
      <div>
        {products.map((product, index) => {
          if (index < 5) {
            return <ProductCard product={product} />
          }
        })}
      </div>
      <Subscribe />
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

const ProductCard = ({product}) => {
  return (
    <a href={product.url} key={product.name}>
      <div className={styles.productCard}>
        <div
          className={styles.productCardImage}
          style={{background: `url('${product.imageURL}')`}}
        />

        <p className={styles.productCardText}>{product.name}</p>
      </div>
    </a>
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
