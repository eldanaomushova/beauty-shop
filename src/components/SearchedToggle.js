import React from 'react';
import '../styles/SearchToggle.css'

const SearchToggle = ({ product }) => {
    return (
        <div className='search-answer-container'>
        <p>{product.image}</p>
        </div>
    );
};


export default SearchToggle;
