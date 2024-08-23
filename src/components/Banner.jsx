import React from 'react';
import './banner.css'; 

import vidBg from '../assets/background-video.mp4';

function Banner() {
  return (
    <div className="banner-container">
    <video src={vidBg}  autoPlay muted loop  className='background-video'/> 
      <div className="banner-content">
        <h2>Discover the Art of Fine Jewelry</h2>
        <p>
          Our jewelry is more than adornment; it's a narrative of <br />
          beauty and significance <br />
          waiting to become a part of your story.
        </p>
        <button className='homeButton'><a href="/listings">Our Products</a></button>
      </div>
      
    </div>
  );
}

export default Banner;
