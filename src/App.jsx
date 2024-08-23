import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css';

import Header from './components/Header';
import Cart from './Pages/Cart';
import Listings from './Pages/Listings';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Abouts from './Pages/Abouts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <div className='app-container'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Listings" element={<Listings />} />
            <Route path="/Details/:id" element={<Details />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/about" element={<Abouts />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
