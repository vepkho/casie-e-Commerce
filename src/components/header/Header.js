import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import styles from './Header.module.css'

import HamburgerMenu from '../menu/HamburgerMenu'

import Logo from '../../assets/images/Logo.gif'
import Cart from '../../assets/icons/icons-cart.png'
import Menu from '../../assets/icons/icons-menu.png'
import Close from '../../assets/icons/icons-close.png'

const Header = () => {
    const[responsive , setResponsive] = useState(false);

    const menuToggle = () =>{
        setResponsive(true);
    }

    const closeMenu = () => {
        setResponsive(false);
    }

    const itemsList = useSelector(state => state.cart.itemsList)
    let quantity = 0;
  
    itemsList.forEach(item => {
      quantity += item.quantity;
    })

  return (
        <div className={styles.Container}>
            <div className={responsive ? styles.Open : styles.Closed}>
                <HamburgerMenu />
                <img src={Close} className={styles.CloseIcon} onClick={closeMenu} alt='Close Icon'/>
            </div>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className={styles.Logo}>
                    <img src={Logo} alt='Logo' className={styles.LogoImage}/>
                    <p className={styles.LogoText}>Casie</p>
                </div>
            </Link>
            <div className={styles.Navigation}>
                <nav>
                    <ul>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <li>Home</li>
                        </Link>
                        <Link to='/shop' style={{ textDecoration: 'none' }}>
                            <li>Shop</li>
                        </Link>
                        <Link to='/contact' style={{ textDecoration: 'none' }}>
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </nav>
                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                    <img src={Cart} alt='Cart' className={styles.Cart}/>
                    <span className={styles.Quantity}>{quantity}</span>    
                </Link>
                <img src={Menu} alt='placeholder' className={styles.Menu} onClick={menuToggle}/>
            </div>
        </div>
  )
}

export default Header