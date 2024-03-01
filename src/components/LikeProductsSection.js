import React, { useState, useEffect } from 'react';
import { Boxes } from '../data/Box';
import '../styles/LikedPage.css'
import '../styles/BlockOfProduct.css'
const LikedPage = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    useEffect(() => {
        const likedProductsFromStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(likedProductsFromStorage);
    }, []);

    return (
        <div>
            <h1>Liked Products</h1>
            <div className='liked-products-container'>
            {likedProducts.length === 0 ? (
                <p>No liked products yet.</p>
            ) : (
                <div className='liked-products'>
                    {Boxes.filter(record => likedProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/boxes/${record.image}.jpg`)} alt={record.name} />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    );
};

export default LikedPage;
