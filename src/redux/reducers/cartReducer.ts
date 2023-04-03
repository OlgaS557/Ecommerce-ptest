import { Action, Item } from '../../types/index'; 
import { ADD_ITEM } from '../cart/actions/cartActions';

const cartItems: any = [];

export const cartReducer = (state: any = cartItems, action: Action) => {
    const item = action.payload;
    switch (action.type) {
        case ADD_ITEM:
            const existCartItem = cartItems.find((cartItem: Item) => cartItem.id === item.id);
            
            if(existCartItem) {
             
                return cartItems.map((cartItem: Item) => 
                cartItem.id === item.id ? {...cartItem, qty: (<any>cartItem).qty +1} : cartItem
                );
            }else{
                const item = action.payload;
                return[
                    ...state, {...item, qty: 1}
                ]
            }
            default:
                return state;
    }
}