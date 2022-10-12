import React, {useState} from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

import styles from './CheckOut.module.css'

import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

import Cart from '../../components/cart/Cart'

const CheckOut = () => {
    const [modal, showModal] = useState(false)

    const showModalHandler = () => {
        showModal(!modal);
    }
    const cartItems = useSelector(state => state.cart.itemsList)

    const itemsList = useSelector(state => state.cart.itemsList)
    let total = 0;
  
    itemsList.forEach(item => {
      total += item.totalPrice;
    })

  return (
    <div className={styles.Container}>
        <Header />
        <div className={styles.CheckOut} style={modal ? {filter:'blur(2px)'} : {}}>
            <div className={styles.Cart}>
                <p className={styles.Title}>My Cart</p>

                { cartItems.length < 1 ? 
                    <div className={styles.Statement}>
                        <p className={styles.Description}>Cart is empty</p>
                        <Link to='/shop' style={{ textDecoration: 'none' }}>
                            <p className={styles.Link}>Continue Shopping</p>
                        </Link>
                    </div>
                 : 
                    cartItems.map(item => (
                    <li key={item.id}>
                    <Cart 
                        id={item.id} 
                        price={item.price} 
                        name={item.name}
                        image = {item.image}
                        quantity={item.quantity}
                        total={item.totalPrice} 
                    /> 
                    </li>
                ))}
            </div>
            <div className={styles.Summary}>
                <p className={styles.Title}>Order Summary</p>
                <div className={styles.CheckItem}>
                    <p className={styles.SubTitle}>Subtotal</p>
                    <p className={styles.Detail}>{total}$</p>
                </div>
                <div className={styles.CheckItem}>
                    <p className={styles.SubTitle}>Shipping <span className={styles.Country}>Georgia</span></p>
                    <p className={styles.Detail}>Free</p>
                </div>
                <div className={styles.Total}>
                    <p className={styles.Amount}>Total</p>
                    <p className={styles.Amount}>{total}$</p>
                </div>
                <button className={styles.Button} onClick={showModalHandler}>Checkout</button>
            </div>
        </div>
        {modal == true && 
            <div className={styles.Modal}>
                <p>Sorry, this service is temporary unavailable!</p>
                <button onClick={showModalHandler}>✖</button>
            </div>
        }
        <div className={styles.Footer}>
            <Footer />
        </div>
    </div>
  )
}

export default CheckOut