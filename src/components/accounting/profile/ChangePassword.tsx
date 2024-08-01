import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { changePassword } from '../../../redux/slices/userSlice';
import styles from '../../../css_modules/auth/input.module.css';

interface Props {
    close: () => void;
}

const ChangePassword: React.FC<Props> = ({close}) => {
    const dispatch = useAppDispatch();
    const {isError, error, status} = useAppSelector(state => state.userReducer);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('')
    const [newPassword2, setNewPassword2] = useState('');

    const handleClickSave = () => {
        const userPasswords = {
            currentPassword,
            newPassword
        }
        
        if (newPassword === newPassword2) {
            dispatch(changePassword(userPasswords))

                .then(() => {
                    if (!isError && status === 'OK') {
                        close();
                    } else {
                        console.log('Login error: ', error);
                    }
                })
                .catch(error => {
                    console.error('Unhandled error: ', error);
                });

        }
    }

    const handleClickReset = () => {
        setCurrentPassword('');
        setNewPassword('');
        setNewPassword2('');
    }

  return (
    <div className={styles.box}>
        <label className={styles.data}> Current password:
            <input className={styles.field}
            onChange={(e) => setCurrentPassword(e.target.value.trim())}
            value={currentPassword}
            placeholder='Current password'
            //type='password'
            /> 
        </label>
        <label className={styles.data}> New password:
            <input className={styles.field}
            onChange={(e) => setNewPassword(e.target.value.trim())}
            value={newPassword}
            placeholder='New password'
            //type='password'
            /> 
        </label>
        <label className={styles.data}> Confirm password:
            <input className={styles.field}
            onChange={(e) => setNewPassword2(e.target.value.trim())}
            value={newPassword2}
            placeholder='Confirm password'
            //type='password'
            /> 
        </label>
        <div>
            <button className={styles.button} onClick={handleClickSave}>Save</button>
            <button className={styles.button} onClick={handleClickReset}>Reset</button>
            <button className={styles.button} onClick={close}>Close</button>
        </div>
    </div>
  )
}

export default ChangePassword