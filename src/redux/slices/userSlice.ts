import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import { UserAddress, UserPhone } from '../../types/index';
import { RootState } from "../store/configureStore";
import { base_url } from "../../Utils/Data";
import { handleTokenRefresh } from '../../Utils/refreshTokens';
import { ThunkDispatch } from 'redux-thunk';

type UserState = {
  firstName: string,
  lastName: string,
  email: string,
  jwtToken?: string,
  roles: Array<string>,
  address: UserAddress,
  numberPhone: UserPhone,
  phone: string,
  userId: string,
  status: string,
  isError: boolean,
  isLoading: boolean,
  error: any,
  isRefreshing: boolean,
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  jwtToken: '',
  roles: [],
  address: {
    country: '',
    city: '',
    zipCode: 0,
    street: '',
    house: '',
    fullAddress: ''
  },
  numberPhone: {
    countryCode: 0,
    phoneNumber: '',
  },
  phone: '',
  userId: '',
  status: '',
  isError: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
}

export const registerUser = createAsyncThunk<
  // Тип успешного ответа от сервера
  UserState,
  // Тип входных данных (userData)
  { firstName: string, lastName: string, email: string },
  // Тип возможной ошибки
  { rejectValue: string }
>(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_url}/profile/signup`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      localStorage.setItem('refreshToken', data.jwtRefreshToken);
      return data;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk<UserState,
  { email: string, password: string }, { rejectValue: string }
>(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_url}/profile/signin`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      localStorage.setItem('refreshToken', data.jwtRefreshToken);
      console.log('refreshToken', data.jwtRefreshToken);

      return data;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk<UserState,
  {
    jwtToken?: string,
    firstName: string,
    lastName: string,
    numberPhone: UserPhone,
    address: UserAddress,
    meta?: {
      requireToken?: boolean,
  }
  }, { rejectValue: string }
