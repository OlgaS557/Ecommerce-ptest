import { FC, useState, useEffect, useRef, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {Link, useParams} from 'react-router-dom';
import {Item} from '../types/index';
import { setGender, setCurrentPage } from '../redux/slices/filterSlice';
import { Box, IconButton, Drawer, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Category from '../components/Products/SideBar/Category';
import Price from '../components/Products/SideBar/Price';
import Size from '../components/Products/SideBar/Size';
import Collection from '../components/Products/SideBar/Collection';
import Brand from '../components/Products/SideBar/Brand';
import Style from '../components/Products/SideBar/Style';
import Season from '../components/Products/SideBar/Season';
import SidebarMenu from '../components/Products/SideBar/SidebarMenu';
import Skeleton from '../components/Products/Skeleton';
import Card from '../components/Products/Card';
import SortPopup from '../components/Products/SortPopup';
import Pagination from '../components/Products/Pagination';
import Subscribe from '../components/Subscribe';

import { filterItems } from '../components/Products/filter-sort/filteredItems';
import { sortItems } from '../components/Products/filter-sort/sortedItems';
import styles from "../css_modules/products.module.css";

const ProductsPage: FC = () => {
  const {menu} = useParams();   //позволяет получить параметры маршрута. Получаем gender из URL
  
  const dispatch = useAppDispatch();
  const {categoryItems, priceItem, brandItem, sort, currentPage, searchQuery, gender} = useAppSelector((state) => 
  state.filterReducer);

  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const pageFromUrl = Number(searchParams.get('page')) || 1; // Получаем страницу из URL (по умолчанию 1)
 // Устанавливаем ?page=1, если параметра нет в URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if(!searchParams.get("page")) {
      searchParams.set("page", "1");
      navigate(`${location.pathname}?${searchParams.toString()}`, {replace: true});
    }
  }, [location, navigate]);

  useEffect(() => {
    if( currentPage !== pageFromUrl) {
      dispatch(setCurrentPage(pageFromUrl)); // Устанавливаем текущую страницу из URL в Redux             
    }       
  }, [pageFromUrl]);
    
  useEffect(() => {
    if (menu) {
      dispatch(setGender(menu)); // Устанавливаем гендер в Redux
    }
  }, [menu]);

  const filteredItems = useMemo(() => {
    return filterItems(items, categoryItems, priceItem, brandItem, searchQuery, gender);
  }, [items, categoryItems, priceItem, brandItem, searchQuery, gender]);

  console.log("ОТФИЛЬТРОВАННЫЕ ТОВАРЫ:", filteredItems);

  const sortedItems = useMemo(() => {
    return sortItems(filteredItems, sort);
  }, [filteredItems, sort]);

  const paginatedItems = useMemo(() => {
    return sortedItems.slice((currentPage - 1) * 9, currentPage * 9);
  }, [sortedItems, currentPage, gender]);

  const isMounted = useRef(false); //позволяет сохранить значение переменной между рендерами компонента, чтобы можно было проверить, находится ли компонент на странице (не был ли он удален из DOM), перед тем как обновлять его состояние

  useEffect (() => {
    // Ждем, пока gender не будет установлен
    if (!gender) return;

    isMounted.current = true;//component on the page
    setIsLoading(true);
    
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await fetch(`https://63fe336d370fe830d9d040e7.mockapi.io/Items`);
        const fetchedItems = await response.json();
        console.log('Fetched Items: ',fetchedItems);
        
        if (isMounted.current) {          
          setItems(fetchedItems);
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
  }, [gender]);

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
        {/* Кнопка бургер-меню */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' }          
          }}
          className={styles.burgerMenu}
        >
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            onClick={handleMenuToggle}
          >
            <MenuIcon sx={{ width: 40, height: 40 }} />
          </IconButton>
        </Box>

        <Drawer
          anchor='left'
          open={menuActive}
          onClose={handleMenuToggle}
          sx={{ '& .MuiDrawer-paper': { width: 300 } }}
        >
          <List sx={{ mt: 12}}>
            <Category />
            <Price />
            <Size />
            <Collection />
            <Brand />
            <Style />
            <Season />
          </List>
        </Drawer>
        {/* Сайдбар для больших экранов */}
        <div className={styles.sideBar}>
          <SidebarMenu />
        </div>
        <div className={styles.cards}>
          {isLoading
            ? ([...new Array(9)].map((_, index) => <Skeleton key={index} />))
            : paginatedItems.length > 0 ? (
              paginatedItems.map((item, index) => <Card item={item} key={index} />)
            ) : (
              <p>No products found</p>
            )
            }
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

