import React, { useState, useEffect } from 'react';
import { Skin } from '../data/Skin';
import '../styles/BlockOfProduct.css';
import NavigationMain from './NavigationMain';
import '../styles/HeaderMain.css';
import '../styles/BlockOfProduct.css';
import SearchSection from './SearchSection';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import '../styles/ChildSection.css';
const SkinSection = () => {
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
        <div>
            <LanguageSwitcher />
            <SearchSection/>
            <NavigationMain/>
            <p className='section-header'>SKIN SECTION</p>
            <div className='products-container'>
            {Skin.map((record) => (
                <div className='box' key={record.id}>
                    <img src={require(`../images/for_skin/${record.image}.jpg`)} alt={record.name} />
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
        <Footer />
        </div>
    );
};

export default SkinSection;
