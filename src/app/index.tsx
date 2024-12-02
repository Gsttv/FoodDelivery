import { View, ScrollView } from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants'
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { FoodProps, TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";
import Cart from "../components/cart";
import { useState } from "react";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {

  const [cartItems, setCartItems] = useState<FoodProps[]>([]);

  const addToCart = (food: FoodProps) => {
    setCartItems([...cartItems, food]);
  };
  // const addToCart = (food: { id: string; name: string; image: string; price: number }) => {
  //   // Implementação da função addToCart
  // };
  return (
      <ScrollView style = {{ flex: 1 }} className="bg-slate-200"
      showsVerticalScrollIndicator={false}>

        <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
          <Header/>

          <Banner/>

          <Search/>
        </View>


        
      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={ () => console.log("CLICOU NO VEJA MAIS")}
        size="text-2xl"
      />
      <TrendingFoods addToCart={addToCart}/>

      <Section
        name="Famosos no DevFood"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Famosos")}
        size="text-xl"
      />

      <Restaurants addToCart={addToCart}/>

      <Section
        name="Restaurantes"
        label="Veja todos"
        action={ () => console.log("CLICOU NO RESTAURANTES")}
        size="text-xl"
      />

      <RestaurantVerticalList addToCart={addToCart}/>

      <Cart cartItems={cartItems}/>
    </ScrollView>

  );
}
