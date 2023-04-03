import {Item} from '../../../types/index'; 

export const ADD_ITEM = 'ADD_ITEM';

export const addToCart = (item: Item) => {
    return {
        type : "ADD_ITEM",
        payload : item
    }
}