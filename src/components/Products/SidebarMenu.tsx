import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../hook/redux';
import { setCategoryItem, setPriceItem } from '../../redux/slices/filterSlice';
import { menuProducts } from '../../Utils/Data';
import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import styles from "../../css_modules/sidebar.module.css";

import CheckboxMui from '../Btn/CheckboxMui';
import Line from '../../Assets/img/Line.jpg';
// import NestedList from './NestedList';
import { Box,FormGroup, FormControl, FormControlLabel, Radio, RadioGroup, Checkbox } from '@mui/material';




// const SidebarMenu: FC = () => {
//     const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//     const [isPriceOpen, setIsPriceOpen] = useState(false);
//     const [isBrandOpen, setIsBrandOpen] = useState(false);
//     const [isSizeOpen, setIsSizeOpen] = useState(false);
//     const [isSeasonOpen, setIsSeasonOpen] = useState(false);
//     const [isStyleOpen, setIsStyleOpen] = useState(false);
//     const [isCollectionOpen, setIsCollectionOpen] = useState(false);


//     const handleClickCategory = () => {
//         setIsCategoryOpen(!isCategoryOpen);
//       };
//       const handleClickSeason = () => {
//         setIsSeasonOpen(!isSeasonOpen);
//       };
//       const handleClickCollection = () => {
//         setIsCollectionOpen(!isCollectionOpen);
//       };
//       const handleClickPrice = () => {
//         setIsPriceOpen(!isPriceOpen);
//       };
//       const handleClickBrand = () => {
//         setIsBrandOpen(!isBrandOpen);
//       };
//       const handleClickSize = () => {
//         setIsSizeOpen(!isSizeOpen);
//       };
//       const handleClickStyle = () => {
//         setIsStyleOpen(!isStyleOpen);
//       };

//       const [chosenCategory, setChosenCategory] = useState("T-shirts");
//       const handleClickCategoryItem = (value: string) => {
//         setChosenCategory(value);
//       };
//     return (
//         <List className={styles.widget_wrapper}>
//             <ListItemButton onClick={handleClickCategory} >
//                 <div className={styles.title}>

//                     <div className={styles.line}><img src={Line} alt="Line" /></div>
//                     <ListItemText className={styles.title_name} primary={Object.keys(menuProducts)[0]} />
//                     {isCategoryOpen ?
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
//                         </svg> :
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
//                         </svg>
//                     }

//                 </div>
//             </ListItemButton>
//             {menuProducts.Category.map((item, index) => {
//              const isCurrent = item === chosenCategory;
//              return (
//              <Collapse key={index} in={isCategoryOpen} timeout="auto" unmountOnExit>
//                 <List className={styles.widget_wrapper_items}>
//                     <ListItemButton sx={{
//                       pl: 2,
//                       color: isCurrent ? "#2D74FF" : "none ",
//                       fontSize: 16,
//                       fontWeight: isCurrent ? 800 : 500,
//                       "&:hover": {
//                         color: "#2D74FF",
//                       }
//                       }}
//                      onClick={() => handleClickCategoryItem(item)}>
//                      <ListItemText primary={item} />
//                     </ListItemButton>
//                 </List>
//              </Collapse>
//              );
//             })}
//             <ListItemButton onClick={handleClickPrice} >
//                 <div className={styles.title}>

//                     <div className={styles.line}><img src={Line} alt="Line" /></div>
//                     <ListItemText className={styles.title_name} primary={Object.keys(menuProducts)[1]} />
//                     {isPriceOpen ?
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
//                         </svg> :
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
//                         </svg>
//                     }

//                 </div>
//             </ListItemButton>
//             <Collapse sx={{ pl: 2 }} in={isPriceOpen} timeout="auto" unmountOnExit>
//                 <div className={styles.widget_wrapper_items}>
//                     {menuProducts.Price.map((item, index) =>
//                         <div key={index} className={styles.item}>
//                             <CheckboxMui>{item}</CheckboxMui>
//                         </div>)}
//                 </div>
//             </Collapse>
//             <ListItemButton onClick={handleClickSize} >
//                 <div className={styles.title}>

