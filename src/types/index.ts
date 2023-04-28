export interface Item {
    index?: number;
    name?: string;
    img?: string;
    url:string;
    category?: string;
    price:number;
    discount:number;
    id?: string; 
    size: number;
    count:number;
    colorCart: string;
    rating: number;
    [x: string]: any;
}

        // id: number,
        // value: string,
        // lable: string

export interface Cardslist{
    [key: string]: Item
}

export interface Action {
    type: string,
    payload?: any
}

// export type Product = {
//     id: number,
//     name: string,
//     sex: string,
//     category: string,
//     brand:string,
//     collection:string,
//     color:string,
//     size:string,
//     style:string,
//     season:string,
//     price:number,
//     rating:Rating,
//     description:string,
//     details:string,
//     url_default_picture:string,
//     url_pictures: string[],      
//     discount:number
// }

export type Rating = {
    sum_of_grades: number,
    votes: number
}

