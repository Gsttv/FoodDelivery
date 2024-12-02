import { useState } from "react";
import { FoodProps } from "../../trending";

// In your context file (cartContext.tsx)
export const useCart = () => {
    const [cart, setCart] = useState<FoodProps[]>([]);
  
    const addToCart = (food: FoodProps) => {
      setCart(prevCart => [...prevCart, food]);
    };
  
    return { cart, addToCart };
  };