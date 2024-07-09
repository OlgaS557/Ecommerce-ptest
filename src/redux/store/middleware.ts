import { Middleware, AnyAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './configureStore';
import {jwtDecode} from "jwt-decode";
import { refreshTokens, setLogout, setRefreshing, setAccessToken } from '../slices/userSlice';

// const tokenRefreshMiddleware: Middleware = (store) => (next) => async(action) => {
//     console.log('Middleware is called for action:', action);
    
//     if (action.meta && action.meta.arg && action.meta.arg.meta && action.meta.arg.meta.requireToken) {
//       console.log('Middleware is called for action with requireToken', action.meta.arg.meta.requireToken);
//       const appDispatch = store.dispatch as AppDispatch; 
//       const state = store.getState();
//       console.log('state', state);
      
//       const jwtToken = state.userReducer.jwtToken;
//       console.log('jwtToken-Middleware', jwtToken);
//       console.log('action.type', action.type);
//       console.log('action.payload', action.payload);
//       try {
//         if(jwtToken){
//             const decodedToken = jwtDecode(jwtToken) as {
//                 exp: number;
//               };
              
//               console.log('Decoded Token:', decodedToken);
              
//               const expirationTime = decodedToken.exp * 1000;
//               const currentTime = Date.now();
              
//               console.log('currentTime:', currentTime);
//               console.log('expirationTime:', expirationTime);
//               console.log('decodedToken:', decodedToken);

              
//               // Проверяем, действителен ли токен
//               if (currentTime < expirationTime) {
//                 // Токен действителен
//                 console.log('Token is valid.', jwtToken);
//                 await next(action);
//               } else {
//                 // Токен истек, нужно обновить токены или выполнить другие действия
//                 console.log('Token has expired. Handle accordingly.');
//                 console.log('Before refreshing tokens...');
//                 await appDispatch(refreshTokens());
//                 await next(action);
//                 const updatedToken = state.userReducer.jwtToken;
//                 console.log('After refreshing tokens...', updatedToken);
//                 action.meta.jwtToken = updatedToken;
//                 console.log('action.meta.jwtToken', action.meta.jwtToken);
//               }
//         } else {
//             console.log('No JWT token found.');          
//         }   
       
//       } catch (error) {
//         console.error('Error decoding token:', error);
//         throw error;
//         // Можно диспатчить экшен об ошибке декодирования токена
//       }
      
//     } else {
//       // Если action не требует валидный токен, продолжаем выполнение оригинального action
//       console.log('No action.meta or action.meta.requireToken found. Continuing with the original action.');
//       console.log('next action:', action);
 
//       return next(action);
//     }
//   };
  
//   export default tokenRefreshMiddleware;
//--------------------------------------------------
// const tokenRefreshMiddleware: Middleware = ({ dispatch, getState }) => (next) => async (action) => {
//     const appDispatch = dispatch as AppDispatch; // Явно указываем тип dispatch
//     const state = getState(); // Получаем текущее состояние
//     const jwtToken = state.userReducer.jwtToken; // Получаем аксесс токен из состояния
//     // console.log('jwtToken-Middleware', jwtToken);

//     // console.log('action.type', action.type);
//     // console.log('action.payload', action.payload);

//     // if (action.type.endsWith('/rejected')) {
//     //   const error = action.error;
//     //   // Проверяем, является ли ошибка 403
//     //   if (error.message === 'Rejected' && !state.userReducer.isRefreshing) {
//     //     // Устанавливаем флаг isRefreshing в true перед началом обновления токенов
//     //     appDispatch(setRefreshing(true));
//     //     try { 
//     //       console.log('Before refreshTokens()');
//     //       await appDispatch(refreshTokens());
//     //       const newJwtToken = state.userReducer.jwtToken;
//     //       console.log('After appDispatch(refreshTokens()):');
//     //       console.log('jwtToken after refreshTokens call:', newJwtToken);
//     //       // Если обновление токенов прошло успешно, повторяем оригинальное действие
//     //       // Сбрасываем флаг isRefreshing обратно в false
//     //       appDispatch(setRefreshing(false));
//     //       console.log('Action payload2:', action.payload);
//     //       console.log('next action', next(action));
//     //       return next(action);
//     //     } catch (error) {
//     //       console.error('Ошибка обновления токенов:', error);
//     //       // Выход из аккаунта или другая обработка ошибки
//     //       appDispatch(setLogout());
//     //       // Сбрасываем флаг isRefreshing обратно в false
//     //       appDispatch(setRefreshing(false));
//     //     }
//     //   }
//     // }  
    
//     //return next(action);
// };

// export default tokenRefreshMiddleware;

//=============================================

// export default tokenRefreshMiddleware;
 
//  const tokenRefreshMiddleware: Middleware = ({dispatch, getState}) => (next) => (action) => {
//     const appDispatch = dispatch as AppDispatch; // Явно указываем тип dispatch
//     const state = getState();
//     const jwtToken = state.userReducer.jwtToken;
//     const isRefreshing = state.userReducer.isRefreshing;
//     // Получаем токен из состояния
//     if (jwtToken && !isRefreshing) {
//         const decodedToken = jwtDecode(jwtToken) as {
//             exp: number;
//         };
//         console.log('Decoded Token:', decodedToken);
//         const expirationTime = decodedToken.exp * 1000;
//         const currentTime = Date.now();

//         console.log('Expiration Time:', expirationTime);
//         console.log('Current Time:', currentTime);
//         console.log('Time Difference:', expirationTime - currentTime);
//         if (expirationTime - currentTime < 60000) {
//             // Вызываем логику обновления токена здесь
//             appDispatch(setRefreshing(true));
//             console.log('Refreshing Token...');
//             appDispatch(refreshTokens())
//              .then(() => {
//                 appDispatch(setRefreshing(false));
//                 next(action); // После успешного обновления токена, продолжаем с оригинальным действием
//              })
//              .catch((error: any) => {
//                 console.error('Ошибка обновления токена:', error);
//                 appDispatch(setLogout())
//                 appDispatch(setRefreshing(false));
//              });
//         }else {
//             next(action); // Если токен в порядке, продолжаем с оригинальным действием
//         }
//     }else {
//         next(action); // Если токена нет, продолжаем с оригинальным действием
//     }
// };
// export default tokenRefreshMiddleware;
//-------------------------------------------------------------------------
// const tokenRefreshMiddleware: Middleware = ({ getState, dispatch }) => (next) => (action) => {
//     const appDispatch = dispatch as AppDispatch; // Явно указываем тип dispatch
//     const state = getState(); // Получаем текущее состояние
//     const jwtToken = state.userReducer.jwtToken; // Получаем аксесс токен из состояния

//     console.log('action.type', action.type);
//     console.log('action.payload', action.payload);

//     // Можете добавить другие типы действий для обработки
//     const actionTypesToCheck = [
//         'user/updateUser/rejected',
//         'user/changePassword/rejected', // Добавьте другие типы, если нужно
//     ];

//     if (actionTypesToCheck.includes(action.type)) {
//         if (action.payload && action.payload === 'Server error') {
//         // if (action.error) {
//             const currentTime = Math.floor(Date.now() / 1000);
//             console.log('currentTime', currentTime);
//             if (jwtToken) {
//                 const decodedToken = jwtDecode(jwtToken) as {
//                     exp: number;
//                 };
//                 console.log('decodedToken.exp', decodedToken.exp);

//                 if (decodedToken.exp && decodedToken.exp < currentTime) {
//                     appDispatch(refreshTokens())
//                     .then((resultAction) => {
//                         // Если refreshTokens выполнен успешно, передайте результат в следующий обработчик
//                         if (resultAction.type === 'user/refreshTokens/fulfilled') {
//                           next(action);
//                         }
//                     });
//                 }
//             }
//         }
//     }

//     return next(action);
// };

// Вариант2
// const tokenRefreshMiddleware: Middleware = ({ dispatch, getState }) => (next) => async (action) => {
//     const appDispatch = dispatch as AppDispatch; // Явно указываем тип dispatch
//     const state = getState(); // Получаем текущее состояние
//     const jwtToken = state.userReducer.jwtToken; // Получаем аксесс токен из состояния

//     console.log('action.type', action.type);
//     console.log('action.payload', action.payload);

//     if (action.type.endsWith('/rejected')) {
//       const error = action.error;
//       // Проверяем, является ли ошибка 403
//       if (error.status === 'Rejected') {
//         try {
//           await appDispatch(refreshTokens());
//           // Если обновление токенов прошло успешно, повторяем оригинальное действие
//           //return next(action);
          
//         } catch (error) {
//           console.error('Ошибка обновления токенов:', error);
//         }
//       }
      
//     } else {
//         return next(action); // Добавьте эту строку для остальных типов действий
//     }
    
//     return next(action);
// };

// export default tokenRefreshMiddleware;

// const tokenRefreshMiddleware: Middleware = ({ dispatch }) => (next) => (action) => {
//     const appDispatch = dispatch as AppDispatch; // Явно указываем тип dispatch
//     console.log('action.type', action.type);
//     console.log('action.payload === 403', action.payload);
//     if (action.type === 'user/updateUser/rejected' || action.type === 'user/refreshTokens/rejected' 
//     && action.payload === 'Server error') {
//       // Перехватываем ошибку 403 при обновлении токенов и вызываем refreshTokens()
//       appDispatch(refreshTokens());
//     }
    
//     return next(action);
//   };
  
//   export default tokenRefreshMiddleware;

// const tokenRefreshMiddleware: Middleware = ({ getState, dispatch }) => (next) => (action) => {
//     const appDispatch = dispatch as AppDispatch; // Явно указываем тип dispatch
//     console.log(action.type)
//     if (action.type.toString().includes('rejected')) {
//       // Перехватываем ошибку 403 при обновлении токенов и вызываем refreshTokens()
//       return refreshTokens(getState);
//     }
  
//     return next(action);
//   };
  
//   export default tokenRefreshMiddleware;


// const tokenRefreshMiddleware: Middleware = ({ getState, dispatch }) => (next) => (action) => {
//     if (action.type === 'user/login/fulfilled') {
//       // Получаем срок действия access token из ответа сервера
//       const { expirationTime } = action.payload;
  
//       const refreshTokenAction = async (dispatch: AppDispatch) => {
//         try {
//           await dispatch(refreshTokens());
//         } catch (error) {
//           // Обработка ошибок при обновлении токенов
//           console.error('Ошибка при обновлении токенов', error);
//         }
//       };
//        // Запускаем таймер для автоматического обновления токенов
//       const tokenRefreshTimer = setTimeout(() => refreshTokenAction(dispatch), expirationTime);
//       // Сохраняем таймер в состоянии, чтобы можно было отменить его при выходе пользователя
//       localStorage.setItem('tokenRefreshTimer', tokenRefreshTimer.toString());
//     } else if (action.type === 'user/setLogout') {
//       // Пользователь вышел из системы, отменяем таймер
//       const tokenRefreshTimer = localStorage.getItem('tokenRefreshTimer');
  
//       if (tokenRefreshTimer) {
//         clearTimeout(Number(tokenRefreshTimer));
//         localStorage.removeItem('tokenRefreshTimer');
//       }
//     }
  
//     return next(action);
//   };
  
//   export default tokenRefreshMiddleware;