//                     <div className={styles.line}><img src={Line} alt="Line" /></div>
//                     <ListItemText className={styles.title_name} primary={Object.keys(menuProducts)[2]} />
//                     {isSizeOpen ?
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
//                         </svg> :
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
//                         </svg>
//                     }

//                 </div>
//             </ListItemButton>
//             <div 
//               style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(2, 1fr)",
//               gridTemplateRows: "repeat(3, 1fr)",
//               gap: 0,
//               gridAutoFlow: "column",
//               }}
//             >
//              {menuProducts.Size.map((item, index) => (   
//               <Collapse sx={{ pl: 4 }} key={index} className={styles.item} in={isSizeOpen} timeout="auto" unmountOnExit>
//                   <CheckboxMui>{item}</CheckboxMui>
//               </Collapse>
//              ))} 
//             </div>
//             <ListItemButton onClick={handleClickCollection} >
//                 <div className={styles.title}>

//                     <div className={styles.line}><img src={Line} alt="Line" /></div>
//                     <ListItemText className={styles.title_name} primary={Object.keys(menuProducts)[3]} />
//                     {isCollectionOpen ?
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
//                         </svg> :
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
//                         </svg>
//                     }

//                 </div>
//             </ListItemButton>
//             <Collapse in={isCollectionOpen} timeout="auto" unmountOnExit>
//                 <div className={styles.widget_wrapper_items}>
//                     {menuProducts.Collection.map((item, index) =>
//                         <div key={index} className={styles.item}>
//                             <CheckboxMui>{item}</CheckboxMui>
//                         </div>)}
//                 </div>
//             </Collapse>
//             <ListItemButton onClick={handleClickBrand} >
//                 <div className={styles.title}>

//                     <div className={styles.line}><img src={Line} alt="Line" /></div>
//                     <ListItemText className={styles.title_name} primary={Object.keys(menuProducts)[4]} />
//                     {isBrandOpen ?
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
//                         </svg> :
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
//                         </svg>
//                     }

//                 </div>
//             </ListItemButton>
//             <Collapse in={isBrandOpen} timeout="auto" unmountOnExit>
//                 <div className={styles.widget_wrapper_items}>
//                     {menuProducts.Brand.map((item, index) =>
//                         <div key={index} className={styles.item}>
//                             <CheckboxMui>{item}</CheckboxMui>
//                         </div>)}
//                 </div>
//             </Collapse>
//             <ListItemButton onClick={handleClickStyle} >
//                 <div className={styles.title}>

//                     <div className={styles.line}><img src={Line} alt="Line" /></div>
//                     <ListItemText className={styles.title_name} primary={Object.keys(menuProducts)[5]} />
//                     {isStyleOpen ?
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
//                         </svg> :
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
//                         </svg>
//                     }

//                 </div>
//             </ListItemButton>
//             <Collapse in={isStyleOpen} timeout="auto" unmountOnExit>
//                 <div className={styles.widget_wrapper_items}>
//                     {menuProducts.Style.map((item, index) =>
//                         <div key={index} className={styles.item}>
//                             <RadioMui>{item}</RadioMui>
//                         </div>)}
//                 </div>
//             </Collapse>
//             <ListItemButton onClick={handleClickSeason} >
//                 <div className={styles.title}>

//                     <div className={styles.line}><img src={Line} alt="Line" /></div>
//                     <ListItemText className={styles.title_name} primary={Object.keys(menuProducts)[6]} />
//                     {isSeasonOpen ?
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
//                         </svg> :
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
//                         </svg>
//                     }

//                 </div>
//             </ListItemButton>
//             <Collapse in={isSeasonOpen} timeout="auto" unmountOnExit>
//                 <div className={styles.widget_wrapper_items}>
//                     {menuProducts.Season.map((item, index) =>
//                         <div key={index} className={styles.item}>
//                             <CheckboxMui>{item}</CheckboxMui>
//                         </div>)}
//                 </div>
//             </Collapse>

//         </List >
//     )
// }

// export default SidebarMenu;

// type propsType = {
//     value: number,
//     onChangeSidebarItem: (e: any) => void;
//     // setSortItem: (i: any) => void;
// }
// const SidebarMenu: FC = ({value, onClickSidebarItem}: propsType) =>

