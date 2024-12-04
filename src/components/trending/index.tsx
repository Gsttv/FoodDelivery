import { useState, useEffect } from 'react'
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food'


export interface FoodProps{
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
  quantity: number;
}

interface Props {
  addToCart: (food: FoodProps) => void;
}

export function TrendingFoods({ addToCart }: Props) {
  const [foods, setFoods] = useState<FoodProps[]>([])

  useEffect(() => {
    async function getFoods(){
      const response = await fetch("http://localhost:3000/foods")
      const data = await response.json()
      setFoods(data);
    }

    getFoods();
  }, [])

 return (
   <FlatList
      data={foods}
      renderItem={ ({ item }) => <CardHorizontalFood food={item} onAddToCart={() => addToCart(item)} /> }
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
      showsHorizontalScrollIndicator={false}
   />
  );
}