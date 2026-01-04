import { useMemo } from "react";
import { Item } from '../../../types/index';

interface FilterParams {
  items: Item[];
  categoryItems: string[];
  priceItem: { valueFrom: number; valueTo: number }[];
  brandItem: string[];
  searchQuery: string;
  gender: string;
}

export const useFilteredItems = ({
  items,
  categoryItems,
  priceItem,
  brandItem,
  searchQuery,
  gender,
}: FilterParams): Item[] => {
  const filteredItems = useMemo(() => {
    return items
    .filter(p => p.gender?.toUpperCase() === gender.toUpperCase())
    .filter(p => {
      console.log('filteredItems length before categoryItems filter', categoryItems.length);
        if (categoryItems.includes('All')) {
          console.log('brandItem length', brandItem.length);
            return true;
        }  return categoryItems.includes(p.category!);     
    })
    //Вариант начальный при выборе одного фильтра по цене
    // .filter(p => p.price < priceItem.valueTo)
    // .filter(p => p.price >= priceItem.valueFrom && p.price <= priceItem.valueTo)
    // .filter(p => p.price > priceItem.valueFrom)
    //----------------------------
    .filter(p => {
      console.log("Проверяем фильтр по цене для", p.name, "Цена:", p.price);
      if (priceItem.length === 0) return true;
    
      return priceItem.some(range => {
          const inRange = p.price >= range.valueFrom && p.price < range.valueTo;
          console.log(`${p.name} входит в диапазон ${range.valueFrom} - ${range.valueTo}:`, inRange);
          return inRange;
      });
    })
    //Фильтрация по цене - короткая запись: 
    //.filter(p => priceItem.length === 0 || priceItem.some(range => p.price >= range.valueFrom && p.price < range.valueTo));
    .filter(p => {
      if (brandItem.length === 0 || brandItem.includes('')) {
          return true;
      }
      console.log("Проверка бренда:", p.brand, "в", brandItem);  
      return brandItem.includes(p.brand!);     
    })
    .filter(p => p.name?.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [items, categoryItems, priceItem, brandItem, searchQuery, gender]);

  return filteredItems;
};