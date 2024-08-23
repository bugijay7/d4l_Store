import React, { useState } from 'react';
import './home.css';


import Footer from '../components/Footer.jsx';
import Banner from '../components/Banner.jsx';
import Prodcard from '../components/Prodcard.jsx';
import About from '../components/About.jsx';
import Reviews from '../components/Reviews.jsx';

function Home() {
    const [count, setCount] = useState(0);
    
    return (

        <div className='home-page' >
        <Banner />
        <Prodcard />
        <About />
        <Reviews />
        <Footer/>
        </div>
    )
}
export default Home