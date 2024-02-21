import React from 'react';
import '../styles/SearchToggle.css'

const SearchToggle = ({ product }) => {
    return (
        <div>
        {/* <h2>{product.name}</h2> */}
        {/* <img src={product.image} alt={product.name} /> */}
        {/* <p>{product.description}</p> */}
        <p>{product.image}</p>
        </div>
    );
};


export default SearchToggle;
