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

function HeaderMain({ productsData }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchClick = () => {
        const results = Object.values(Boxes).filter((val) => {
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
                        <Link to='/child'><SearchedToggle key={index} product={result} /></Link>
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
