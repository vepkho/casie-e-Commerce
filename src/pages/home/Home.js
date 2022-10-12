import React from 'react'

import styles from './Home.module.css'

import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import Chatbot from '../../components/chatbot/Chatbot'


const Home = () => {
  return (
    <div className={styles.Container}>
        <Header />
        <Main />
        <Footer />
        <Chatbot />
    </div>
  )
}

export default Home