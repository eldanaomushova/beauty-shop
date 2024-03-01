import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationMain from './NavigationMain';
import MainPageSection from './MainPageSection';
import Trendings from './Trendings';
import Footer from './Footer';
import '../styles/HeaderMain.css';

import SearchSection from './SearchSection';

function HeaderMain() {
    return (
        <div className='header-container'>
            <LanguageSwitcher />
            <SearchSection />
            <NavigationMain />
            <MainPageSection />
            <Trendings />
            <Footer />
        </div>
    );
}

export default HeaderMain;
