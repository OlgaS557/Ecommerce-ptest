import { FC, useEffect, useState, useRef } from 'react';
import {Link, NavLink, useMatch} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hook/redux'; 
import { setSearchQuery, setGender, setCategoryItem } from '../../redux/slices/filterSlice';
import {ReactComponent as User} from '../../Assets/Icons/Base/user.svg';
import {ReactComponent as Search} from '../../Assets/Icons/Base/search.svg';
import {ReactComponent as ShoppingBag} from '../../Assets/Icons/Base/shopping-bag.svg';
import { navMenu } from '../../Utils/Data';
import BarMenu from './BarMenu';
import style from './navBar.module.scss';

const NavBar: FC = () => {
    
    const [isBarMenuOpen, setIsBarMenuOpen] = useState<boolean>(false);
    const [currentMenu, setCurrentMenu] = useState<string | null>(null); 
    const dispatch = useAppDispatch();
    const {items} = useAppSelector(state => state.cartReducer);
    const user = useAppSelector(state => state.userReducer);
    const match = useMatch('/'); 
   
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value;
        dispatch(setSearchQuery(searchQuery));
    }
    
    const handleBarMenuMouseEnter = (item: {name: string}) => {
        setCurrentMenu(item.name);
        setIsBarMenuOpen(true);
      };
    
      const handleBarMenuMouseLeave = () => {
        setIsBarMenuOpen(false);
        setCurrentMenu(null);
      };
   
    const handleBarMenuOnClick = (item: {name: string; url: string}) => {
        dispatch(setGender(item.name));
        // dispatch(setCategoryItem('All'));
       }
    
    return (
        <>
            <div className={style.navbar} style={{ backgroundColor: match ? '#17181f' : 'white' }}>
                <div className={style.navbar__container}>
                    <div className={style['navbar__container-menu']} >
                        <Link to='/' className={style['navbar__container-logo']} style={{ color: match ? 'white' : 'black' }}>LOGO</Link>
                        <div className={style.navbar__container_block}>
                            {navMenu.map((item) => (
                                <NavLink to={item.url} key={item.name}
                                    className={match ? style.navbar__container_itemWhite : style.navbar__container_itemBlack}
                                    style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "" })} 
                                    onMouseEnter={() => handleBarMenuMouseEnter(item)}
                                    onClick={() => handleBarMenuOnClick(item)}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className={style['navbar__container-search']}>
                        <div className={style['navbar__container-search-input']}>
                            <input type="text" onChange={handleSearch} placeholder='Search' style={{
                                backgroundColor: match ? '#17181f' : 'white',
                                border: "1px solid rgba(91, 85, 85, 1)",
                                color: match ? 'white' : 'black'
                            }} />
                            <Search fill={match ? 'white' : 'black'} />
                        </div>
                        <button type='button' className={style['navbar__container-search-basket']}>
                            <Link to="/cart">
                                <ShoppingBag fill={match ? 'white' : 'black'} />
                                <span>{items.length}</span>
                            </Link>
                        </button>
                        <NavLink
                            to={user.jwtToken ? '/profile' : '/login'}
                            className={style['navbar__container-search-login']}
                        >
                            <User fill={match ? 'white' : 'black'} />
                        </NavLink>
                        {/* <Link to='/login' className={style['navbar__container-search-login']} >
                            <User fill={match ? 'white' : 'black'} />
                        </Link> */}
                    </div>
                </div>
            </div>
            {isBarMenuOpen && currentMenu && ( // Проверяем, что isBarMenuOpen и currentMenu не являются null или undefined
                <div className={`${isBarMenuOpen ? 'active' : 'hidden'}`}>
                    <BarMenu handleBarMenuMouseLeave={handleBarMenuMouseLeave} currentMenu={currentMenu} />
                </div>
            )}
        </>
    )
}

export default NavBar;

// return (
//     <>
//         <div className='navbar'>
//             <div className='navbar__container'>
//                 <div className='navbar__container-menu'>
//                     <div className='navbar__container-logo'>LOGO</div>
//                     <div onClick={hiddenBlock} className={`navbar__container-item${activeState ? " active" : ""}`}>Men</div>
//                     <div onClick={hiddenBlock} className={`navbar__container-item${activeState ? " active" : ""}`}>Women</div>
//                     <div onClick={hiddenBlock} className={`navbar__container-item${activeState ? " active" : ""}`}>Kids</div>
//                     <div className='navbar__container-item'>Sale</div>
//                     <div className='navbar__container-item'>Collections</div>
//                     <div className='navbar__container-item'>Blog</div>
//                 </div>
//                 <div className='navbar__container-search'>
//                     <div className='navbar__container-search-input'>
//                         <input type="text" onChange={handleSearch} placeholder='Search' />
//                         <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43207 2.04546 6.24275 2.98759 4.61517 4.61517C2.98759 6.24275 2.04546 8.43207 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8482 21.6171 21.7738 21.71 21.68C21.8903 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9923 4.13453 9.63439C4.40463 8.27653 5.07131 7.02925 6.05028 6.05028C7.02925 5.07131 8.27653 4.40463 9.63439 4.13453C10.9923 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9498 15.9498C14.637 17.2625 12.8565 18 11 18Z" fill="black" />
//                         </svg>
//                     </div>

