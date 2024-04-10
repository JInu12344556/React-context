// CartItem.js
import React from 'react';
import { useCart } from './Cart';

const CartItem = ({ item, index }) => {
  const { removeItemFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    updateCartItemQuantity(index, quantity);
  }

  return (
    <div>
      <div>Price: {item.price}</div>
      <div>
        Quantity: <input type="number" value={item.quantity} onChange={handleQuantityChange} />
      </div>
      <div>Total Price: {item.price * item.quantity}</div>
      <button onClick={() => removeItemFromCart(index)}>Remove</button>
    </div>
  );
}

export default CartItem;
