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
        <p>Welcome, {user.firstName} {user.lastName}</p>
      </div>
      <Link to='/' className={styles.logout}>
        <button onClick={hadleClickLogout}>Logout</button>
      </Link>
      <p>Email</p>
      <p>{user.email} </p>
      <p>Phone</p>
      <p>{user?.phone}</p>
      <p>Address</p>
      <p>{user.address?.fullAddress}</p>
      <ul>
        {user.roles.map((r) => <li key={r}>{r}</li>)}
      </ul>
    </div>
  )
}

export default Profile;