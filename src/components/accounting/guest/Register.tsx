import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../redux/slices/userSlice';
import {UserRegister} from '../../../types/index';
import styles from '../../../css_modules/auth/input.module.css';


const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isError, error} = useAppSelector(state => state.userReducer);
    const user = useAppSelector(state => state.userReducer);

const { 
    register,
    watch,
    formState: { errors, isValid },
     handleSubmit,
    reset
} = useForm({
    defaultValues: {
        firstName: '',
        lastName: '',
        email: "",
        password: "",
        confirmPassword: ''
    }, 
   mode: 'onBlur'
})

    const handleClickRegister = async(userData: UserRegister) => {
       
        console.log('Before dispatching registerUser', userData);
        try {
            await dispatch(registerUser(userData)).unwrap();
            navigate('/profile');
        } catch (error) {
                // Обработка ошибок
                console.error('Registration error:', error);
        }
        //-------------------------
        // await dispatch(registerUser(userData))
        // .unwrap()
        // .then((resultAction) => {
        //     // Проверяем, нет ли ошибок в регистрации
        //     console.log('Проверка перед переходом в случае успеха',isError);
        //     if (registerUser.fulfilled.match(resultAction)) {
        //         navigate('/profile'); 
        //     } else {
        //         console.error('Registration error:', error);
        //         alert('Failed to register');
        //     }
        // })
        // .catch((error) => {
        //     console.error('Unhandled error:', error);
        // });
        // reset();
    }
   
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit(handleClickRegister)}>
                <label className={styles.data}>FirstName:
                    <input className={styles.field} {...register("firstName",
                        {
                            required: 'First name is required',
                            minLength: {
                                value: 3,
                                message: 'must have minimum 3 alphabet characters'
                            },
                            maxLength: {
                                value: 16,
                                message: 'must have maximum 16 alphabet characters'
                            },
                            pattern: /^[A-Za-z]+$/i
                        })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        placeholder='firstName' required
                    />
                </label>
                <div className={styles.error}>
                    {errors?.firstName && <p role="alert">{errors?.firstName?.message || 'Error!'}</p>}
                </div>
                <label className={styles.data}>LastName:
                    <input className={styles.field} {...register("lastName", 
                        {
                            required: 'Last name is required',
                            minLength: {
                                value: 3,
                                message: 'must have minimum 3 alphabet characters'
                            },
                            maxLength: {
                                value: 16,
                                message: 'must have maximum 16 alphabet characters'
                            },
                            pattern: /^[A-Za-z]+$/i
                        })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                        placeholder='lastName' required
                    />
                </label>
                <div className={styles.error}>
                    {errors?.lastName && <p role="alert">{errors?.lastName?.message || 'Error!'}</p>}
                </div>
                <label className={styles.data}>Email:
                    <input className={styles.field} {...register("email", 
                        {
                            required: 'Email is required',
                            pattern: {
                               value: /\S+@\S+\.\S+/,
                               message: 'email is not valid'
                            }
                        })} 
                        aria-invalid={errors.email ? "true" : "false"} 
                        placeholder='email' required
                    />
                </label>
                <div className={styles.error} >
                    {errors?.email && <p role="alert">{errors?.email?.message || 'Error!'}</p>}
                </div>
                <label className={styles.data}>Password:
                    <input className={styles.field} {...register("password", 
                        {
                            required: 'Password is required',
                            pattern: {
                               value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
                               message: 'must have minimum length of at least 4 characters: at least one upper case letter, one lower case letter,one number, and one special character'
                            }
                        })} 
                        aria-invalid={errors.password ? "true" : "false"}
                        placeholder='password' required
                    />
                </label>
                <div className={styles.error} >
                    {errors?.password && <p role="alert">{errors?.password?.message || 'Error!'}</p>}
                </div>
                <label className={styles.data}>Confirm password:
                    <input className={styles.field} {...register("confirmPassword", 
                    { 
                        required: "confirm the password",
                        validate: {
                            matchesPassword: (value) => value === watch('password') || 'Passwords do not match'
                        }  
                    })} 
                        aria-invalid={errors.confirmPassword ? "true" : "false"}
                        placeholder='Confirm password' required
                    />
                </label>
                <div className={styles.error} >
                    {errors?.confirmPassword && <p role="alert">{errors?.confirmPassword?.message || 'Error!'}</p>}
                </div>
                <button className={styles.button} type='submit' disabled={!isValid}>Sign up</button>
                
                {/* {user.status === 'pending' && <h2>Loading...</h2>} */}
                {user.error && <h2>An error occerd: {error}</h2>}
            </form>
        </div>
  )
}

export default Register;

// import React, {useState} from 'react';
// import { useAppDispatch, useAppSelector } from '../../../hook/redux';
// import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../../../redux/slices/userSlice';
// import styles from '../../../css_modules/auth/input.module.css';

// const Register = () => {
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();
//     const {isError, error} = useAppSelector(state => state.userReducer);
//     const user = useAppSelector(state => state.userReducer);

//     const [login, setLogin] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('')
//     const [password, setPassword] = useState('');
//     // const [password2, setPassword2] = useState('');
// console.log('setLogin','setFirstName', 'setLastName', 'setPassword',setLogin, setFirstName, setLastName, setPassword);

//     const handleClickRegister = (e: any) => {
//        e.preventDefault();
//         const userData = {
//             firstName,
//             lastName,
//             email: login,
//             password     
//         };
//         console.log('Before dispatching registerUser', userData);
//         dispatch(registerUser(userData))

//         .unwrap()
//         .then(() => {
//             // Проверяем, нет ли ошибок в регистрации
//             console.log('Проверка перед переходом в случае успеха',isError);
//             if (!isError) {
//                 navigate('/profile'); 
//             } else {
//                 console.error('Registration error:', error);
//                 alert('Failed to register');
//             }
//         })
//         .catch((error) => {
//             console.error('Unhandled error:', error);
//         });
        
//     }
   
//     return (
//         <div className={styles.container}>
//             <div className={styles.form}>
//                 <label className={styles.data}>FirstName:
//                     <input className={styles.field}
//                         onChange={e => setFirstName(e.target.value.trim())}
//                         value={firstName}
//                         type='text' placeholder='firstName' required
//                     />
//                 </label>
//                 <label className={styles.data}>LastName:
//                     <input className={styles.field}
//                         onChange={e => setLastName(e.target.value.trim())}
//                         value={lastName}
//                         type='text' placeholder='lastName' required
//                     />
//                 </label>
//                 <label className={styles.data}>Email:
//                     <input className={styles.field}
//                         onChange={e => setLogin(e.target.value.trim())}
//                         value={login}
//                         type='email' placeholder='email' required
//                     />
//                 </label>
//                 <label className={styles.data}>Password:
//                     <input className={styles.field}
//                         onChange={e => setPassword(e.target.value.trim())}
//                         value={password}
//                         type='password' placeholder='password' required
//                     />
//                 </label>
//                 <label className={styles.data}>Confirm password:
//                     <input className={styles.field}
//                         onChange={e => setPassword(e.target.value.trim())}
//                         value={password}
//                         type='password' placeholder='Confirm password' required
//                     />
//                 </label>
//                 <button className={styles.button} onClick={handleClickRegister}>Sign up</button>
                
//                 {user.status === 'pending' && <h2>Loading...</h2>}
//                 {user.error && <h2>An error occerd: {error}</h2>}
//             </div>
//         </div>
//   )
// }

// export default Register;


