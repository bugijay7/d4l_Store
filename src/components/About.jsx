import React, { useState } from 'react';
import './about.css'
import rings from '../assets/listback.jpg';

function About() {
  const [count, setCount] = useState(0);

  return (
    <div className='about-container'>
      <div className='about-image-wrapper'>
        <img  className='image'
          src={rings} 
          alt="About Bugi" 
        />
      </div>
      <div className="about-text">
        <h1>About Bugi</h1>
        <p>
          Welcome to Bugi, your ultimate destination for exquisite jewelry that blends timeless elegance with modern sophistication. 
          At Bugi, we believe that jewelry is more than just an accessory—it's a statement of your unique style and personality. 
          Our collection is carefully curated to offer you a diverse range of stunning pieces, from classic designs to contemporary trends.
        </p>
        <p>
          Whether you're searching for the perfect gift or a treat for yourself, Bugi has something special for every occasion. 
          Explore our selection of rings, bracelets, necklaces, and earrings, crafted with the finest materials and meticulous attention to detail. 
          Let Bugi help you shine and celebrate the moments that matter most.
        </p>
      </div>
    </div>
  );
}

export default About;
