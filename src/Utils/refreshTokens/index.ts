import { refreshTokens } from '../../redux/slices/userSlice';
import { RootState } from '../../redux/store/configureStore';
import { ThunkDispatch } from 'redux-thunk';

export const handleTokenRefresh = async (
    dispatch: ThunkDispatch<RootState, void, any>, // Возможно, здесь лучше использовать `any` вместо `AnyAction`
    getState: () => RootState,
    action: () => Promise<void>
) => {
    try {
        await dispatch(refreshTokens());
        await action();
    } catch (refreshError) {
        console.error('Ошибка обновления токенов:', refreshError);
        throw new Error('Ошибка обновления токенов');
    }
};

// export const handleTokenRefresh = (next, action) => {
//     if (action.payload instanceof Promise) {
//         action.payload.then(v => next({...action, payload: v}));
        
//     } else {
//         next(action);
//     }   
// };

// export default function () {
//     const res = next = handleTokenRefresh.bind(null, next);

//     return res;
// }





