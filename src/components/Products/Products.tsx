import { FC, useState, useEffect } from 'react';
import {useAppSelector, useAppDispatch} from '../../hook/redux';
import { setCategoryItem, setCurrentPage } from '../../redux/slices/filterSlice';
import { NavLink } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';

import {Item} from '../../types/index';
import styles from "../../css_modules/products.module.css";
import Card from './Card';
import Skeleton from './Skeleton';
import SortPopup from './SortPopup'
import Pagination from './Pagination';
import FilteredCards from './FilteredCards';


// const Products: FC = () => {
 
//   const [isLoading, setIsLoading] = useState(true);


//   return (
//       <div className={styles.products_container}>
//         <div className={styles.titlebox}>
//           <div className={styles.path}>
//             <div className={styles.path_products_for}>Men</div>
//             <div className={styles.path_products}>/</div>
//             <div className={styles.path_products_name}>T-shirts</div>
//           </div>
//           <div className={styles.rowTitle}>
//             <div className={styles.title}>Mens T-shirts</div>
//             <div>
//               <SortPopup />
//               {/* <div className={styles.byPrice}>By price</div>
//               <div className={styles.iconedown}>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
//                 </svg>
//               </div> */}
//             </div>
//           </div>
//         </div>
//         <div className={styles.sideBar}>
//           <SidebarMenu />
//         </div>
//         <div className={styles.cards_holder}>

//           <div className={styles.cards}> 
//             {cardslist.map((item, index) => (
//               <Card item={item} key={index} />
//             ))}  
//             {isLoading 
//                ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
//                : cardslist.map((item, index) => (
//               <Card item={item} key={index} />
//             ))}
                         
//           </div>
//         </div>
//         <div className={styles.paginations}>Pagionations</div>
//       </div>
//   )
// };

// export default Products;


const Products: FC = () => {
  // const dispatch = useDispatch();
  const {categoryItem, priceItem, sort, currentPage} = useAppSelector((state) => state.filterReducer);
  
  console.log('category Item',categoryItem);
  console.log('priceItem',priceItem);

  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [sidebarItem, setSidbarItem] = useState(0);
  // const [sortType, setSortType] = useState('By price');

  

  
  // const onClickAddToCart = () => {
  //   const item: Item = {
  //     id,
  //     name, 
  //     price, 
  //     discount, 
  //     url

  //   }
  // };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://63fe336d370fe830d9d040e7.mockapi.io/Items?
    ${categoryItem === "All" ? `category=${''}` : categoryItem}`)
      .then((response) => response.json())
      // .then(arr => arr.filter((p: {category: string}) => p.category === categoryItem))
    //  .then(arr => arr.filter((p: {price: number}) => p.price === priceItem))
      .then((arr) => {
        setItems(arr.slice((currentPage-1) * 9,(currentPage) * 9));
        setIsLoading(false);
      })
    window.scrollTo(0, 0);
  }, [categoryItem, priceItem, sort, currentPage]);
  console.log(items);
  console.log(isLoading)
  return (
    <div className={styles.products_container}>
      <div className={styles.titlebox}>
        <div className={styles.path}>
          <div className={styles.path_products_for}>Men</div>
          <div className={styles.path_products}>/</div>
          <NavLink to={`${categoryItem}`} className={styles.path_products_name}>{categoryItem}</NavLink>
        </div>
        <div className={styles.rowTitle}>
          <div className={styles.title}>Mens T-shirts</div>
          <div>
            {/* <SortPopup value={sortType} onClickSortItem={(i) => setSortType(i)}/> */}
            <SortPopup />
          </div>
        </div>
      </div>
      <div className={styles.sideBar}>
        {/* <SidebarMenu value={categoryItem} onClickCategoryItem={(i: number) => setCategoryItem(i)}/> */}
        <SidebarMenu />
      </div>


      <div className={styles.cards}>
        {/* {items.map((item, index) => (
              <Card item={item} key={index} />
            ))}   */}
        {isLoading
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : <FilteredCards items={items} />}

      </div>

      <div className={styles.paginations}>
        <Pagination />
      </div>
    </div>
  )
};

export default Products;

// value={sidebarItem} onClickSidebarItem={(i) => setSidbarItem(i)}

// .sort((i1, i2) => i1.price - i2.price )


// <FormControlLabel
// className={styles.item}
// key={index}
// label={item}

// control={<Checkbox onClick={() => onChangePriceItem(item)}
// />}
// />

// onClick={(event) => onChangePriceItem(event)}