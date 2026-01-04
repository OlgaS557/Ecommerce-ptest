import { Item } from './../../../types/index';
import { useMemo } from "react";

interface SortParams {
    items: Item[];
    sortType: string;
  }
 
  export const useSortedItems = ( {items, sortType} : SortParams): Item[] => {
    
    const sortedItems = useMemo(() => {
      if (sortType === "priceAsc") {
        return [...items].sort((a, b) => a.price - b.price);
      }
      if (sortType === "priceDesc") {
        return [...items].sort((a, b) => b.price - a.price);
      }
      if (sortType === "nameAsc") {
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      }
      return items;
    }, [items, sortType]);

    return sortedItems;
  };