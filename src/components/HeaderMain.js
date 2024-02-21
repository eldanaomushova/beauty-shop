import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationMain from './NavigationMain';
import MainPageSection from './MainPageSection';
import Trendings from './Trendings';
import Footer from './Footer';
import SearchedToggle from './SearchedToggle';
import '../styles/HeaderMain.css';
import logo from '../images/logo/logo.jpg';
import { Boxes } from '../data/Box';
import { Body } from '../data/Body';
import { Children } from '../data/Children';
import { Hair } from '../data/Hair';
import { Man } from '../data/Man';
import { Skin } from '../data/Skin';

function HeaderMain({ productsData }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchClick = () => {
        const results = Object.values(Boxes, Body, Children, Hair, Man, Skin).filter((val) => {
            if (
                typeof val === 'object' &&
                val.image.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return true;
            }
            return false;
        });
        setSearchResults(results);
    };
    const handleClickItem = (id) => {
        let item = '/'; 
    
        if (id >= 1 && id <= 12) {
            item = '/body';
        } else if (id >= 13 && id <= 24) {
            item = '/';
        } else if (id >= 25 && id <= 36) {
            item = '/child';
        } else if (id >= 37 && id <= 48) {
            item = '/hair';
        } else if (id >= 49 && id <= 60) {
            item = '/man';
        } else if (id >= 61 && id <= 72) {
            item = '/skin';
        }
    
        window.location.href = item;
    };
    
    

    return (
        <div className='header-container'>
            <LanguageSwitcher />
            <div className='header-block'>
                <img id='logo' src={logo} alt='Logo' />
                <input
                    id='search'
                    type='text'
                    placeholder='Search'
                    className='search'
                    maxLength={128}
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <div className='mdi-container'>
                    <span
                        className='mdi mdi-search-web'
                        role='img'
                        aria-label='Search Icon'
                        onClick={handleSearchClick}></span>
                    <span className='mdi mdi-heart-outline'></span>
                    <span className='mdi mdi-basket'></span>
                    <span className='mdi mdi-account'></span>
                </div>
            </div>
            {searchResults.length > 0 && (
                <div className='search-results-container'>
                    {searchResults.map((result, index) => (
                        <Link key={index} to='#' onClick={() => handleClickItem(result.id)}>
                            <SearchedToggle product={result} />
                        </Link>
                    ))}
                </div>
            )}

            <NavigationMain />
            <MainPageSection />
            <Trendings />
            <Footer />
        </div>
    );
}

export default HeaderMain;
