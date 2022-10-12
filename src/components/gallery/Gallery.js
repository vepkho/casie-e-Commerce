import React from 'react'

import styles from './Gallery.module.css'

import GalleryOne from '../../assets/images/gallery-1.jpg'
import GalleryTwo from '../../assets/images/gallery-2.jpg'
import GalleryThree from '../../assets/images/gallery-3.jpg'
import GalleryFour from '../../assets/images/gallery-4.jpg'

const Gallery = () => {
  return (
    <div className={styles.Container}>
        <h3 className={styles.Title}>Casies Gallery</h3>
        <div className={styles.Gallery}>
            <img src={GalleryOne} alt='gallery image' className={styles.Image} />
            <img src={GalleryTwo} alt='gallery image' className={styles.Image} />
            <img src={GalleryThree} alt='gallery image' className={styles.Image} />
            <img src={GalleryFour} alt='gallery image' className={styles.Image} />
        </div>
    </div>
  )
}

export default Gallery