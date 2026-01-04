import { useState } from 'react';
import styles from '../../../css_modules/auth/input.module.css';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';

const UpdateUser = () => {
    const [updateActive, setUpdateActive] = useState('');
    switch (updateActive) {
        case 'editProfile':
            return <EditProfile close={() => setUpdateActive('')}/>
        case 'changePassword':
            return <ChangePassword close={() => setUpdateActive('')}/>    
        default:
            return (
                <>
                    <div style={{ marginLeft: '50px', marginTop: '30px', marginBottom: '30px' }}>
                        <button className={styles.button} style={{marginRight: '20px'}} onClick={() => setUpdateActive('changePassword')}>Change password</button>
                        <button className={styles.button} onClick={() => setUpdateActive('editProfile')}>Edit user profile</button>
                    </div>
                </>
            )
    }
}

export default UpdateUser