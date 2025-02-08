import { Item } from '../../../types/index';

export const sortItems = (items: Item[], sort: string): Item[] => {
  if (sort === 'Price: Low-High') {
    console.log('Sorting by Price up');
    return [...items].sort((a, b) => a.price - b.price);
  } else if (sort === 'Price: High-Low') {
    console.log('Sorting by Price down');
    return [...items].sort((a, b) => b.price - a.price);
  } else if (sort === 'By discount') {
    console.log('Sorting by Discount');
    return [...items].sort((a, b) => b.discount - a.discount);
  } else if (sort === 'By rating') {
    console.log('Sorting by Rating');
    return [...items].sort((a, b) => b.rating - a.rating);
  } else {
    console.log('No sorting applied');
    return items;
  }
}