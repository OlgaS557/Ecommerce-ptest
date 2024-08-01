import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { loginUser, setLogout,refreshTokens } from '../../../redux/slices/userSlice';
import { useNavigate, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context';
import styles from '../../../css_modules/auth/input.module.css';


interface Login {
    email: string,
    password: string
}

const Login = () => {
  //  const {isAuth, setIsAuth} = useContext(AuthContext);
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userReducer);
    const {isError, error, status} = useAppSelector(state => state.userReducer);
    const navigate = useNavigate();

    const { register,
        formState: { errors, isValid },
         handleSubmit,
        reset} = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: 'onBlur'
    })

    const handleClickLogin = (userData: Login) => {
        dispatch(loginUser(userData))
        
        .then((resultAction) => {
            // if (resultAction.type === loginUser.fulfilled.type) {
            if (loginUser.fulfilled.match(resultAction)) {
              //setIsAuth(true);
              navigate('/');
            } else {
              console.error('Login error:', error);
            }
        })
        .catch(error => {
            console.error('Error in login process: ', error);
        }); 
    }      

  return (
       <div>
        <form className={styles.form} onSubmit={handleSubmit(handleClickLogin)}>
            <label className={styles.data}>Email:
                <input className={styles.field} {...register("email", 
                { required: "Email address is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'email is not valid'
                 }
                })} 
                 aria-invalid={errors.email ? "true" : "false"} placeholder='email'
                />
            </label>
              <div>
                  {errors.email && <p className={styles.error} role="alert">{errors.email.message}</p>}
              </div>
            <label className={styles.data}>Password:
                <input className={styles.field} {...register("password", { required: 'Password is required',  })} 
                aria-invalid={errors.password ? "true" : "false"} placeholder='password' 
                />
            </label>
            <div>
              {errors.password && <p className={styles.error} role="alert">{errors.password.message}</p>}
            </div>
            {/* <NavLink 
              to={user.status === 'fulfilled' ? '/' : ''}
            >  */}
              <button className={styles.button} type='submit' disabled={!isValid}>Login</button>
            {/* </NavLink> */}
           
           
            {/* {user.status === 'pending' && <h2>Loading...</h2>} */}
            {user.error && <h2>Login error. Try again</h2>} 
        </form>
   </div>
  )        
}

export default Login;

// import React, { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../../../hook/redux';
// import { loginUser } from '../../../redux/slices/userSlice';
// import { NavLink, useNavigate } from 'react-router-dom';


// const Login = () => {
//     const dispatch = useAppDispatch();
//     const user = useAppSelector(state => state.userReducer);
//     const {isError, error, status} = useAppSelector(state => state.userReducer);
//     const navigate = useNavigate();

//     const [login, setLogin] = useState('');
//     const [password, setPassword] = useState('');

//     const handleClickLogin = () => {
//         const userData = {
//             email: login,
//             password: password
//         }
        
//         dispatch(loginUser(userData))
        
//         .then(() => {
//             if (!isError && status === 'fulfilled') {
//               navigate('/');
//             } else {
//               console.log('Login error: ', error);
//             }
//           })
//           .catch(error => {
//             console.error('Unhandled error: ', error);
//           });
//     }

//   return (
//     <div className={styles.container}>
//         <div className={styles.form}>
//             <label className={styles.data}>Email:
//                 <input className={styles.field}
//                     onChange={e => setLogin(e.target.value.trim())}
//                     value={login}
//                     type='text' placeholder='email'
//                 />
//             </label>
//             <label className={styles.data}>Password:
//                 <input className={styles.field}
//                     onChange={e => setPassword(e.target.value.trim())}
//                     value={password}
//                     type='password' placeholder='password'
//                 />
//             </label>
//             {/* <NavLink
//               to={user.status === 'fulfilled' ? '/' : ''}
//             > */}
//               <button className={styles.button} onClick={handleClickLogin}>Login</button>
//             {/* </NavLink> */}
//             {user.status === 'pending' && <h2>Loading...</h2>}
//             {user.error && <h2>Login error. Try again</h2>}
//         </div>
//     </div>
//   )
// }

// export default Login

 // .then((resultAction) => {
        //     if (resultAction.payload) {
        //       // Здесь выполняется код при успешном выполнении action creator
        //       navigate('/');
        //     } else {
        //       // Здесь выполняется код при неуспешном выполнении action creator
        //       // Обработка ошибок и вывод сообщений об ошибке
        //     }
        //   })
        //   .catch((error) => {
        //     // Обработка ошибок и вывод сообщений об ошибке
        //     console.error('Error in login process: ', error);
        //   });

        // .unwrap()
        // .then((resultAction) => {
        //     console.log('Inside .then block'); 
        //     if (!isError && status === 'fulfilled') {
        //       console.log('Navigating to /'); 
        //       navigate('/');
        //     } else {
        //       console.error('Login error:', error);
        //     }
        //   })
        //   .catch(error => {
        //     console.error('Error in login process: ', error);
        //   });
        
      