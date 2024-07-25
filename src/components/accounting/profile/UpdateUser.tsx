import React, { useState } from 'react';
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
                        <button style={{marginRight: '20px'}} onClick={() => setUpdateActive('changePassword')}>Change password</button>
                        <button onClick={() => setUpdateActive('editProfile')}>Edit user profile</button>
                    </div>
                </>
            )
    }
}

export default UpdateUser