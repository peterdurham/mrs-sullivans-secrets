import React from 'react'

import products from './products.js'

import './sidebar.css'

const Sidebar = () => {
  console.log(products)
  return (
    <div className="Sidebar">
      <Subscribe />
      <h3>Products</h3>
      <div>
        {products.map((product, index) => {
          if (index < 5) {
            return (
              <a href={product.url} key={product.name}>
                <div className="ProductCard">
                  <img src={product.imageURL} alt={product.name} />
                  <p>{product.name}</p>
                </div>
              </a>
            )
          }
        })}
      </div>
    </div>
  )
}

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <p>Stay up to date with monthly newsletters of products and posts</p>
      <h4>Subscribe</h4>
      <div className="Subscribe__input">
        <input name="email" type="text" />
        <label htmlFor="email" placeholder="Email" />
      </div>
    </div>
  )
}

export default Sidebar
