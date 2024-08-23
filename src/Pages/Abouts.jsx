import React, { useState } from 'react';
import './abouts.css';
import About from '../components/About.jsx';
import Prodcard from '../components/Prodcard.jsx';
import Footer from '../components/Footer.jsx';
function Abouts() {
  const [count, setCount] = useState(0);
 
  return (
    <div className="abouts-container">
    <About />
    <Prodcard />
    <Footer />
     </div>
  );
}

export default Abouts;
