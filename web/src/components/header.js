import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'
import {FaInstagram, FaPinterest, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import StoreLogo from './images/tptlogo.png'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/" className={styles.title}>
          {siteTitle}
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to="/archive/">About</Link>
          </li>
          <li className={styles.link}>
            <Link to="/archive/">Blog</Link>
          </li>
          <li className={styles.link}>
            <a href="https://www.teacherspayteachers.com/Store/Mrs-Sullivans-Secrets/">Store</a>
          </li>
          <li className={styles.link}>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
        <ul className={styles.socialLinks}>
          <li className={`${styles.instagram} ${styles.socialLink}`}>
            <a href="#">
              <FaInstagram className="Social__logo" />
            </a>
          </li>
          <li className={`${styles.linkedIn} ${styles.socialLink}`}>
            <a href="#">
              <FaLinkedinIn className="Social__logo" />
            </a>
          </li>
          <li className={`${styles.pinterest} ${styles.socialLink}`}>
            <a href="#">
              <FaPinterest className="Social__logo" />
            </a>
          </li>
          <li className={`${styles.facebook} ${styles.socialLink}`}>
            <a href="#">
              <FaFacebookF className="Social__logo" />
            </a>
          </li>
          <li className={styles.socialLink}>
            <a href="https://www.teacherspayteachers.com/Store/Mrs-Sullivans-Secrets">
              <img
                className={styles.teachersLogo}
                src={StoreLogo}
                alt="teacher pay teachers store"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