//                     <button type='button' className='navbar__container-search-basket'>
//                         <Link to="/cart">
//                             <svg width="20" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z" fill="black" />
//                             </svg>
//                             <span>{items.length}</span>
//                         </Link> 
//                     </button>
//                     <div className='navbar__container-search-login'>
//                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M15.71 12.71C16.6904 11.9387 17.406 10.8809 17.7572 9.68394C18.1085 8.48697 18.0779 7.21027 17.6698 6.03147C17.2617 4.85267 16.4963 3.83039 15.4801 3.10686C14.4639 2.38332 13.2474 1.99451 12 1.99451C10.7525 1.99451 9.53611 2.38332 8.51993 3.10686C7.50374 3.83039 6.73834 4.85267 6.33021 6.03147C5.92208 7.21027 5.89151 8.48697 6.24276 9.68394C6.59401 10.8809 7.3096 11.9387 8.29 12.71C6.61007 13.383 5.14428 14.4994 4.04889 15.9399C2.95349 17.3805 2.26956 19.0913 2.07 20.89C2.05555 21.0213 2.06711 21.1542 2.10402 21.2811C2.14093 21.4079 2.20246 21.5263 2.28511 21.6293C2.45202 21.8375 2.69478 21.9708 2.96 22C3.22521 22.0292 3.49116 21.9518 3.69932 21.7849C3.90749 21.618 4.04082 21.3752 4.07 21.11C4.28958 19.1552 5.22168 17.3498 6.68822 16.0388C8.15475 14.7278 10.0529 14.003 12.02 14.003C13.9871 14.003 15.8852 14.7278 17.3518 16.0388C18.8183 17.3498 19.7504 19.1552 19.97 21.11C19.9972 21.3557 20.1144 21.5827 20.2991 21.747C20.4838 21.9114 20.7228 22.0015 20.97 22H21.08C21.3421 21.9698 21.5817 21.8373 21.7466 21.6313C21.9114 21.4252 21.9881 21.1624 21.96 20.9C21.7595 19.0962 21.0719 17.381 19.9708 15.9382C18.8698 14.4954 17.3969 13.3795 15.71 12.71ZM12 12C11.2089 12 10.4355 11.7654 9.77772 11.3259C9.11992 10.8864 8.60723 10.2616 8.30448 9.53074C8.00173 8.79983 7.92251 7.99557 8.07686 7.21964C8.2312 6.44372 8.61216 5.73099 9.17157 5.17158C9.73098 4.61217 10.4437 4.2312 11.2196 4.07686C11.9956 3.92252 12.7998 4.00173 13.5307 4.30448C14.2616 4.60724 14.8863 5.11993 15.3259 5.77772C15.7654 6.43552 16 7.20888 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12Z" fill="black" />
//                            </svg>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className={`${activeState ? 'active' : 'hidden'}`}>
//             <BarMenu />
//         </div>

//     </>
// )


                        {/* <div className='navbar__container_block' onClick={(event) => hiddenBlock(event)}>
                        <div className='navbar__container-item'>Men</div>
                        <div className='navbar__container-item'>Women</div>
                        <div className='navbar__container-item'>Kids</div>
                    </div>
                    
                    <div className='navbar__container-item'>Sale</div>
                    <div className='navbar__container-item'>Collections</div>
                    <div className='navbar__container-item'>Blog</div> */}

                    
    // useEffect(()=>{
    //     const menu = document.querySelector('.menu');
    //     if(!menu?.classList.contains('active')){
    //         menu?.classList.add('active');
    //     } else {
    //         menu?.classList.remove('active');
    //     }
    // }, [])

     //    const handleBarMenuOnClick = (e: any) => {
    //     const selectedGender = e.target.outerText;
    //     dispatch(setGender(selectedGender));
    //    }

    // export const navMenu = [
//     {
//         name: 'Men',
//         url: 'products/men'
//     },
//     {
//         name: 'Women',
//         url: 'products/women'
//     },
//     {
//         name: 'Kids',
//         url: 'products/kids'
//     },
//     {
//         name: 'Sale',
//         url: 'products/sale'
//     },
//     {
//         name: 'Collections',
//         url: 'products/collections'
//     },
//     {
//         name: 'Blog',
//         url: 'blogs'
//     }
// ];
