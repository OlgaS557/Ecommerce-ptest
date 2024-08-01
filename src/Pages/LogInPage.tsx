import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css_modules/auth/guestPage.module.css';
import Login from '../components/accounting/guest/Login';


const LogInPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.header}>
                    <p className={styles.title}>Sign in</p>
                    <p className={styles.question1}>Don't have an account?</p>
                    <Link to='/signup' className={styles.signin}>Sign up</Link>
                </div>
                <Login />
                <p className={styles.text}>Lost your password?</p>
            </div>
        </div>
    )
}

export default LogInPage;