import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';

function Header() {
    const [count, setCount] = useState(0);

    const styles = {
        header: {
            backgroundColor: 'transparent',
            padding: '20px',
            height: '10vh',
            marginBottom: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    };

    return (
        <div style={styles.header} id='home'> {/* Use 'style' attribute */}
        <Navbar />
        </div>
    );
}

export default Header;
