import React from 'react'
import Header from './header'
import Hero from './hero'
import Sidebar from './sidebar'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <Hero />
    <div style={{display: 'flex', width: '960px', margin: '0 auto'}}>
      <div className={styles.content}>{children}</div>
      <Sidebar />
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a>{' '}
          &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
