import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import products from '../data'; // Adjust the path to your actual file
import './listings.css'; // Adjust the path to your actual CSS file

function Listings() {
  const [filteredCategory, setFilteredCategory] = useState('all');
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const category = query.get('category');
    setFilteredCategory(category || 'all');
  }, [location.search]);

  const filteredProducts = filteredCategory === 'all'
    ? products
    : products.filter(product => product.category === filteredCategory);

  return (
    <div className="listings-box" id="listings">
      <div className="listings">
        <h1 className="listings-title">Product Listings</h1>
        <div className="category-buttons">
          <button onClick={() => setFilteredCategory('bracelets')} className="filter-button">Bracelets</button>
          <button onClick={() => setFilteredCategory('necklaces')} className="filter-button">Necklaces</button>
          <button onClick={() => setFilteredCategory('rings')} className="filter-button">Rings</button>
          <button onClick={() => setFilteredCategory('earrings')} className="filter-button">Earrings</button>
        </div>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <Link to={`/details/${product.id}`} className="product-details-link">More Info</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listings;
