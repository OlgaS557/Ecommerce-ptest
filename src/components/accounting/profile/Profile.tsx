import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { setLogout } from '../../../redux/slices/userSlice';
import { Link } from 'react-router-dom';
import styles from '../../../css_modules/auth/profile.module.css';

const Profile = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userReducer);
    console.log('User state in Profile component:', user);

    const hadleClickLogout = () => {
      dispatch(setLogout());
  }

  return (
    <div className={styles.profile_box}>
      <div className={styles.user_name}>
        <h3>Welcome, {user.firstName} {user.lastName}</h3>
      </div>
      <Link to='/' >
        <button className={styles.logout} onClick={hadleClickLogout}>Logout</button>
      </Link>
      <h3>Email:</h3>
      <p>{user.email} </p>
      <h3>Phone:</h3>
      <p>{user?.phone}</p>
      <h3>Address:</h3>
      <p>{user.address?.fullAddress}</p>
      <ul>
        {user.roles.map((r) => <li key={r}>{r}</li>)}
      </ul>
    </div>
  )
}

export default Profile;