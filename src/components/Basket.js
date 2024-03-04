import React, { useState, useEffect } from 'react';
import { Boxes } from '../data/Box';
import { Body } from '../data/Body';
import { Children } from '../data/Children';
import { Hair } from '../data/Hair';
import { Man } from '../data/Man';
import { Skin } from '../data/Skin';
import '../styles/LikedPage.css'
import '../styles/BlockOfProduct.css'
import NavigationMain from './NavigationMain';
import '../styles/HeaderMain.css';
import '../styles/BlockOfProduct.css';
import SearchSection from './SearchSection';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import '../styles/ChildSection.css';
const Basket = () => {
    const [basketProducts, setbasketProducts] = useState([]);
    useEffect(() => {
        const basketProductsFromStorage = JSON.parse(localStorage.getItem('basketProducts')) || [];
        setbasketProducts(basketProductsFromStorage);
    }, []);
    const handlebuy = () =>{
    }
    const handleDelete = (id) =>{
        const updatedBasket = basketProducts.filter(productId => productId !== id);
        setbasketProducts(updatedBasket);
        localStorage.setItem('basketProducts', JSON.stringify(updatedBasket));
    }

    return (
        <div>
            <LanguageSwitcher />
            <SearchSection/>
            <NavigationMain/>
            <p className='section-header'>Basket</p>
            <div className='liked-products-container'>
            {basketProducts.length === 0 ? (
                <p>No products in basket</p>
            ) : (
                <div className='liked-products'>
                    {Boxes.filter(record => basketProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/boxes/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button onClick={() => handlebuy(record.id)}>Buy Now</button>
                                <button className='delete-from-basket' onClick={() => handleDelete(record.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                    {Body.filter(record => basketProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for_body/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                                <button className='delete-from-basket' onClick={() => handleDelete(record.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                    {Children.filter(record => basketProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for children/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                                <button className='delete-from-basket' onClick={() => handleDelete(record.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                    {Hair.filter(record => basketProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for hair/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                                <button className='delete-from-basket' onClick={() => handleDelete(record.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                    {Man.filter(record => basketProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for_man/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                                <button className='delete-from-basket' onClick={() => handleDelete(record.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                    {Skin.filter(record => basketProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for_skin/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                                <button className='delete-from-basket' onClick={() => handleDelete(record.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
            <Footer />
        </div>
    );
};

export default Basket;