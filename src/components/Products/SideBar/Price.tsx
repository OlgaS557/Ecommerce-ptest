import { useState } from 'react';
import { useAppDispatch } from '../../../hook/redux';
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

const Price = () => {

    const dispatch = useAppDispatch();
    const [isPriceOpen, setIsPriceOpen] = useState(false);

    const handleClickPrice = () => {
        setIsPriceOpen(!isPriceOpen);
    };

    const onChangePriceItem = (item: any) => {
        setPriceItem(item);
        console.log(item);
        dispatch(setPriceItem(item));
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
                            control={<Checkbox onClick={() => onChangePriceItem(item)} />}
                        />)
                    }
                </Box>
            </Collapse>
    </List>
  )
}

export default Price;