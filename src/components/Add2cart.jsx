import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data'; // Assuming you have a data file with products

function Add2cart() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Add2cart;
