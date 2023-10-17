import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hook/redux';
import { refreshTokens } from '../../redux/slices/userSlice';

const RefreshToken = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.userReducer);
  const [refreshed, setRefreshed] = useState(false); // Локальный флаг для отслеживания обновления токенов

  // useEffect(() => {
  //   if (user.status === 'rejected' && user.error === '403' && !refreshed) {
  //     const { userId, email } = user;
  //     // dispatch(refreshTokens({ userId, email }))
  //     //   .then((resultAction) => {
  //     //     if (refreshTokens.fulfilled.match(resultAction)) {
  //     //       console.log('RefreshToken component: Token refreshed successfully');
  //     //     } else if (refreshTokens.rejected.match(resultAction)) {
  //     //       console.error('RefreshToken component: Token refresh failed', resultAction.error);
  //     //       // Здесь вы можете добавить код для обработки ошибки, например, перенаправление на страницу входа или вывод сообщения об ошибке пользователю.
  //     //     }
  //     //   })
  //     //   .finally(() => {
  //     //     setRefreshed(true); // Установите флаг refreshed в true после обновления токенов
  //     //   });
  //   }
  // }, [dispatch, user, refreshed]);

  return null;
}

export default RefreshToken;

//   useEffect(() => {
//     if(user.status === 'rejected' && user.error ==='403') {
//       const { userId, email } = user; 
//       dispatch(refreshTokens({ userId, email }))
//         .then((resultAction) => {
//           if (refreshTokens.fulfilled.match(resultAction)) {
//             console.log('RefreshToken component: Token refreshed successfully');
//           } else if (refreshTokens.rejected.match(resultAction)) {
//             console.error('RefreshToken component: Token refresh failed', resultAction.error);
//             // Здесь вы можете добавить код для обработки ошибки, например, перенаправление на страницу входа или вывод сообщения об ошибке пользователю.
//           }
//         });
//     }
//   }, [dispatch, user]);

//   return null;
// }

// export default RefreshToken