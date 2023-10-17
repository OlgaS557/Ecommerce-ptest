import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hook/redux';
import Category from './Category';
import Price from './Price';
import Size from './Size';
import Collection from './Collection';
import Brand from './Brand';
import Style from './Style';
import Season from './Season';
import List from '@mui/material/List';
import styles from "../../../css_modules/sidebar.module.css";

function SidebarMenu() {  

    return (
        <List className={styles.widget_wrapper}>
            <Category />
            <Price />
            <Size />
            <Collection />
            <Brand />
            <Style />
            <Season />
        </List >
    )
}

export default SidebarMenu;