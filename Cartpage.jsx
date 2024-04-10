// Cartpage.js
import React from 'react';
import { useCart } from './Cart';
import CartItem from './Cartitem';

const CartPage = () => {
  const { cartItems, getTotalQuantity, getTotalAmount } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} index={index} />
      ))}
      {/* Display total quantity and total amount */}
      <div>Total Quantity: {getTotalQuantity()}</div>
      <div>Total Amount: {getTotalAmount()}</div>
    </div>
  );
}

export default CartPage;
