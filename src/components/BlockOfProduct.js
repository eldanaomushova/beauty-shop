import React, { useState, useEffect } from 'react';
import { Boxes } from '../data/Box';
import { Body } from '../data/Body';
import { Children } from '../data/Children';
import { Hair } from '../data/Hair';
import { Man } from '../data/Man';
import { Skin } from '../data/Skin';
import '../styles/BlockOfProduct.css';

const BlockOfProduct = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const [basketProducts, setBasketProducts] = useState([]);
    
    useEffect(() => {
        const likedProductsFromStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(likedProductsFromStorage);
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        setBasketProducts(basketProductsFromStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
        localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
    }, [likedProducts, basketProducts]);

    const toggleLiked = (id) => {
        if (likedProducts.includes(id)) {
            setLikedProducts(likedProducts.filter(productId => productId !== id));
        } else {
            setLikedProducts([...likedProducts, id]);
        }
    };
    const toggleBasket = (id) =>{
        if(basketProducts.includes(id)){
            setBasketProducts(likedProducts.filter(productId =>productId !== id ));
        }else{
            setBasketProducts([...basketProducts, id]);
        }
    }

    return (
        <div className='products-container'>
            {Boxes.map((record) => (
                <div className='box' key={record.id}>
                    <img src={require(`../images/boxes/${record.image}.jpg`)} alt={record.name} />
                    <p>{record.price} $</p>
                    <h2>{record.image}</h2>
                    <div className="button-container"> 
                        <span 
                            className={`mdi ${basketProducts.includes(record.id) ? 'mdi-basket' : 'mdi-basket-outline'} ${likedProducts.includes(record.id) ? 'basket' : ''}`}
                            onClick={() => toggleBasket(record.id)}></span>
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

export default BlockOfProduct;
