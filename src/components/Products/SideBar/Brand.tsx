import { useState } from 'react';
import { useAppSelector,useAppDispatch } from '../../../hook/redux';
import { setBrandItem } from '../../../redux/slices/filterSlice';
import { menuProducts } from '../../../Utils/Data';
import styles from "../../../css_modules/sidebar.module.css";
import { List, ListItemButton, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Line from '../../../Assets/img/Line.jpg';
import IconAngleUp from '../../../Assets/Icons/Navigation/angle-up.svg';
import IconAngleDown from '../../../Assets/Icons/Navigation/angle-down.svg';

const Brand = () => {

    const dispatch = useAppDispatch();    
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const brandItem = useAppSelector((state) => state.filterReducer.brandItem); 
    
    const handleClickBrand = () => {
        setIsBrandOpen(!isBrandOpen);
    };
    
    const onChangeBrandItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedBrand = e.target.value;
        const isChecked = e.target.checked; // Получаем состояние выбора
      
        if (isChecked) {
          dispatch(setBrandItem([...brandItem, selectedBrand])); // Добавляем выбранный бренд в массив
        } else {
          dispatch(setBrandItem(brandItem.filter(item => item !== selectedBrand))); // Удаляем выбранный бренд из массива
        }
      };

  return (
    <List>
        <ListItemButton onClick={handleClickBrand} >
                <div className={styles.title}>
                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[4]} </Typography>
                    {isBrandOpen ?
                        <img src={IconAngleUp} alt=''/> :
                        <img src={IconAngleDown} alt=''/>
                    }
                </div>
            </ListItemButton>
            <Collapse sx={{ pl: 2 }} in={isBrandOpen} timeout="auto" unmountOnExit>
                <Box className={styles.widget_wrapper_items}>
                    {menuProducts.Brand.map((item, index) =>
                        <FormControlLabel className={styles.item}
                            key={index}
                            label={<span>{item}</span>}
                            control={<Checkbox checked={brandItem.includes(item)} onChange={onChangeBrandItem} value={item} />}
                        />)
                    }
                </Box>
            </Collapse>
    </List>
  )
}

export default Brand;

// const onChangeBrandItem = (e: any) => {
    //     const selectedBrand = e.target.value;
    //     const isChecked = e.target.checked;
    
    //     if (isChecked) {
    //       dispatch(setBrandItem(selectedBrand));
    //     } else {
    //       dispatch(setBrandItem('')); // Передаем пустую строку для снятия выбора с бренда
    //     }
    //   };

// const onChangeBrandItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedBrand = e.target.value;
    //     dispatch(setBrandItem([selectedBrand])); // Передаем выбранный бренд в массиве
    //   };

    // const onChangeBrandItem = (e: any) => {
    //     const selectedBrands = e.target.outerText;;
    //     console.log(e);
    //     dispatch(setBrandItem(selectedBrands));
    // };