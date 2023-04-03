import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import styles from '../../css_modules/cart1.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cartReducer.items);

  return (

    <div className={styles.cart_container}>
      <div className={styles.titlebox}>
        <div className={styles.path}>
          <div className={styles.path_products_for}>Men</div>
          <div className={styles.path_products}>/</div>
          <div className={styles.path_products_name}>Wishlist</div>
        </div>
        <div className={styles.title}>Cart</div>
      </div>
      <div>
      {
        items.map(item => <CartItem key={item.id} {...item} />)
      }
      </div>
      <div className={styles.summaryBox}>
        <div className={styles.summary}>Summary</div>
        <div className={styles.priceBox}>
          <div>Total</div>
          <div>TotalPrice</div>
        </div>
      </div>
    </div>


  )
}
export default Cart;