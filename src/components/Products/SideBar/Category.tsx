import { ListItemText, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { useState } from 'react';
import IconAngleDown from '../../../Assets/Icons/Navigation/angle-down.svg';
import IconAngleUp from '../../../Assets/Icons/Navigation/angle-up.svg';
import Line from '../../../Assets/img/Line.jpg';
import styles from "../../../css_modules/sidebar.module.css";
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { setCategoryItem } from '../../../redux/slices/filterSlice';
import { menuProducts } from '../../../Utils/Data';

const Category = () => {

    const dispatch = useAppDispatch();
    const {categoryItems} = useAppSelector((state) => state.filterReducer);

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    
    const handleClickCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const onChangeCategoryItem = (e: any) => {
        const selectedCategory = e.target.outerText;
          dispatch(setCategoryItem(selectedCategory));
      };  

    return (
        <List
            sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemButton onClick={handleClickCategory} >
                <div className={styles.title}>
                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[0]} </Typography>
                    {isCategoryOpen ?
                        <img src={IconAngleUp} alt='' /> :
                        <img src={IconAngleDown} alt='' />
                    }
                </div>
            </ListItemButton>
            {menuProducts.Category.map((item: any, index) => {
                const isCurrent = categoryItems.includes(item);
                return (
                    <Collapse key={index} in={isCategoryOpen} timeout="auto" unmountOnExit>
                        <List className={styles.widget_wrapper_items}>
                            <ListItemButton sx={{
                                padding: 0,
                                pl: 2,
                                color: isCurrent ? "#2D74FF" : "none"
                            }}
                                key={index}
                            >
                                <ListItemText primary={item} onClick={onChangeCategoryItem} />
                            </ListItemButton>
                        </List>
                    </Collapse>
                );
            })}
        </List>
    )
}

export default Category;

 // const onChangeSidebarItem = (e: any) => {
    //     const selectedCategory = e.target.outerText;
    //     if (categoryItems === selectedCategory) {
    //       dispatch(setCategoryItem('All'));
    //     } else {
    //       dispatch(setCategoryItem(selectedCategory));
    //     }
    //   }; 