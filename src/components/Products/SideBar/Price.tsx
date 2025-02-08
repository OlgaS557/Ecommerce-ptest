import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { setPriceItem } from '../../../redux/slices/filterSlice';
import { menuProducts } from '../../../Utils/Data';
import styles from "../../../css_modules/sidebar.module.css";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { Box, FormControlLabel, Checkbox } from '@mui/material';
import Line from '../../../Assets/img/Line.jpg';
import IconAngleUp from '../../../Assets/Icons/Navigation/angle-up.svg';
import IconAngleDown from '../../../Assets/Icons/Navigation/angle-down.svg';

interface PriceItem {
    Label: string;
    valueFrom: number;
    valueTo: number;
}
const Price = () => {

    const dispatch = useAppDispatch();
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const priceItem = useAppSelector((state) => state.filterReducer.priceItem as PriceItem[]);
    
    const handleClickPrice = () => {
        setIsPriceOpen(!isPriceOpen);
    };

    // const onChangePriceItem = (item: typeof priceItem) => {  
    //     setPriceItem(item);
    //     console.log('FilteredPriceItem', item);
    //     dispatch(setPriceItem(item));
    // };

    const onChangePriceItem = (item: PriceItem) => {
        let updatedPriceItems: PriceItem[];

        if (priceItem.some((price) => price.valueFrom === item.valueFrom && price.valueTo === item.valueTo)) {
            // Если диапазон уже выбран, убираем его
            updatedPriceItems = priceItem.filter(price => price.valueFrom !== item.valueFrom || price.valueTo !== item.valueTo);
        } else {
            // Добавляем новый диапазон
            updatedPriceItems = [...priceItem, item];
        }

        console.log("FilteredPriceItem", updatedPriceItems);
        dispatch(setPriceItem(updatedPriceItems));
    };
  return (
    <List>
        <ListItemButton onClick={handleClickPrice} >
                <div className={styles.title}>
                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[1]} </Typography>
                    {isPriceOpen ?
                        <img src={IconAngleUp} alt=''/> :
                        <img src={IconAngleDown} alt=''/>
                    }
                </div>
            </ListItemButton>
            <Collapse sx={{ pl: 2 }} in={isPriceOpen} timeout="auto" unmountOnExit>
                <Box className={styles.widget_wrapper_items}>
                    {menuProducts.Price.map((item, index) =>
                        <FormControlLabel className={styles.item}
                            key={index}
                            label={<span>{item.Label}</span>}
                            // control={<Checkbox onClick={() => onChangePriceItem(item)} />}
                            control={
                                <Checkbox
                                    checked={priceItem.some(price => price.valueFrom === item.valueFrom && price.valueTo === item.valueTo)}
                                    onChange={() => onChangePriceItem(item)}
                                />
                            }
                        />)
                    }
                </Box>
            </Collapse>
    </List>
  )
}

export default Price;