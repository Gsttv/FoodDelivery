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
  // Check if the item already exists in the cart
  const existingItem = cartItems.find(item => item.id === food.id);
  
  if (existingItem) {
    // If item exists, increment its quantity
    setCartItems(cartItems.map(item => 
      item.id === food.id 
        ? { ...item, quantity: (item.quantity || 1) + 1 } 
        : item
    ));
  } else {
    // If item doesn't exist, add it with quantity 1
    setCartItems([...cartItems, { ...food, quantity: 1 }]);
  }};

  const removeFromCart = (food: FoodProps) => {
    setCartItems(cartItems.filter(item => item.id !== food.id));
  };
  
  const decreaseQuantity = (food: FoodProps) => {
    const updatedCartItems = cartItems
      .map(item => 
        item.id === food.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);
    
    setCartItems(updatedCartItems);
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

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

      <Cart cartItems={cartItems}
      removeFromCart={removeFromCart}
      decreaseQuantity={decreaseQuantity}
      clearCart={clearCart}/>
    </ScrollView>

  );
}