>(
  'user/updateUser',
  async (userProfile, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState() as RootState; // Приводим состояние к типу RootState
      const jwtToken = state.userReducer.jwtToken;
      const userId = state.userReducer.userId;

      const response = await fetch(`${base_url}/profile/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(userProfile),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        }
      });
      console.log('response: ', response);

      if (!response.ok) {
        if (response.status === 403) {
          await handleTokenRefresh(
            dispatch as ThunkDispatch<RootState, void, any>,
            getState as () => RootState,
            async (): Promise<void> => {
              const updatedState = getState() as RootState;
              const updatedJwtToken = updatedState.userReducer.jwtToken;
              await dispatch(updateUser({ ...userProfile, jwtToken: updatedJwtToken }));
              console.log('userProfile after 403', userProfile);
            }
          );
          return;
        }
        throw new Error('Server error');
      }
      //await dispatch(refreshTokens());
      const data = await response.json();
      console.log('data', data);

      return data;

    } catch (error: any) {
      console.error('Error in createAsyncThunk:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk<
  UserState,
  {
    jwtToken?: string,
    currentPassword: string,
    newPassword: string,
  }, { rejectValue: string }
>(
  'user/changePassword',
  async (userPasswords, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState() as RootState; // Приводим состояние к типу RootState
      const jwtToken = state.userReducer.jwtToken;
      const userId = state.userReducer.userId;
      const response = await fetch(`${base_url}/profile/${userId}/password`, {
        method: 'PUT',
        body: JSON.stringify(userPasswords),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        }
      });
      if (!response.ok) {
        if (response.status === 403) {
          await handleTokenRefresh(
            dispatch as ThunkDispatch<RootState, void, any>,
            getState as () => RootState,
            async (): Promise<void> => {
              const updatedState = getState() as RootState;
              const updatedJwtToken = updatedState.userReducer.jwtToken;
              await dispatch(changePassword({ ...userPasswords, jwtToken: updatedJwtToken }));
              console.log('userPasswords after 403', userPasswords);
            }
          );
          return;
        }
        throw new Error('Server error');
      }
      console.log(response.status);
      console.log(response.statusText);

      const data = await response.json();

      return data;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshTokens = createAsyncThunk<
  UserState,
  // { userId: string, email: string },
  void,
  { rejectValue: string }
>(
  'user/refreshTokens',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState() as RootState; // Приводим состояние к типу RootState

      const userId = state.userReducer.userId;
      
      const jwtRefreshToken = localStorage.getItem('refreshToken');

      const response = await fetch(`${base_url}/profile/${userId}/refresh`, {
        method: 'POST',
        // body: JSON.stringify({ userId, email }),
        headers: {
          'Content-Type': 'application/json',
          'X-Refresh-Token': `${jwtRefreshToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const newAccessToken = response.headers.get('Authorization');
      const newRefreshToken = response.headers.get('X-Refresh-Token');

      if (newAccessToken && newRefreshToken) {
        let updatedAccessToken = newAccessToken;
        let updatedRefreshToken = newRefreshToken;
    
        if (newAccessToken.startsWith('Bearer ')) {
          updatedAccessToken = newAccessToken.substring(7);
        }
    
        if (newRefreshToken.startsWith('Bearer ')) {
          updatedRefreshToken = newRefreshToken.substring(7);
        }
    
        console.log('Новый Access Token (после обработки):', updatedAccessToken);
        console.log('Новый Refresh Token (после обработки):', updatedRefreshToken);
        
        localStorage.setItem('accessToken', updatedAccessToken);
        localStorage.setItem('refreshToken', updatedRefreshToken);
        dispatch(setAccessToken(updatedAccessToken));
        console.log('Новый Access Token в State:', updatedAccessToken);
        console.log('Обновленные значения в localStorage:');
        console.log('Новый Access Token в localStorage:', updatedAccessToken);
        console.log('Новый Refresh Token (в localStorage):', localStorage.getItem('refreshToken'));
      }
      
      const data = await response.json();
      return data;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction) {
      return action.payload;
    },
    setLogout(state = initialState) {
      // state.jwtToken = '';
      // state.firstName = '';
      // state.lastName = '';
      // state.email = '';
      localStorage.removeItem('refreshToken');
      return initialState;
    }, 
    setRefreshing(state, action) {
      state.isRefreshing = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.jwtToken = action.payload;
      console.log('jwtToken в setAccessToken: ', state.jwtToken);
    },

  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.status = 'pending';
    });
    // Обработка успешного ответа от регистрации
    builder.addCase(registerUser.fulfilled, (state, action) => {
      // const {jwtToken} = action.payload;
      const updatedUserData = action.payload;

      //Обновите состояние (state) в соответствии с данными из action.payload
      // if (jwtToken) {
      //   const decodedTokenData = jwtDecode(jwtToken) as {
      //     firstName: string;
      //     lastName: string;
      //     email: string;
      //   };
      // Обновляем состояние (state) с помощью полученных данных
      console.log('Updated state:', state);
      // return {
      //   ...state,
      //   firstName: decodedTokenData.firstName,
      //   lastName: decodedTokenData.lastName,
      //   email: decodedTokenData.email,
      //   jwtToken,
      //   status: 'fulfilled',
      //     isLoading: false,
      // }

      return {
        ...state,
        ...updatedUserData,
        status: 'fulfilled',
        isLoading: false,
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
      state.isError = true;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      return {
        ...state,
        isLoading: true,
        status: 'pending',
      }
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { firstName, lastName, userId, numberPhone, phone, address, jwtToken } = action.payload;

      if (jwtToken) {
        const decodedTokenData = jwtDecode(jwtToken) as {
          email: string;
        };
       
        return {
          ...state,
          firstName,
          lastName,
          email: decodedTokenData.email,
          jwtToken,
          userId,
          numberPhone,
          phone,
          address,
          status: 'fulfilled',
          isError: false,
          isLoading: false,
        }
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isError = true;
      state.status = 'rejected';
      console.log('state.error', state.error);
      state.error = action.payload;
      console.log('state.isError', state.isError);
      state.isLoading = false;

    });
    builder.addCase(updateUser.pending, (state) => {
      return {
        ...state,
        isLoading: true,
        status: 'pending',
      }
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      console.log('Reducer is called for updateUser.fulfilled');
      if(action.payload){
        const { firstName, lastName, address, phone } = action.payload;
        console.log('updateUser.fulfilled payload:', action.payload);

        return {
          ...state,
          firstName,
          lastName,
          address,
          phone,
          // roles,
          status: 'fulfilled',
          isError: false,
          isLoading: false,
        }
      }
      
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      // if(action.payload === 'Server error' && (action.error as MyError)?.status === 403) {
      //   const dispatch:AppThunk = store.dispatch;
      //   dispatch(refreshTokens());
      // }
      state.error = action.payload;
      state.isError = true;
      state.status = 'rejected';
      state.isLoading = false;
      console.log('state.error', state.error);
      console.log('state.isError', state.isError);
    });
    builder.addCase(changePassword.pending, (state) => {
      return {
        ...state,
        isLoading: true,
        status: 'pending',
      }
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      const updatedUserData = action.payload;
      console.log('Updated state:', state);

      return {
        ...state,
        ...updatedUserData,
        status: 'OK',
        isError: false,
        isLoading: false,
      }

    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.isError = true;
      state.status = 'rejected';
      console.log('state.error', state.error);
      state.error = action.payload;
      console.log('state.isError', state.isError);
      state.isLoading = false;
    });
    builder.addCase(refreshTokens.pending, (state) => {
      return {
        ...state,
        isLoading: true,
        status: 'pending',
      }
    });
    builder.addCase(refreshTokens.fulfilled, (state, action) => {
      //Обновляем состояние Redux с использованием данных из localStorage
      const accessTokenFromLocalStorage = localStorage.getItem('accessToken');
      localStorage.removeItem('accessToken');
      if ( accessTokenFromLocalStorage !== null) {
        state.jwtToken = accessTokenFromLocalStorage;
      }
      
      console.log('jwtToken after update:', state.jwtToken);
      state.status = 'OK';
      state.isRefreshing = false;
      state.isError = false;
      state.error = null;
      state.isLoading = false;
      
    });
    builder.addCase(refreshTokens.rejected, (state, action) => {
      state.isError = true;
      state.status = 'rejected';
      state.error = action.payload;
      state.isLoading = false;
      console.log('state.error', state.error);
      console.log('state.isError', state.isError);
      console.error('Ошибка обновления токенов:', action.error);
    });

    
  }
});

