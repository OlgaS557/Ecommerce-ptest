import React from 'react';
import { useAppSelector } from '../../hook/redux'
import { Item } from '../../types';
import Card from './Card';

interface Props {
    items: Item[]
}

const FilteredCards = ({ items }: Props) => {
    const sort = useAppSelector(state => state.filterReducer.sort);
    

    switch (sort) {
        case "Price up":
            return (
                <>
                    {items.sort((item1, item2) => item1.price - item2.price).map((item: Item, index: number) => <Card item={item} key={index} />)}
                </>
            )
        case "Price down":
            return (
                <>
                    {items.sort((item1, item2) => item2.price - item1.price).map((item: Item, index: number) => <Card item={item} key={index} />)}
                </>
            )
        case "By discont":
            return (
                <>
                    {items.sort((item1, item2) => item2.discount - item1.discount).map((item: Item, index: number) => <Card item={item} key={index} />)}
                </>
            )
        default:
            return (
                <>
                    {items.map((item: Item, index: number) => <Card item={item} key={index} />)}
                </>
            )
    }

}

export default FilteredCards