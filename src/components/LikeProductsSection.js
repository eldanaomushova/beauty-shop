import React, { useState, useEffect } from 'react';
import { Boxes } from '../data/Box';

const LikedPage = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    useEffect(() => {
        const likedProductsFromStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(likedProductsFromStorage);
    }, []);

    return (
        <div className='liked-products-container'>
            <h1>Liked Products</h1>
            {likedProducts.length === 0 ? (
                <p>No liked products yet.</p>
            ) : (
                <div className='liked-products'>
                    {Boxes.filter(record => likedProducts.includes(record.id)).map(record => (
                        <div className='liked-box' key={record.id}>
                            <img src={require(`../images/boxes/${record.image}.jpg`)} alt={record.name} />
                            <p>{record.price} $</p>
                            <h2>{record.name}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedPage;
