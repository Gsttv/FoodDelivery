import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FoodProps } from '../trending';

interface CartItem extends FoodProps {
  quantity: number;
}


interface Props {
  cartItems: FoodProps[];
}


const Cart: React.FC<Props> = ({ cartItems }) => {
  const [cartItemsWithQuantity, setCartItemsWithQuantity] = useState<CartItem[]>([]);

  // Convert passed cartItems to cart items with quantity when component mounts or cartItems change
  useEffect(() => {
    const processedCartItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, [] as CartItem[]);

    setCartItemsWithQuantity(processedCartItems);
  }, [cartItems]);

  const addToCart = (food: FoodProps) => {
    const existingItem = cartItemsWithQuantity.find((item) => item.id === food.id);
    if (existingItem) {
      setCartItemsWithQuantity(
        cartItemsWithQuantity.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItemsWithQuantity([...cartItemsWithQuantity, { ...food, quantity: 1 }]);
    }
  };

  const removeFromCart = (food: FoodProps) => {
    setCartItemsWithQuantity(cartItemsWithQuantity.filter((item) => item.id !== food.id));
  };

  const decreaseQuantity = (food: FoodProps) => {
    setCartItemsWithQuantity(
      cartItemsWithQuantity.map((item) =>
        item.id === food.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cartItemsWithQuantity.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCartItemsWithQuantity([]);
  };

  return (
    <View className="flex-1 bg-white px-4 pt-6">
    <View className="flex-row items-center justify-between">
      <Text className="text-2xl font-bold">Carrinho</Text>
      <Pressable onPress={clearCart}>
        <Feather name="trash-2" size={24} color="#475569" />
      </Pressable>
    </View>

    <FlatList
        data={cartItemsWithQuantity}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between py-4 border-b border-slate-200">
            <View className="flex-row items-center gap-4">
              <Text className="text-lg font-medium">{item.name}</Text>
              <Text className="text-base text-slate-500">R$ {item.price.toFixed(2)}</Text>
            </View>
            <View className="flex-row items-center gap-4">
              <Pressable onPress={() => decreaseQuantity(item)}>
                <Feather name="minus" size={20} color="#475569" />
              </Pressable>
              <Text className="text-base font-medium">{item.quantity}</Text>
              <Pressable onPress={() => addToCart(item)}>
                <Feather name="plus" size={20} color="#475569" />
              </Pressable>
              <Pressable onPress={() => removeFromCart(item)}>
                <Feather name="trash-2" size={20} color="#475569" />
              </Pressable>
            </View>
          </View>
        )}
        ListFooterComponent={
          <View className="py-4">
            <Text className="text-2xl font-bold">Total: R$ {getTotalPrice().toFixed(2)}</Text>
            <Pressable className="bg-green-500 py-3 rounded-lg mt-4">
              <Text className="text-white text-center text-lg font-medium">
                Finalizar Compra
              </Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
};

export default Cart;