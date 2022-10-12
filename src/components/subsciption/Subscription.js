import React from 'react'

import styles from './Subscription.module.css'

const Subscription = () => {
  return (
    <div className={styles.Container}>
        <h3 className={styles.Title}>Be a Casies Subscriber</h3>
        <div className={styles.Subscribe}>
            <input type='text' placeholder='Enter your email here' className={styles.Email}/>
            <button className={styles.Button}>Subscribe Now</button>
        </div>
    </div>
  )
}

export default Subscription