function SidebarMenu() {
    const dispatch = useAppDispatch();
    const categoryItem = useAppSelector((state) => state.filterReducer.categoryItem);
    const priceItem = useAppSelector((state) => state.filterReducer.priceItem);
    console.log('categoryItem', categoryItem);
    console.log('priceItem', priceItem);

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isSeasonOpen, setIsSeasonOpen] = useState(false);
    const [isStyleOpen, setIsStyleOpen] = useState(false);
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);

    const [checked, setChecked] = useState(true);
   
    console.log(checked)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setChecked(event?.target.checked);
    }
    const handleClickCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
        // console.log(event.target.value)
        // setSortItem(event.target.value);
    };
    const handleClickSeason = () => {
        setIsSeasonOpen(!isSeasonOpen);
    };
    const handleClickCollection = () => {
        setIsCollectionOpen(!isCollectionOpen);
    };
    const handleClickPrice = () => {
        setIsPriceOpen(!isPriceOpen);
    };
    const handleClickBrand = () => {
        setIsBrandOpen(!isBrandOpen);
    };
    const handleClickSize = () => {
        setIsSizeOpen(!isSizeOpen);
    };
    const handleClickStyle = () => {
        setIsStyleOpen(!isStyleOpen);
    };

    //   const [chosenCategory, setChosenCategory] = useState("T-shirts");
    //   const handleClickCategoryItem = (value: string) => {
    //     setChosenCategory(value);
    //   };
    const onChangeSidebarItem = (e: any) => {
        setCategoryItem(e.target.outerText);
        console.log(e.target.outerText);
        dispatch(setCategoryItem(e.target.outerText));
    };
    const onChangePriceItem = (item: any) => {
        setPriceItem(item);
        console.log(item);
        dispatch(setPriceItem(item));
    };

    return (
        <List className={styles.widget_wrapper}>
            <ListItemButton onClick={handleClickCategory} >
                <div className={styles.title}>
                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[0]} </Typography>
                    {isCategoryOpen ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
                        </svg> :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
                        </svg>
                    }
                </div>
            </ListItemButton>
            {menuProducts.Category.map((item: any, index) => {
                const isCurrent = item === categoryItem;
                return (
                    <Collapse key={index} in={isCategoryOpen} timeout="auto" unmountOnExit>
                        <List className={styles.widget_wrapper_items}>
                            <ListItemButton sx={{
                                pl: 2,
                                color: isCurrent ? "#2D74FF" : "none ",
                                "&:hover": {
                                    color: "#2D74FF",
                                }
                            }}
                                key={index}
                            >
                                <ListItemText primary={item} onClick={(event) => onChangeSidebarItem(event)} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                );
            })}
            <ListItemButton onClick={handleClickPrice} >
                <div className={styles.title}>

                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[1]} </Typography>
                    {isPriceOpen ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
                        </svg> :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
                        </svg>
                    }

                </div>
            </ListItemButton>
            <Collapse sx={{ pl: 2 }} in={isPriceOpen} timeout="auto" unmountOnExit>
                <Box className={styles.widget_wrapper_items}>
                        {menuProducts.Price.map((item, index) =>
                            <FormControlLabel className={styles.item}
                                key={index}
                                label={item}
                                control={<Checkbox onClick={() => onChangePriceItem(item)} />}
                            />)
                        }
                </Box>
            </Collapse>
            <ListItemButton onClick={handleClickSize} >
                <div className={styles.title}>

                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[2]} </Typography>
                    {isSizeOpen ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
                        </svg> :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
                        </svg>
                    }

                </div>
            </ListItemButton>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gap: 0,
                    gridAutoFlow: "column",
                }}
            >
                {menuProducts.Size.map((item, index) => (
                    <Collapse sx={{ pl: 4 }} key={index} className={styles.item} in={isSizeOpen} timeout="auto" unmountOnExit>
                        <CheckboxMui>{item}</CheckboxMui>
                    </Collapse>
                ))}
            </div>
            <ListItemButton onClick={handleClickCollection} >
                <div className={styles.title}>

                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[3]} </Typography>
                    {isCollectionOpen ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
                        </svg> :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
                        </svg>
                    }

                </div>
            </ListItemButton>
            <Collapse in={isCollectionOpen} timeout="auto" unmountOnExit>
                <div className={styles.widget_wrapper_items}>
                    {menuProducts.Collection.map((item, index) =>
                        <div key={index} className={styles.item}>
                            <CheckboxMui>{item}</CheckboxMui>
                        </div>)}
                </div>
            </Collapse>
            <ListItemButton onClick={handleClickBrand} >
                <div className={styles.title}>

                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[4]} </Typography>
                    {isBrandOpen ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
                        </svg> :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
                        </svg>
                    }

                </div>
            </ListItemButton>
            <Collapse in={isBrandOpen} timeout="auto" unmountOnExit>
                <div className={styles.widget_wrapper_items}>
                    {menuProducts.Brand.map((item, index) =>
                        <div key={index} className={styles.item}>
                            <CheckboxMui>{item}</CheckboxMui>
                        </div>)}
                </div>
            </Collapse>
            <ListItemButton onClick={handleClickStyle} >
                <div className={styles.title}>

                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[5]} </Typography>
                    {isStyleOpen ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
                        </svg> :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
                        </svg>
                    }

                </div>
            </ListItemButton>
            <Collapse in={isStyleOpen} timeout="auto" unmountOnExit>
                <div className={styles.widget_wrapper_items}>
                    <FormControl>
                        {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="All styles"
                            name="radio-buttons-group"
                        >
                            {menuProducts.Style.map((item, index) =>

                                <FormControlLabel value={item} control={<Radio sx={{
                                    color: "primary",
                                    "&.Mui-checked": { color: "#2D74FF" },
                                    pl: 3 }} />} 
                                    label={item} key={index} 
                                />)
                            }
                        </RadioGroup>
                    </FormControl>
                </div>
            </Collapse>
            <ListItemButton onClick={handleClickSeason} >
                <div className={styles.title}>

                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[6]} </Typography>
                    {isSeasonOpen ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.4099L12.71 9.16994C12.617 9.07622 12.5064 9.00182 12.3846 8.95105C12.2627 8.90028 12.132 8.87415 12 8.87415C11.868 8.87415 11.7373 8.90028 11.6154 8.95105C11.4936 9.00182 11.383 9.07622 11.29 9.16994L7.05001 13.4099C6.95628 13.5029 6.88189 13.6135 6.83112 13.7354C6.78035 13.8572 6.75421 13.9879 6.75421 14.1199C6.75421 14.252 6.78035 14.3827 6.83112 14.5045C6.88189 14.6264 6.95628 14.737 7.05001 14.8299C7.23737 15.0162 7.49082 15.1207 7.75501 15.1207C8.0192 15.1207 8.27265 15.0162 8.46001 14.8299L12 11.2899L15.54 14.8299C15.7263 15.0147 15.9777 15.1188 16.24 15.1199C16.3716 15.1207 16.5021 15.0955 16.6239 15.0457C16.7458 14.996 16.8566 14.9226 16.95 14.8299C17.0471 14.7403 17.1254 14.6324 17.1805 14.5123C17.2357 14.3922 17.2664 14.2624 17.2711 14.1304C17.2757 13.9983 17.2542 13.8667 17.2076 13.743C17.1611 13.6194 17.0905 13.5062 17 13.4099Z" fill="black" />
                        </svg> :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46001 9.16994C8.27265 8.98369 8.0192 8.87915 7.75501 8.87915C7.49082 8.87915 7.23737 8.98369 7.05001 9.16994C6.95628 9.26291 6.88189 9.37351 6.83112 9.49537C6.78035 9.61723 6.75421 9.74793 6.75421 9.87994C6.75421 10.012 6.78035 10.1427 6.83112 10.2645C6.88189 10.3864 6.95628 10.497 7.05001 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill="black" />
                        </svg>
                    }

                </div>
            </ListItemButton>
            {/* <p>  <NestedList>{Object.keys(menuProducts)[6]} </NestedList> </p> */}
            <Collapse in={isSeasonOpen} timeout="auto" unmountOnExit>
                <div className={styles.widget_wrapper_items}>
                    {menuProducts.Season.map((item, index) =>
                        <div key={index} className={styles.item}>
                            <CheckboxMui>{item}</CheckboxMui>
                        </div>)}
                </div>
            </Collapse>

        </List >
    )
}

export default SidebarMenu;