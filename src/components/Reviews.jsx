import React, { useState } from 'react';
import './review.css';

import mobiback from '../assets/mobiback.jpg';
import rp1 from '../assets/rp1.jpg';
import rp2 from '../assets/rp2.jpg';

function Reviews() {
  const [count, setCount] = useState(0);

  const reviews = [
    {
      name: "Alice Johnson",
      image: rp1, 
      rating: 5,
      text: "Fantastic product! Exceeded my expectations."
    },
    {
      name: "Bob Smith",
      image: mobiback, 
      rating: 4,
      text: "A bit pricey but the quality and service offsets it."
    },
    {
      name: "Carol Davis",
      image: rp2, 
      rating: 3,
      text: "Excellent, prompt delivery and good after-sales service."
    }
  ];

  return (
    <div>
      <h1>What Our Customers <br></br>Say</h1>
      <div className='reviews'>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-content">
              <img src={review.image} alt={review.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              <h3>{review.name}</h3>
              <div style={{ color: '#FFD700' }}>
                {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
