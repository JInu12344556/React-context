import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './Cart';


const root = document.getElementById('createroot');
const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(
  <CartProvider>
    <App />
    </CartProvider>
);
