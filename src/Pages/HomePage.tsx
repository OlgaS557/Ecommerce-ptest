import {FC} from 'react';
import Subscribe from '../components/Subscribe';
import Banner from '../components/gallery/Banner';

const HomePage:FC = () => {

    return (
        <div>
            <Banner />
            <Subscribe />
        </div>
    )
}

export default HomePage;

// import {FC, useEffect, useState} from 'react';

// import Subscribe from '../components/Subscribe';
// import Slider from '../components/slider/Slider';

// import { productsService } from '../config/service-config';
// // import { productAPI } from '../redux/services/ProductService';
// import Blog from '../components/Blog/Blog';
// import { Link, useNavigate} from 'react-router-dom';

// import Card from '../components/Products/Card';
// import { Product } from '../models/Product';
// import Pagination from '../components/Pagination.tsx/Pagination';
// import Modal from '../components/Modal/Modal';
// import { Portal } from '../components/Portal';
// import { categories } from '../Utils/Data';
// import { useAppDispatch, useAppSelector } from '../hook/redux';
// import { fetchProducts } from '../redux/Slices/productsSlice';

// const blog = {
//     url: 'https://jobycodirect.com/images/items/abc1.jpg',
//     title: 'Workout From Home Routines: Tips and Best Practices',
//     date: '07.08.2020'
// }

// const HomePage:FC = () => {
//     const [query, setQuery] = useState('/');
//     const [openBasket, setOpenBasket] = useState<boolean>(false);
//     const {products, status} = useAppSelector(state => state.products);
//     const {cart} = useAppSelector(state => state.cart);
//     console.log(cart)
//     // const {data: product = [], error, isLoading} = productAPI.useFetchAllProductsQuery(query);
//     const [currentPage, setCurrentPage] = useState<number>(1);

//     const dispatch = useAppDispatch();

//     useEffect(()=>{
//         dispatch(fetchProducts())
//     }, [])
 
//     const navigate = useNavigate();
 
//     console.log('HomePage');

//     // const hendelOpenBasket = () => {
//     //     setOpenBasket(()=>!openBasket);
//     // }
//    const handleViewProduct = (id: string) => {
//         console.log(id);
//         navigate(`product/${id}`)
//    }
   
//     const renderProductList = (arr: Product[] = []) => {
//         if(status === 'loading'){
//             return (
//                 <h1>Идет загрузка...</h1>
//             )
//         }
//         if(status === 'error'){
//             return (
//                 <h1>Произошла ошибка при загрузке</h1>
//             )
//         }
//         if(status === 'success'){
//              return arr.map((prod, index) =>{
//             return (
//                 <Card key={index} prod={prod} setOpenBasket={setOpenBasket} handleViewProduct={handleViewProduct}/>
//             )
//         })
//         }
//     }

    
//     //Пагинация
//     // const lastCountryIndex = currentPage * countriesPerPage;
//     // const firstCountryIndex = lastCountryIndex - countriesPerPage;
//     // const currentCountry = product.slice(firstCountryIndex, lastCountryIndex);
//     // console.log(currentCountry)

//     const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
//     const nextPage = () => setCurrentPage(prev => prev + 1);
//     const prevPage = () => setCurrentPage(prev => prev - 1);

//     const elements = renderProductList(products);

//     return (
//         <div className='homePage'>
//             <Slider/>
//             <div className='homePage__title title title_fz36'>New arrivals</div>
//             <div className='homePage__wrapper'>
//                 <div className='homePage__product'>
//                     {elements}
                    
//                 </div>
//                 <Pagination 
//                 countriesPerPage={10} 
//                 totalCountries={products.length}
//                 paginate={paginate}
//                 nextPage={nextPage}
//                 prevPage={prevPage}
//                 />
//             </div>
            
//             <div className='homePage__categories'>
//                 <div className='title title_fz36 homePage__subtitle'>Categories</div>
//                 <div className='homePage__categories_block'>
//                     {categories.map((item, index) => {
//                         if(index === 0){
//                             return (
//                                 <Link to={item.url} key={index} className='homePage__categories_item vertical'>
//                                     <div className='homePage__categories_item men'>{item.name}</div>
//                                     <img src={item.img} alt="men" />
//                                 </Link>
//                             )
//                         }
//                         return (
//                             <Link to={item.url}  key={index} className='homePage__categories_item'>
//                                 <div className='homePage__categories_item subtitle'>{item.name}</div>
//                                 <img src={item.img} alt={item.name} />
//                             </Link>
//                         )
//                     })}
//                 </div>
//             </div>

//             <div className='homePage__wrapperBlog'>
//                 <div className='title title_fz36 homePage__subtitle'>Blog</div>
//                 <div className='homePage__blogs'>
//                     {[...Array(3)].map((_, index)=> (
//                         <Link to='/blogs' key={index}>
//                             <Blog url={blog.url} title={blog.title} date={blog.date}/>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
            
//             <Subscribe/>
//             {openBasket ? <Portal>
//                             <Modal setOpenBasket={setOpenBasket}/>
//                         </Portal>
//             : null}
//         </div>
//     )
// }

// export default HomePage;