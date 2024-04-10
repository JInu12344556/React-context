import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  const removeItemFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  }

  const updateCartItemQuantity = (index = 0, newQuantity) => {
    if (index !== null && index !== undefined && Number.isInteger(index) && index >= 0 && index < cartItems.length) {
      const newCartItems = [...cartItems];
      const itemToUpdate = newCartItems[index];
  
      console.log("Item to update:", itemToUpdate); // Debugging log
  
      if (itemToUpdate && typeof itemToUpdate === 'object' && 'quantity' in itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
        setCartItems(newCartItems);
      } else {
        console.error('Invalid item or missing quantity property:', itemToUpdate);
      }
    } else {
      console.error('Invalid index:', index);
    }
  };
  

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      if (item.price && typeof item.price === 'number') {
        return total + (item.price * item.quantity);
      } else {
        console.error('Error: Price is missing or invalid for item:', item);
        return total;
      }
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateCartItemQuantity, getTotalQuantity, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
}
