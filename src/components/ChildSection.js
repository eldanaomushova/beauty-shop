import React, { useState, useEffect } from 'react';
import { Children } from '../data/Children';
import '../styles/BlockOfProduct.css';

const ChildSection = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    useEffect(() => {
        const likedProductsFromStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(likedProductsFromStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }, [likedProducts]);

    const toggleLiked = (id) => {
        if (likedProducts.includes(id)) {
            setLikedProducts(likedProducts.filter(productId => productId !== id));
        } else {
            setLikedProducts([...likedProducts, id]);
        }
    };

    return (
        <div className='products-container'>
            {Children.map((record) => (
                <div className='box' key={record.id}>
                    <img src={require(`../images/for children/${record.image}.jpg`)} alt={record.name} />
                    <p>{record.price} $</p>
                    <h2>{record.image}</h2>
                    <div className="button-container"> 
                        <button>Buy Now</button>
                        <span
                            className={`mdi ${likedProducts.includes(record.id) ? 'mdi-heart' : 'mdi-heart-outline'} ${likedProducts.includes(record.id) ? 'liked' : ''}`}
                            onClick={() => toggleLiked(record.id)}
                        ></span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChildSection;
