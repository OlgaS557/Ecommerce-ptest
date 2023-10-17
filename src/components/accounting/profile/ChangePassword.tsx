import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { changePassword } from '../../../redux/slices/userSlice';

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
    <div>
        <label> Current password:
            <input
            onChange={(e) => setCurrentPassword(e.target.value.trim())}
            value={currentPassword}
            type='password'
            /> 
        </label>
        <label> New password:
            <input
            onChange={(e) => setNewPassword(e.target.value.trim())}
            value={newPassword}
            type='password'
            /> 
        </label>
        <label> Confirm password:
            <input
            onChange={(e) => setNewPassword2(e.target.value.trim())}
            value={newPassword2}
            type='password'
            /> 
        </label>
        <button onClick={handleClickSave}>Save</button>
        <button onClick={handleClickReset}>Reset</button>
        <button onClick={close}>Close</button>
    </div>
  )
}

export default ChangePassword