import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import products from '../data';
import './details.css';

function Details() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart'); // Redirect to cart after adding product
  };

  return (
    <div className='product-container'>
    <button className="go-to-cart-button" onClick={() => navigate('/cart')}>
    Go to Cart
  </button>
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-availability">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
         
        </div>
      </div>
     
    </div>
  );
}

export default Details;
