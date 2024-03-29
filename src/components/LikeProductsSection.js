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
const LikedPage = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    useEffect(() => {
        const likedProductsFromStorage = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(likedProductsFromStorage);
    }, []);

    return (
        <div>
            <LanguageSwitcher />
            <SearchSection/>
            <NavigationMain/>
            <p className='section-header'>LIKED PRODUCTS</p>
            <div className='liked-products-container'>
            {likedProducts.length === 0 ? (
                <p>No liked products yet.</p>
            ) : (
                <div className='liked-products'>
                    {Boxes.filter(record => likedProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/boxes/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                            </div>
                        </div>
                    ))}
                    {Body.filter(record => likedProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for_body/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                            </div>
                        </div>
                    ))}
                    {Children.filter(record => likedProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for children/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                            </div>
                        </div>
                    ))}
                    {Hair.filter(record => likedProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for hair/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                            </div>
                        </div>
                    ))}
                    {Man.filter(record => likedProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for_man/${record.image}.jpg`)}  />
                            <p>{record.price} $</p>
                            <h2>{record.image}</h2>
                            <div className="button-container"> 
                                <button>Buy Now</button>
                            </div>
                        </div>
                    ))}
                    {Skin.filter(record => likedProducts.includes(record.id)).map(record => (
                        <div className='box' key={record.id}>
                            <img src={require(`../images/for_skin/${record.image}.jpg`)}  />
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
            <Footer />
        </div>
    );
};

export default LikedPage;