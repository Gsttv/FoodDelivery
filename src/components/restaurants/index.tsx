import { FlatList } from 'react-native';
import { useEffect, useState  } from 'react'
import { RestaurantItem } from './horizontal'
import { FoodProps } from '../trending';

export interface RestaurantsProps{
  id: string;
  name: string;
  image: string;
}

interface Props {
  addToCart: (food: FoodProps) => void;
}

export function Restaurants({ addToCart }: Props) {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getFoods(){
      const response = await fetch("http://localhost:3000/restaurants")
      const data = await response.json()
      setRestaurants(data);
    }

    getFoods();
  }, [])


 return (
  <FlatList
    data={restaurants}
    renderItem={ ({ item }) => 
      <RestaurantItem 
        item={item} 
        onAddToCart={() => 
          addToCart({
            id: item.id,
              name: item.name,
              image: item.image,
              price: 0,
              time: '',
              delivery: 0,
              rating: 0,
              restaurantId: item.id
          })} /> }
    horizontal={true}
    contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
    showsHorizontalScrollIndicator={false}
  />
  );
}