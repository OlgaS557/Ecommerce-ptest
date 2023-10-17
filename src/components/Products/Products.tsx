import { FC, useState, useEffect, useRef } from 'react';
import { useAppSelector } from '../../hook/redux';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import styles from "../../css_modules/products.module.css";
import {Item} from '../../types/index';
import SidebarMenu from './SideBar/SidebarMenu';
import Skeleton from './Skeleton';
import Card from './Card';
import SortPopup from './SortPopup';
import Pagination from './Pagination';
import Subscribe from '../Subscribe';

const filterItems = (items: Item[], categoryItems: Array<string>, priceItem: { valueFrom: number, valueTo: number}, searchQuery: string) : Item[] => {
  return items
  .filter(p => {
    if(categoryItems.includes('All'))
    return true;
        return categoryItems.includes(p.category!);
  })
  .filter(p => p.price < priceItem.valueTo)
  .filter(p => p.price >= priceItem.valueFrom && p.price <= priceItem.valueTo)
  .filter(p => p.price > priceItem.valueFrom) 
  .filter(p => p.name?.toLowerCase().includes(searchQuery.toLowerCase())); 
}

const sortItems = (items: Item[], sort: string): Item[] => {
  if (sort === 'Price up') {
    return items.sort((a, b) => a.price - b.price);
  } else if (sort === 'Price down') {
    return items.sort((a, b) => b.price - a.price);
  } else if (sort === 'By discount') {
    return items.sort((a, b) => b.discount - a.discount);
  } else if (sort === 'By rating') {
    return items.sort((a, b) => b.rating - a.rating);
  } else {
    return items;
  }
}

const Products: FC = () => {

  const {categoryItems, priceItem, sort, currentPage, searchQuery} = useAppSelector((state) => state.filterReducer);
  
  console.log('category Item',categoryItems);
  console.log('priceItem',priceItem);

  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const isMounted = useRef(false); //позволяет сохранить значение переменной между рендерами компонента, чтобы можно было проверить, находится ли компонент на странице (не был ли он удален из DOM), перед тем как обновлять его состояние

  useEffect (() => {
    isMounted.current = true;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(`https://63fe336d370fe830d9d040e7.mockapi.io/Items`);
        const items = await response.json();
        const filteredItems = filterItems(items, categoryItems, priceItem, searchQuery);
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
      isMounted.current = false;
    }
  }, [categoryItems, priceItem, sort, currentPage, searchQuery]);

  return (
    <>
      <div className={styles.products_container}>
        <div className={styles.titlebox}>
          <div className={styles.path}>
            <Link to='/'>
              <button className={styles.to_home}>HOME</button>
            </Link>
            <div className={styles.path_products}>/</div>
            <div className={styles.path_products_for}>Men</div>
            {/* <NavLink to={`${categoryItems}`} className={styles.path_products_name}>{categoryItems}</NavLink> */}
          </div>
          <div className={styles.rowTitle}>
            <div className={styles.title_category}>
              <div className={styles.title}>Mens </div>
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

export default Products;

// value={sidebarItem} onClickSidebarItem={(i) => setSidbarItem(i)}

// .sort((i1, i2) => i1.price - i2.price )

// .then((arr) => {
      //   let filteredArr = arr;
      //   if (categoryItem !== "All") {
      //     filteredArr = filteredArr.filter((p: { category: string }) => p.category === categoryItem);
      //   }
      //   if (priceItem) {
      //     filteredArr = filteredArr.filter((p: { price: number }) => p.price <= priceItem.valueTo && p.price >= priceItem.valueFrom);
      //   }

      //   setItems(filteredArr.slice((currentPage - 1) * 9, currentPage * 9));
      //   setIsLoading(false);
      // })

      // {isLoading
      //   ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
      //   : <FilteredCards items={items} />}

      // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`https://63fe336d370fe830d9d040e7.mockapi.io/Items`)
  //     .then((response) => response.json())
  //     .then(arr => arr.filter((p: {category: string}) => categoryItem === "All" || p.category === categoryItem))
  //     .then(arr => arr.filter((p: {price: number}) => p.price < priceItem.valueTo))
  //     .then(arr => arr.filter((p: {price: number}) => p.price >= priceItem.valueFrom && p.price <= priceItem.valueTo))
  //     .then(arr => arr.filter((p: {price: number}) => p.price > priceItem.valueFrom))
  //     .then((arr) => {
  //       setItems(arr.slice((currentPage-1) * 9,(currentPage) * 9));
  //       setIsLoading(false);
  //     })
  //   window.scrollTo(0, 0);
  // }, [categoryItem, priceItem, sort, currentPage]);
  // console.log(items);
  // console.log(isLoading); 

  // useEffect (() => {
  //   isMounted.current = true; // компонент сейчас находится на странице
  //   setIsLoading(true);
  //   fetch(`https://63fe336d370fe830d9d040e7.mockapi.io/Items`)
  //   .then(response => response.json())
  //   .then(items => filterItems(items, categoryItem, priceItem))
  //   .then(items =>  sortItems(items, sort))
  //   .then(items => {
  //     if (isMounted.current) {
  //       setItems(items.slice((currentPage - 1) * 9, currentPage * 9));
  //       setIsLoading(false);
  //     }
  //   })
  //   .catch(error => {
  //     console.error(error);
  //     alert('Error fetching items');
  //     setIsLoading(false);
  //   });
  //   return () => {
  //     isMounted.current = false;
  //   }//когда компонент удаляется из DOM
  // }, [categoryItem, priceItem, sort, currentPage]);

  // .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    