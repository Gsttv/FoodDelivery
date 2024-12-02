import { View, Text} from 'react-native';
import { useState, useEffect } from 'react'
import { RestaurantItem } from './item'
import { FoodProps } from '../trending';

export interface RestaurantsProps{
  id: string;
  name: string;
  image: string;
}


interface Props {
  addToCart: (food: FoodProps) => void;
}

export function RestaurantVerticalList({ addToCart }: Props) {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getFoods(){
      const response = await fetch("http://192.168.1.17:3000/restaurants")
      const data = await response.json()
      setRestaurants(data);
    }

    getFoods();
  }, [])


 return (
   <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
    {restaurants.map( item => (
      <RestaurantItem 
      item={item} 
      key={item.id} 
      onAddToCart={() => addToCart({  id: item.id, 
        name: item.name, 
        image: item.image, 
        price: 0,
        time: '', // Add default values for missing properties
        delivery: 0,
        rating: 0,
        restaurantId: item.id })}/>
    ))}
   </View>
  );
}