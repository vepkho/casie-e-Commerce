import React from 'react'
import { Link } from 'react-router-dom'

import styles from './HeroSection.module.css'

import Cases from '../../assets/images/Cases.png'

const HeroSection = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Statement}>
            <h1 className={styles.Title}>New Casies Arrivals</h1>
            <h3 className={styles.Description}>Available Now!</h3>
            <Link to='/shop' style={{ textDecoration: 'none' }}>
              <button className={styles.Button}>View Collection</button>
            </Link>
        </div>
        <img src={Cases} alt='Cases' className={styles.Cases}/>
    </div>
  )
}

export default HeroSection