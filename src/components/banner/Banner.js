import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Banner.module.css'

import Star from '../../assets/images/Star.gif'
import BannerImg from '../../assets/images/Banner.jpg'
import Boat from '../../assets/images/Boat.gif'

const Banner = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.BestSeller}>
            <div className={styles.Statement}>
                <img src={Star} alt="Star" className={styles.Star}/>
                <h3 className={styles.Title}>Best Seller Casies</h3>
                <p className={styles.Description}>Newest Collection</p>
                <Link to='/shop' style={{ textDecoration: 'none' }}>
                  <button className={styles.Button}>Buy Now</button>
                </Link>
            </div>
            <img src={BannerImg} alt='Banner' className={styles.Banner} />
        </div>
        <div className={styles.Shipping}>
            <img src={Boat} alt="Boat" className={styles.Boat}/>
            <h3 className={styles.Title}>Free Shipping</h3>
            <p className={styles.Description}>Only this weekend</p>
        </div>
    </div>
  )
}

export default Banner