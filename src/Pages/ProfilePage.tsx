import { Link } from 'react-router-dom';
import Profile from '../components/accounting/profile/Profile';
import UpdateUser from '../components/accounting/profile/UpdateUser';
import styles from '../css_modules/auth/profilePage.module.css';

const ProfilePage = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.path}>
                <Link to='/'>
                    <button className={styles.to_home}>Main</button>
                </Link>
                <div className={styles.path_line}>/</div>
                <div className={styles.path_to}>Profile</div>
                {/* <NavLink to={`${categoryItems}`} className={styles.path_products_name}>{categoryItems}</NavLink> */}
            </div>
            <div className={styles.profile}>
                <Profile />
            </div>
            
            <div className={styles.update_user}>
                <UpdateUser />
            </div>
        </div>
    )
}

export default ProfilePage;

// "homepage": "https://olgas557.github.io/Ecommerce-ptest",