import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/HeaderMain.css';
import logo from '../images/logo/logo.jpg';
import data from '../locales/en.json';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationMain from './NavigationMain';
import MainPageSection from './MainPageSection';
import Trendings from './Trendings';
import Footer from './Footer';


function HeaderMain(productsData) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleSearchClick = () => {
        setShowResults(true);
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
                    <span class="mdi mdi-heart-outline"
                    ></span>
                    <span class="mdi mdi-basket"></span>
                    <span class="mdi mdi-account"></span>
                </div>
            </div>
                <div className={`template_search ${showResults ? 'visible' : ''}`}>
                    {Object.values(data)
                        .filter((val) => {
                        if (searchTerm === '') {
                            return true;
                        } else if (
                            typeof val === 'string' &&
                            val.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                            return true;
                        }
                        return false;
                        })
                        .map((val, index) => (
                        <div key={index} className='search-result'>
                            {val}
                        </div>
                        ))}
                </div>
                <NavigationMain />
                <MainPageSection />
                <Trendings />
                <Footer />

        </div>
    );
}
export default HeaderMain;