import React from 'react'
import { Link } from 'react-router-dom'

import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  return (
    <div className={styles.Container}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li>Home</li>
            </Link>
            <Link to='/shop' style={{ textDecoration: 'none' }}>
              <li>Shop</li>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <li>Contact Us</li>
            </Link>
    </div>
  )
}

export default HamburgerMenu