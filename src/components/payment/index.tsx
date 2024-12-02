import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import { FoodProps } from '../trending';

interface CheckoutProps {
  cartItems: FoodProps[];
  total: number;
  onCheckoutComplete: () => void;
}

export const CheckoutScreen: React.FC<CheckoutProps> = ({ 
  cartItems, 
  total, 
  onCheckoutComplete 
}) => {

  const [address, setAddress] = useState({
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const paymentMethods = [
    { id: 'pix', label: 'Pix' },
    { id: 'credit', label: 'Cartão de Crédito' },
    { id: 'debit', label: 'Cartão de Débito' },
    { id: 'cash', label: 'Dinheiro' }
  ];

  const handleCheckout = () => {

    if (!address.street || !address.number || !paymentMethod) {
      Alert.alert(
        'Erro de Validação',
        'Por favor, preencha o endereço e selecione a forma de pagamento'
      );
      return;
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Finalizar Compra</Text>


      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Endereço de Entrega</Text>
        <TextInput
          placeholder="Rua"
          placeholderTextColor="#6B7280"
          value={address.street}
          onChangeText={(text) => setAddress({...address, street: text})}
          className="border border-slate-300 p-2 rounded-lg mb-2"
        />
        <TextInput
          placeholder="Número"
          placeholderTextColor="#6B7280"
          value={address.number}
          onChangeText={(text) => setAddress({...address, number: text})}
          className="border border-slate-300 p-2 rounded-lg mb-2"
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Bairro"
          placeholderTextColor="#6B7280"
          value={address.neighborhood}
          onChangeText={(text) => setAddress({...address, neighborhood: text})}
          className="border border-slate-300 p-2 rounded-lg mb-2"
        />
        <TextInput
          placeholder="Cidade"
          placeholderTextColor="#6B7280"
          value={address.city}
          onChangeText={(text) => setAddress({...address, city: text})}
          className="border border-slate-300 p-2 rounded-lg mb-2"
        />
        <TextInput
          placeholder="Estado"
          placeholderTextColor="#6B7280"
          value={address.state}
          onChangeText={(text) => setAddress({...address, state: text})}
          className="border border-slate-300 p-2 rounded-lg mb-2"
        />
        <TextInput
          placeholder="CEP"
          placeholderTextColor="#6B7280"
          value={address.zipCode}
          onChangeText={(text) => setAddress({...address, zipCode: text})}
          className="border border-slate-300 p-2 rounded-lg mb-4"
          keyboardType="numeric"
        />
      </View>


      <View>
        <Text className="text-lg font-semibold mb-2">Forma de Pagamento</Text>
        {paymentMethods.map((method) => (
          <Pressable
            key={method.id}
            onPress={() => setPaymentMethod(method.id)}
            className={`flex-row items-center p-3 border border-slate-300 rounded-lg mb-2 ${
              paymentMethod === method.id ? 'bg-green-100' : ''
            }`}
          >
            <View 
              className={`w-5 h-5 rounded-full border border-slate-300 mr-2 ${
                paymentMethod === method.id ? 'bg-green-500' : ''
              }`}
            />
            <Text>{method.label}</Text>
          </Pressable>
        ))}
      </View>


      <View className="mt-4">
        <Text className="text-lg font-semibold">Resumo do Pedido</Text>
        {cartItems.map((item) => (
          <View 
            key={item.id} 
            className="flex-row justify-between items-center py-2 border-b border-slate-200"
          >
            <Text>{item.name}</Text>
            <Text>R$ {(item.price * (item.quantity || 1)).toFixed(2)}</Text>
          </View>
        ))}
        <View className="flex-row justify-between mt-2">
          <Text className="text-lg font-bold">Total</Text>
          <Text className="text-lg font-bold">R$ {total.toFixed(2)}</Text>
        </View>
      </View>


      <Pressable 
        onPress={handleCheckout}
        disabled={total === 0}
        className={`py-4 rounded-lg mt-4 ${
          total === 0 
            ? 'bg-gray-400'
            : 'bg-green-500' 
        }`}
      >
        <Text className={`text-center text-lg font-medium ${
          total === 0 ? 'text-gray-600' : 'text-white'
        }`}>
          Confirmar Pedido
        </Text>
      </Pressable>
      {total === 0 && (
        <Text className="text-red-500 text-center mt-2 text-sm">
          Adicione itens ao carrinho antes de finalizar o pedido
        </Text>
      )}
    </ScrollView>
  );
};