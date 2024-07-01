import { useState } from 'react';
import { useAppDispatch } from '../../../hook/redux';
// import { setCollectionItem } from '../../../redux/slices/filterSlice';
import { menuProducts } from '../../../Utils/Data';
import styles from "../../../css_modules/sidebar.module.css";
import { List, ListItemButton, Typography } from '@mui/material';
import CheckboxMui from '../../Btn/CheckboxMui';
import Collapse from '@mui/material/Collapse';
import Line from '../../../Assets/img/Line.jpg';
import IconAngleUp from '../../../Assets/Icons/Navigation/angle-up.svg';
import IconAngleDown from '../../../Assets/Icons/Navigation/angle-down.svg';

const Collection = () => {

    const dispatch = useAppDispatch();
    
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);

    const handleClickCollection = () => {
        setIsCollectionOpen(!isCollectionOpen);
    };

    // const onChangeCollection = (e: any) => {
    //     setCollectionItem(e.target.outerText);
    //     console.log(e.target.outerText);
    //     dispatch(setCollectionItem(e.target.outerText));
    // };

  return (
    <List>
        <ListItemButton onClick={handleClickCollection} >
                <div className={styles.title}>
                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[3]} </Typography>
                    {isCollectionOpen ?
                        <img src={IconAngleUp} alt=''/> :
                        <img src={IconAngleDown} alt=''/>
                    }
                </div>
            </ListItemButton>
            <Collapse sx={{ pl: 2 }} in={isCollectionOpen} timeout="auto" unmountOnExit>
                <div className={styles.widget_wrapper_items}>
                    {menuProducts.Collection.map((item, index) =>
                        <div key={index} className={styles.item}>
                            <CheckboxMui>{item}</CheckboxMui>
                        </div>)}
                </div>
            </Collapse>
    </List>
  )
}

export default Collection;