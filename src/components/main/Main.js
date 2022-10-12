import React from 'react'

import styles from './Main.module.css'

import HeroSection from '../hero/HeroSection'
import Banner from '../banner/Banner'
import Carousel from '../carousel/Carousel'
import Gallery from '../gallery/Gallery'
import Subscription from '../subsciption/Subscription'

const Main = () => {
  return (
    <div className={styles.Container}>
        <HeroSection />
        <Banner />
        <Carousel />
        <Gallery />
        <Subscription />
    </div>
  )
}

export default Main