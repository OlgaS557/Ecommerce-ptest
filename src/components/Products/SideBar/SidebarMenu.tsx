import Category from './Category';
import Price from './Price';
import Size from './Size';
import Collection from './Collection';
import Brand from './Brand';
import Style from './Style';
import Season from './Season';
import { List } from '@mui/material';
import styles from '../../../css_modules/sidebar.module.css'

const SidebarMenu = () => {

    return (
        <List>
            <Category />
            <Price />
            <Size />
            <Collection />
            <Brand />
            <Style />
            <Season />
        </List>
    )
}

export default SidebarMenu;

// import React, { useState } from 'react';
// import { Box, IconButton, Drawer, List, useMediaQuery, useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Category from './Category';
// import Price from './Price';
// import Size from './Size';
// import Collection from './Collection';
// import Brand from './Brand';
// import Style from './Style';
// import Season from './Season';
// import styles from "../../../css_modules/sidebar.module.css";

// const SidebarMenu = () => {
//   const [menuActive, setMenuActive] = useState<boolean>(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleMenuToggle = () => {
//     setMenuActive(!menuActive);
//   };

//   return (
//     <div className={styles.blockSidebar}>
//       {isMobile ? (
//         <>
//           <Box
//             sx={{
//               display: { xs: 'flex', md: 'none' },
//               position: 'fixed',
//               top: 10,
//               left: 10,
//               zIndex: 2000,
//             }}
//             className={styles.burgerMenu}
//           >
//             <IconButton
//               size='large'
//               edge='start'
//               color='inherit'
//               onClick={handleMenuToggle}
//             >
//               <MenuIcon sx={{ width: 40, height: 40 }} />
//             </IconButton>
//           </Box>
//           <Drawer
//             anchor='left'
//             open={menuActive}
//             onClose={handleMenuToggle}
//             sx={{ '& .MuiDrawer-paper': { width: 300 } }}
//           >
//             <List>
//               <Category />
//               <Price />
//               <Size />
//               <Collection />
//               <Brand />
//               <Style />
//               <Season />
//             </List>
//           </Drawer>
//         </>
//       ) : (
//         <Box
//           sx={{
//             maxWidth: 300,
//             backgroundColor: 'white',
//             position: 'fixed',
//             left: 0,
//             top: 0,
//             height: '100%',
//             boxShadow: 1,
//             zIndex: 1000
//           }}
//           className={styles.sidebar}
//         >
//           <List>
//             <Category />
//             <Price />
//             <Size />
//             <Collection />
//             <Brand />
//             <Style />
//             <Season />
//           </List>
//         </Box>
//       )}
//     </div>
//   );
// };

// export default SidebarMenu;


// } ${menuActive ? styles.sideBarActive : ''}`}

{/* <div className={styles.blockSidebar}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}
                
            >
                <Category />
                <Price />
                <Size />
                <Collection />
                <Brand />
                <Style />
                <Season />
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}
                className={styles.burgerMenu}
            >
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    onClick={handleMenuToggle}
                >
                    <MenuIcon sx={{ width: 40, height: 40 }} />
                </IconButton>
            </Box>
            <List className={`${menuActive ? styles.widget_wrapper__active : styles.widget_wrapper}`}>
                <Category />
                <Price />
                <Size />
                <Collection />
                <Brand />
                <Style />
                <Season />
            </List >
        </div> */}