import React from 'react'
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import styles from './Card.module.css'

const Card = ({id, image, title, price}) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        image,
        title,
        price
      })
    )
  }
  return (
      <div className={styles.Container}>
        <img src={image} alt='card' className={styles.Image} />
        <p className={styles.Title}>{title}</p>
        <p className={styles.Price}>${price}</p>
        <button className={styles.Button} onClick={addToCart}>Add to cart</button>
      </div>
  )
}

export default Card