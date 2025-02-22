//Products
export interface Item {
    index?: number;
    name?: string;
    img?: string;
    url:string;
    gender?: string;
    category?: string;
    price:number;
    brand: string;
    discount:number;
    id?: string; 
    size: number;
    count:number;
    rating: number;
    [x: string]: any;
}

export interface Cardslist{
    [key: string]: Item
}

export interface Action {
    type: string,
    payload?: any
}

//Accounting
export interface UserProfile {
    firstName: string,
    lastName: string,
    email: string,
    // password: string,
    roles: string[]
}
export interface State {
    user?: UserProfile,
    jwtToken?: string
} 
export interface UserRegister {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}
export interface UserAddress {
    country: string,
    city: string,
    zipCode: number | string,
    street: string,
    house: string,
    fullAddress: string
}
export  interface UserPhone {
    countryCode: number,
    phoneNumber: string,   
}
export interface UserInfo {
    firstName: string,
    lastName: string,
    address: UserAddress,
    numberPhone: UserPhone
}

export type GetState = () => State;

