import {FC, useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { addItems } from '../../redux/slices/cartSlice';
import styles from "../../css_modules/card.module.css";
import {useNavigate, useParams} from 'react-router-dom';
import {Item} from '../../types/index';
import Raiting from './Rating'

interface ProductItem {
  item: Item;
}

const Card: FC<ProductItem> = ({ item }: ProductItem) => {
  const dispatch = useAppDispatch();
  
  const {menu} = useParams();
  const navigate = useNavigate();
  const clickHandler = () => navigate(`/products/${menu}/${item.id}`);
  const [colorCart, setColorCart] = useState('#FFFFFF');

//восстанавливать состояние цвета корзины при загрузке страницы
  useEffect(() => {
    const cartColor = localStorage.getItem(`cartItemsColor-${item.id}`);
    if (cartColor) {
      setColorCart(cartColor);
    }
  }, []);
  
  const { items } = useAppSelector(state => state.cartReducer);
  
  const onClickAddToCart = () => {
    if (item && item.id && !items.map((cartItem: Item) => cartItem.id).includes(item.id)) {
      dispatch(addItems(item));
      setColorCart('gray');
      localStorage.setItem(`cartItemsColor-${item.id}`, 'gray');     
    }
  }
  
  return (
    <div className={styles.cards}>
      <div className={styles.productCard}>
        {item.discount !== null && (
          <div className={styles.product_discount}>-{item?.discount}%</div>
        )}
        <img className={styles.card} src={item.url} alt={item.name} onClick={clickHandler} />
        <button className={styles.cart} style={{ backgroundColor: colorCart }}
          onClick={onClickAddToCart}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z" fill="blue" />
          </svg>
        </button>
      </div>
      <Raiting stars={item.rating}/>
      <div className={styles.card_content}>
        <div className={styles.id}>{item.id}</div>
        <div className={styles.card_footer}>
          <div className={styles.card_name}>{item.name}</div>
          <div className={styles.card_price}>${item.price}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;

//style={{pointerEvents:items.findIndex(item => item.id === id) === -1 ? 'none' : 'auto'}}
// style={{ backgroundColor: colorCart }}
// style={{ backgroundColor: isCartSelected ? 'rgb(255, 0, 0)' : '#FFFFFF'  }}
// style={{ backgroundColor: selectedCards[item.id ?? ''] }}
// setSelectedCards(prevState => ({
      //   ...prevState,
      //   [item.id!]: 'rgb(255, 0, 0)',
      // }));
      
      // dispatch(changeColor('hsl(196, 80%, 84%)')); 
      // dispatch(setSelectedCardId(item.id));
// const { items } = useAppSelector(state => {
  //   const storedItems = localStorage.getItem(CART_ITEMS_KEY);
  //   return {
  //     items: storedItems ? JSON.parse(storedItems) : state.cartReducer.items,

  //   };
  // });
// if (item && item.id && selectedCartId !== item.id){
  // useEffect(() => {
  //   localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
  // }, [items]);      

  // handleAddToCart(item);
          //   setColorCart('gray');
          //   localStorage.setItem(`cartItemsColor-${item.id}`, 'gray');
          // }}