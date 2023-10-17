import { useState } from 'react';
import { useAppDispatch } from '../../../hook/redux';
// import { setSizeItem } from '../../../redux/slices/filterSlice';
import { menuProducts } from '../../../Utils/Data';
import styles from "../../../css_modules/sidebar.module.css";
import { List, ListItemButton, Typography } from '@mui/material';
import CheckboxMui from '../../Btn/CheckboxMui';
import Collapse from '@mui/material/Collapse';
import Line from '../../../Assets/img/Line.jpg';
import IconAngleUp from '../../../Assets/Icons/Navigation/angle-up.svg';
import IconAngleDown from '../../../Assets/Icons/Navigation/angle-down.svg';

const Size = () => {

    const dispatch = useAppDispatch();
    
    const [isSizeOpen, setIsSizeOpen] = useState(false);

    const handleClickSize = () => {
        setIsSizeOpen(!isSizeOpen);
    };

    // const onChangeSize = (e: any) => {
    //     setSizeItem(e.target.outerText);
    //     console.log(e.target.outerText);
    //     dispatch(setSizeItem(e.target.outerText));
    // };

  return (
    <List className={styles.widget_wrapper}>
        <ListItemButton onClick={handleClickSize} >
                <div className={styles.title}>
                    <div className={styles.line}><img src={Line} alt="Line" /></div>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} className={styles.title_name}> {Object.keys(menuProducts)[2]} </Typography>
                    {isSizeOpen ?
                       <img src={IconAngleUp} alt=''/> :
                       <img src={IconAngleDown} alt=''/>
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
    </List>
  )
}

export default Size;