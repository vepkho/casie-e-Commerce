import React from 'react'
import { useState } from 'react';

import styles from './Chatbot.module.css';

import ChatBot from 'react-simple-chatbot'

import Chat from '../../assets/icons/icons-chat.png'
import CloseIcon from '../../assets/icons/icons-close-white.png'

const Chatbot = () => {
    const [bot, showBot] = useState(false);

    const showBotHandler = () => {
        showBot(true);
    }
    const closeBotHandler = () => {
        showBot(false);
    }

  return (
    <div className={styles.Container}>
        {bot ? 
            <div>
                <button className={styles.Close} onClick={closeBotHandler}>
                    <img src={CloseIcon} alt='placeholder' className={styles.ChatImage}/>
                </button>
                <ChatBot
                    className={styles.Chatbot}
                    steps={[
                    {
                        id: '1',
                        message: 'Hello, What is your name?',
                        trigger: '2',
                    },
                    {
                        id: '2',  
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}, nice to meet you!',
                        trigger: '4',
                    },
                    {
                        id: '4',
                        message: 'Do you need some help?',
                        trigger: '5'
                    },
                    {
                        id: '5',
                        options: [
                            { value: 1, label: 'Yes', trigger: '6' },
                            { value: 2, label: 'No', trigger: '8' },
                        ],
                    },
                    {
                        id: '6',
                        message: 'What is your problem',
                        trigger: '7'
                    },
                    {
                        id: '7',
                        options: [
                            { value: 1, label: "I can't buy items online", trigger: '9' },
                            { value: 2, label: "I don't like your cases", trigger: '10' },
                        ],
                    },
                    {
                        id: '8',
                        message: 'Okay, happy shopping!',
                        trigger: '4',
                    },
                    {
                        id: '9',
                        message: 'Sorry, this service is currently unavailable...',
                    },
                    {
                        id: '10',
                        message: 'Thank you for your feedback, we will try to make it better!',
                    },
                    ]}
                /> 
            </div>
        : 
            <button className={`${styles.Chatbot} ${styles.Chat}`} onClick={showBotHandler}>
                <img src={Chat} alt='placeholder' className={styles.ChatImage}/>
            </button>
        }
    </div>
  )
}

export default Chatbot