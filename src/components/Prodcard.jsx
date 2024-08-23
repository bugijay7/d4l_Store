import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './prodcard.css'; // Import the CSS file

// Import images
import chainsImg from '../assets/chains.jpg';
import earringsImg from '../assets/earrings.jpg';
import ringsImg from '../assets/rings.jpg';
import braceletsImg from '../assets/bracelets.jpg';

// Define the jewelry categories data
const categories = [
  {
    id: 'bracelets',
    name: 'Bracelets',
    image: braceletsImg,
    description: 'Explore our elegant array of bracelets.'
  },
  {
    id: 'rings',
    name: 'Rings',
    image: ringsImg,
    description: 'Browse our beautiful selection of rings.'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: earringsImg,
    description: 'Discover a variety of stylish earrings.'
  },
  {
    id: 'chains',
    name: 'Chains',
    image: chainsImg,
    description: 'Find the perfect chain for any occasion.'
  },
  
  // Add more jewelry categories as needed
];

function Prodcard() {
  return (
    <div className="container">

      <div className="card-wrapper">
        {categories.map((category) => (

          <div key={category.id} className="card">
            <img
              src={category.image}
              alt={category.name}
              className="images"
            />
            <div className="info">
              <h3 className="name">{category.name}</h3>
              <p className="description">{category.description}</p>
              <Link
                to={`/listings?category=${category.id}`} // Add category as query parameter
                className="link"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prodcard;
