import { FC, useState, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../hook/redux';
import {Link, useParams} from 'react-router-dom';
import styles from "../css_modules/products.module.css";
import { setCategoryItem, setPriceItem, setSort, setGender } from '../redux/slices/filterSlice';
import {Item} from '../types/index';
import SidebarMenu from '../components/Products/SideBar/SidebarMenu';
import Skeleton from '../components/Products/Skeleton';
import Card from '../components/Products/Card';
import SortPopup from '../components/Products/SortPopup';
import Pagination from '../components/Products/Pagination';
import Subscribe from '../components/Subscribe';

const filterItems = (items: Item[], categoryItems: Array<string>, priceItem: { valueFrom: number, valueTo: number},
     brandItem: Array<string>, searchQuery: string, gender: string) : Item[] => {
  return items
  .filter(p => p.gender?.toUpperCase() === gender.toUpperCase())
  .filter(p => {
    console.log('filteredItems length before categoryItems filter', categoryItems.length);
      if (categoryItems.includes('All')) {
        console.log('brandItem length', brandItem.length);
          return true;
      }  return categoryItems.includes(p.category!);     
  })
  .filter(p => p.price < priceItem.valueTo)
  .filter(p => p.price >= priceItem.valueFrom && p.price <= priceItem.valueTo)
  .filter(p => p.price > priceItem.valueFrom) 
  .filter(p => {
    if (brandItem.length === 0 || brandItem.includes('')) {
        return true;
    }
    console.log('brandItem includes', brandItem.includes(p.brand!)); 
    console.log('p.brand', p.brand); 
    console.log('brandItem', brandItem);  
        return brandItem.includes(p.brand!);     
  })
  .filter(p => p.name?.toLowerCase().includes(searchQuery.toLowerCase()));  
}

const sortItems = (items: Item[], sort: string): Item[] => {
  if (sort === 'Price up') {
    console.log('Sorting by Price up');
    return items.sort((a, b) => a.price - b.price);
  } else if (sort === 'Price down') {
    console.log('Sorting by Price down');
    return items.sort((a, b) => b.price - a.price);
  } else if (sort === 'By discount') {
    console.log('Sorting by Discount');
    return items.sort((a, b) => b.discount - a.discount);
  } else if (sort === 'By rating') {
    console.log('Sorting by Rating');
    return items.sort((a, b) => b.rating - a.rating);
  } else {
    console.log('No sorting applied');
    return items;
  }
}

const ProductsPage: FC = () => {
  const {menu} = useParams();   //позволяет получить параметры маршрута в функциональном компоненте React.
  const {categoryItems, priceItem, brandItem, sort, currentPage, searchQuery, gender} = useAppSelector((state) => 
  state.filterReducer);
  
  console.log('categoryItems', categoryItems);
  console.log('priceItem', priceItem);
  console.log('brandItem', brandItem);
  console.log('sort', sort);
  console.log('currentPage', currentPage);
  console.log('searchQuery', searchQuery);
  console.log('gender', gender);
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const isMounted = useRef(false); //позволяет сохранить значение переменной между рендерами компонента, чтобы можно было проверить, находится ли компонент на странице (не был ли он удален из DOM), перед тем как обновлять его состояние

  useEffect (() => {
    isMounted.current = true;//component on the page
    setIsLoading(true);

    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await fetch(`https://63fe336d370fe830d9d040e7.mockapi.io/Items`);
        const fetchedItems = await response.json();
        const filteredItems = filterItems(fetchedItems, categoryItems, priceItem, brandItem, searchQuery, gender);
        const sortedItems = sortItems(filteredItems, sort);
        if (isMounted.current) {
          setItems(sortedItems.slice((currentPage - 1) * 9, currentPage * 9));
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        alert('Error fetching items');
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted.current = false;//component delets from DOM
    }
  }, [categoryItems, priceItem, brandItem, sort, currentPage, searchQuery, gender]);

  return (
    <>
      <div className={styles.products_container}>
        <div className={styles.titlebox}>
          <div className={styles.path}>
            <Link to='/'>
              <button className={styles.to_home}>HOME</button>
            </Link>
            <div className={styles.path_products}>/</div>
            <div className={styles.path_products_for}>{menu}</div>
            {/* <NavLink to={`${categoryItems}`} className={styles.path_products_name}>{categoryItems}</NavLink> */}
          </div>
          <div className={styles.rowTitle}>
            <div className={styles.title_category}>
              <div className={styles.title}>{menu} </div>
              <div className={styles.path_products_name}>{categoryItems.join(' ')}</div>
              
            </div>
            <div>
              <SortPopup />
            </div>
          </div>
        </div>
        <div className={styles.sideBar}>
          <SidebarMenu />
        </div>
        <div className={styles.cards}>
          {isLoading
            ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
            : items.map((item, index) => <Card item={item} key={index} />)}
        </div>
        <div className={styles.paginations}>
          <Pagination />
        </div>
      </div>
      <Subscribe />
    </>
  )
};

export default ProductsPage;

//   useEffect(() => {
//     dispatch(setCategoryItem('All'));
//     dispatch(setPriceItem({ valueFrom: 0, valueTo: Infinity }));
//     dispatch(setSort(''));
//     dispatch(setGender(''));
//   }, [dispatch]);



//.filter((p) => {
    //     if (brandItem.length === 0) {
    //       return true;
    //     }
    //     return brandItem.includes(p.brand);
    //   })

    // .filter(p => {
    //     if (brandItem.length === 0) {
    //       return true;
    //     }
    //     console.log('brandItem includes', brandItem.includes(p.brand! || "")); 
    //     console.log('p.brand', p.brand); 
    //     console.log('brandItem', brandItem);  
    //         return brandItem.includes(p.brand! || "");     
    //   })