export const { setLogout, setRefreshing, setAccessToken } = userSlice.actions;

export default userSlice.reducer;

//-------------------------------------------------------
//Вариант updateUser с логикой обновления токенов при ошибке 403 и повторного вызова экшена:
// export const updateUser = createAsyncThunk<UserState,
//   {
//     jwtToken?: string,
//     firstName: string,
//     lastName: string,
//     numberPhone: UserPhone,
//     address: UserAddress,
//   }, { rejectValue: string }
// >(
//   'user/updateUser',
//   async (userProfile, { rejectWithValue, getState, dispatch }) => {
//     try {
//       const state = getState() as RootState; // Приводим состояние к типу RootState
//       const jwtToken = state.userReducer.jwtToken;
//       const userId = state.userReducer.userId;

//       const response = await fetch(`${base_url}/profile/${userId}`, {
//         method: 'PUT',
//         body: JSON.stringify(userProfile),
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${jwtToken}`
//         }
//       });
//       console.log('response: ', response);

//       if (!response.ok) {
//         if (response.status === 403) {
//           try {
//             await dispatch(refreshTokens());
//       //     // Дождитесь окончания обновления токенов
//       //     await new Promise(resolve => setTimeout(resolve, 1000));
//             const updatedState = getState() as RootState;
//             const updatedJwtToken = updatedState.userReducer.jwtToken;
//             await dispatch(updateUser({ ...userProfile, jwtToken: updatedJwtToken }));
//           } catch (refreshError) {
//             console.error('Ошибка обновления токенов:', refreshError);
//             // Здесь можно принять решение, как обрабатывать ошибку обновления токенов
//             throw new Error('Ошибка обновления токенов');
//           }
//           return;
//         }
//         throw new Error('Server error');
//       }

//       const data = await response.json();
//       console.log('data', data);

//       return data;

//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
//------------------------------------------------------
// const shouldRefreshToken = () => {
//   const accessToken = userSlice.getState().jwtToken; // Получаем токен из состояния
//   if (accessToken) {
//     const decodedToken = jwtDecode(accessToken) as {
//       exp: number;
//     };
//     const expirationTime = decodedToken.exp * 1000;
//     const currentTime = Date.now();

//     if (expirationTime - currentTime < 60000) {
//       // Вызываем логику обновления токена здесь
//     }
//   }
// };

//----------------------------------------------------------
      //const { updatedAccessToken, updatedRefreshToken } = action.payload as { updatedAccessToken?: string, updatedRefreshToken?: string };
      //console.log('jwtToken before update:', state.jwtToken);
      //const { jwtToken } = action.payload
      // if (updatedRefreshToken !== undefined) {
      //   localStorage.setItem('refreshToken', updatedRefreshToken);
      //   console.log('builder Новый Refresh Token (в localStorage):', updatedRefreshToken);
      // }
    
      // if (updatedAccessToken !== undefined) {
      //   localStorage.setItem('accessToken', updatedAccessToken);
      //   state.jwtToken = updatedAccessToken;
      //   console.log('builder Новый Access Token:', state.jwtToken);
      // }
