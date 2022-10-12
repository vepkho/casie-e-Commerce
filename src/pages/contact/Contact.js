import React from 'react'

import styles from './Contact.module.css'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Article from '../../components/article/Article'

import Arrow from '../../assets/images/arrow.PNG'
import Anchor from '../../assets/images/anchor.gif'
import Dollar from '../../assets/images/dollar.gif'
import Badge from '../../assets/images/badge.gif'
import Email from '../../components/Email/Email'

const Contact = () => {
  return (
    <div className={styles.Container}>
        <Header />
        <div className={styles.Wrapper}>
            <h2 className={styles.Title}>All You Need To Know</h2>
            <img src={Arrow} alt='placeholder image' className={styles.Arrow}/>
        </div>
        <div className={styles.Articles}>
            <Article 
                title='Shipping Policy'
                src={Anchor}
            />
            <Article 
                title='Refund & Exchange'
                src={Dollar}
            />
            <Article 
                title='Warranty'
                src={Badge}
            />
        </div>
        <Email />
        <Footer />
    </div>
  )
}

export default Contact