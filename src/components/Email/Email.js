import React from 'react'

import styles from './Email.module.css'

const Email = () => {
  return (
    <div className={styles.Container}>
        <h3 className={styles.Title}>Contact Us</h3>
        <div className={styles.Contact}>
            <div className={styles.Sender}>
                <input type='text' placeholder='Name' className={styles.Input}/>
                <input type='text' placeholder='Email' className={styles.Input}/>
            </div>
            <input type='text' placeholder='Subject' className={styles.Input}/>
            <input type='text' placeholder='Type your message here...' className={`${styles.Input} ${styles.Text}`}/>
        </div>
        <button className={styles.Button}>Submit</button>
    </div>
  )
}

export default Email