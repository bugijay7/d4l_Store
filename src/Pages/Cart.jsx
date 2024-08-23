import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './cart.css';

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className='cart-container'>
      <h1>Your Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h2 className="cart-item-name">{item.name}</h2>
            <p className="cart-item-price">${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
      <button className="clear-cart-button" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
