import React from 'react';
import styles from '../../css_modules/cartItem.module.css';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { plusItem, minusItem, removeItems } from '../../redux/slices/cartSlice';
import { Item } from '../../types';


// interface Props {
//     item: Item
// }

const CartItem = ({...item}) => {
    const dispatch = useAppDispatch();
    

    const onClickPlus = () => {
        dispatch(plusItem(item.id));
    }

    const onClickMinus = () => {
        dispatch(minusItem(item.id));
    }
    const onClickremove = () => {
        dispatch(removeItems(item));
    }

    const changeValue = () => {
      console.log('changeValue');
    }

  return (
    <>
        <div className={styles.cardCartImg}>{item?.url}
        
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoId}>{item?.id}</div>
          <div className={styles.info1}>
            <p className={styles.infoName}>{item?.name}</p>
            <p className={styles.infoPrice}>{item?.price}</p>
          </div>
          <div className={styles.info2}>
            <div className={styles.infoSize}>{item?.size}</div>
            <div className={styles.infoQuantity}>
              <div className={styles.count}>
                <div className={styles.countBox}>
                  <input onChange={changeValue}  type='number' className={styles.countInput} min='1' max='100' value='1' />
                </div>
              </div>
              <div className={styles.countControls}>
                <button onClick={onClickPlus} type='button' className={styles.countUp}>
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
                  </svg>
                </button>
                <button onClick={onClickMinus} type='button' className={styles.countDown}>
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.infoRemove}>
              <button onClick={onClickremove} type='button' className={styles.btn}>Remove</button>
            </div>
          </div>
  
        </div> 
    </>
  )
}

export default CartItem