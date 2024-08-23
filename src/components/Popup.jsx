import React, { useState } from 'react';
import './popup.css'; // Add appropriate styles here

import image1 from '../assets/rp1.jpg'; // Replace with your actual image paths
import image2 from '../assets/bback1.jpg';
import image3 from '../assets/chains.jpg';
import image4 from '../assets/rings.jpg';
import image5 from '../assets/bracelets.jpg';
import image6 from '../assets/bannerback.jpg';

function Popup() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3, image3, image5, image6];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="popup-carousel">
      <h1>About Us</h1>
      <div className="carousel-container">
        <button className="carousel-button" onClick={handlePrevious}>Previous</button>
        <img 
          src={images[currentImageIndex]} 
          alt="carousel"
          className="carousel-image"
        />
        <button className="carousel-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Popup;
