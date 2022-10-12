import React from 'react'

import styles from './Cart.module.css'

import Minus from '../../assets/icons/icons-minus.png'
import Plus from '../../assets/icons/icons-plus.png'

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Cart = ({id, title, price, image, quantity}) => {
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(cartActions.addToCart({
          title,
          id,
          price
        }))
      }
    const decrement = () => {
        dispatch(cartActions.removeFromCart(id))
      }
  return (
    <div className={styles.Container}>
        <div className={styles.CartItem}>
            <img src={image} alt='placeholder' className={styles.CartItemImage}/>
            <div className={styles.CartItemDetails}>
                <p className={styles.SubTitle}>{title}</p>
                <p className={styles.CartItemData}>Price - ${price}</p>
                <p className={styles.CartItemData}>Product Id - #{id}</p>
            </div>
        </div>
        <div className={styles.Condition}>
            <div className={styles.Quantity}>
                <button className={styles.QuantityButton} onClick={decrement}>
                    <img src={Minus} alt='placeholder' className={styles.QuantityImage}/>
                </button>
                <p>{quantity}</p>
                <button className={styles.QuantityButton} onClick={increment}>
                    <img src={Plus} alt='placeholder' className={styles.QuantityImage}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart