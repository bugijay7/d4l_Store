import React, { useState } from 'react';
import products from '../data'; // Adjust the path to your product data file
import './searchbar.css';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        // Filter products based on the search query
        if (searchQuery) {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="..."
                className="search-input"
            />
            {filteredProducts.length > 0 && (
                <div className="search-results">
                    <h2>Results:</h2>
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product.id}>
                                <a href={`/details/${product.id}`} className="search-result-link">
                                    {product.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
