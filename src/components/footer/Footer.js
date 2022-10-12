import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

import Facebook from '../../assets/icons/icons-facebook.png'
import Pinterest from '../../assets/icons/icons-pinterest.png'
import Twitter from '../../assets/icons/icons-twitter.png'

const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerLeft}>
        <div className={styles.Info}>
            <p className={styles.Service}>Customer Service:</p>
            <p className={styles.PhoneNumber}>123-456-7890</p>
        </div>
        <div className={styles.FooterNav}>
            <Link to='/shop' style={{ textDecoration: 'none' }}>
              <p>Shop</p>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <p>Shipping & Returns</p>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <p>Contact</p>
            </Link>
        </div>
      </div>
      <div className={styles.ContainerRight}>
        <div className={styles.SocialMedia}>
            <img src={Facebook} alt="placeholder image" className={styles.SocialIcon}/>
            <img src={Pinterest} alt="placeholder image" className={styles.SocialIcon}/>
            <img src={Twitter} alt="placeholder image" className={styles.SocialIcon}/>
        </div>
        <p>@2022 All rights reserved. Proudly created By Vepkho</p>
      </div>
    </div>
  )
}

export default Footer