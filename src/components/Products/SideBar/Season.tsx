import { useState } from 'react';
// import { setSeasonItem } from '../../../redux/slices/filterSlice';
import { List, ListItemButton, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconAngleDown from '../../../Assets/Icons/Navigation/angle-down.svg';
import IconAngleUp from '../../../Assets/Icons/Navigation/angle-up.svg';
import Line from '../../../Assets/img/Line.jpg';
import { menuProducts } from '../../../Utils/Data';
import styles from "../../../css_modules/sidebar.module.css";
import CheckboxMui from '../../Btn/CheckboxMui';

const Season = () => {
    
    const [isSeasonOpen, setIsSeasonOpen] = useState(false);

    const handleClickSeason = () => {
        setIsSeasonOpen(!isSeasonOpen);
    };

    // const onChangeSeason = (e: any) => {
    //     setSeasonItem(e.target.outerText);
    //     console.log(e.target.outerText);
    //     dispatch(setSeasonItem(e.target.outerText));
    // };

  return (
    <List>
        <ListItemButton onClick={handleClickSeason} >
                <div className={styles.title}>
                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[6]} </Typography>
                    {isSeasonOpen ?
                        <img src={IconAngleUp} alt=''/> :
                        <img src={IconAngleDown} alt=''/>
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
    </List>
  )
}

export default Season;