import React from 'react';
import styles from '../../css_modules/emptyCart.module.css';
import {Link} from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div>
      <div className={styles.emptyCart}>Your cart is empty</div>
      <Link to="/">
        <button type='button' className={styles.btnToHome}>Go to main page</button>
      </Link>
    </div>
  )
}
export default EmptyCart;
