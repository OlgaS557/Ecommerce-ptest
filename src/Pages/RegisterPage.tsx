import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../components/accounting/guest/Register';
import styles from '../css_modules/auth/guestPage.module.css';

const RegisterPage = () => {

  return (
      <div className={styles.container}>
          <div className={styles.block}>
              <div className={styles.header}>
                  <p className={styles.title}>Sign up</p>
                  <p className={styles.question1}>Already have an account?</p>
                  <Link to='/login' className={styles.signin}>Sign in</Link>
              </div>
              <Register />
              <div className={styles.text}>
                <p>By signing in to your account you agree with our </p>
                <p>Privacy Policy and Terms of Use.</p>
              </div>
          </div>
      </div>
  )
}

export default RegisterPage;