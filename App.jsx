import React, { useEffect, useState } from 'react';
import { CartProvider, useCart } from './Cart';
import CartPage from './Cartpage';
import './styles.css';

// Define Product component outside of App component
const Product = ({ id, name, price }) => {
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart({ id, name, price, quantity: 1 });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

function App() {
  const { cartItems, addItemToCart, removeItemFromCart, updateCartItemQuantity, getTotalQuantity, getTotalAmount } = useCart();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/Data.json');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } else {
          console.log("Network response was not ok");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error when fetching data", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div id="header1">
            <h1> My React Context</h1>
          </div>
          <div id="product-container "> {/* Insert div with id */}
            <h1>Shopping App</h1>
            {/* Render Product components */}
            <Product id={1} name="Product 1" price={10} />
            <Product id={2} name="Product 2" price={20} />
            {/* Render Cart component */}
            <CartPage />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
