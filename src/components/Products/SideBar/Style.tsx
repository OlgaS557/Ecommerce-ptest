import { useState } from 'react';
import { useAppDispatch } from '../../../hook/redux';
// import { setStyleItem } from '../../../redux/slices/filterSlice';
import { menuProducts } from '../../../Utils/Data';
import styles from "../../../css_modules/sidebar.module.css";
import { List, ListItemButton, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Line from '../../../Assets/img/Line.jpg';
import IconAngleUp from '../../../Assets/Icons/Navigation/angle-up.svg';
import IconAngleDown from '../../../Assets/Icons/Navigation/angle-down.svg';

const Style = () => {

    const dispatch = useAppDispatch();
    
    const [isStyleOpen, setIsStyleOpen] = useState(false);

    const handleClickStyle = () => {
        setIsStyleOpen(!isStyleOpen);
    };

    // const onChangeStyle = (e: any) => {
    //     setStyleItem(e.target.outerText);
    //     console.log(e.target.outerText);
    //     dispatch(setStyleItem(e.target.outerText));
    // };

  return (
    <List>
        <ListItemButton onClick={handleClickStyle} >
                <div className={styles.title}>
                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[5]} </Typography>
                    {isStyleOpen ?
                        <img src={IconAngleUp} alt=''/> :
                        <img src={IconAngleDown} alt=''/>
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
    </List>
  )
}

export default Style;