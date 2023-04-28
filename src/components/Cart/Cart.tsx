import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import styles from '../../css_modules/cart1.module.css';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

const Cart = () => {
  //const dispatch = useAppDispatch();
  const {items, totalPrice} = useAppSelector(state => state.cartReducer);

  return (
    <div className={styles.cart_container}>
      <div className={styles.titlebox}>
        <div className={styles.path}>
          <div className={styles.path_products_for}>Men</div>
          <div className={styles.path_products}>/</div>
          <div className={styles.path_products_name}>Cart</div>
        </div>
        {!!items.length &&
          <div className={styles.title}>Cart</div>
        }
      </div>
      <div className={styles.cartCardItem}>
        {
          !!items.length ?
          items.map(item => <CartItem key={item.id} {...item} />)
          : <EmptyCart />
        }
      </div>
      {!!items.length &&
        <div className={styles.summaryBox}>
          <div className={styles.summary}>Summary</div>
          <div className={styles.priceBox}>
            <div>Total</div>
            <div>{totalPrice.toFixed(2)}$</div>
          </div>
        </div>
      }
    </div>
  )
}
export default Cart;