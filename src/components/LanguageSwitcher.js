import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/languageSwitcher.css';

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };
    const displayConditions = () => {
        var popup = document.getElementById("popup-container");
        popup.style.display = "flex";
    };
    const closePopup = () => {
        var popup = document.getElementById("popup-container");
        popup.style.display = "none";
    };
    return (
        <div className='language-container'>
            <div id="popup-container" className="popup-container">
                <div className="popup-content">
                    <strong id='condit-text'> {t('conditions')}</strong>
                    <p id='first-p'>{t('shippingStart')}
                    <strong>{t('boldText')}</strong>
                    </p>
                    <p>{t('shippingEnd')}</p>
                    <button className='close-button' onClick={closePopup}>{t('close')}</button>
                </div>
            </div>
            <div className='free-sheeping-container'>
                <div>
                    <strong>{t('shippingStart')} </strong> <p> {t('boldText')} </p> 
                    <strong> <span onClick={displayConditions}> *{t('see conditions')} </span></strong>
                </div>
            </div>
            <div className='language'>
                <span className='spanLangEn' onClick={() => changeLanguage('en')}
                    style={{
                        backgroundColor: selectedLanguage === 'en' ? '#0074d3' : 'white',
                        color: selectedLanguage === 'en' ? 'white' : '#0074d3'
                    }}>
                    en
                </span>
                <span className='spanLangRus' onClick={() => changeLanguage('rus')}
                    style={{
                        backgroundColor: selectedLanguage === 'rus' ? '#0074d3' : 'white',
                        color: selectedLanguage === 'rus' ? 'white' : '#0074d3'
                    }}>
                    rus
                </span>
            </div>
        </div>
    );
}

export default LanguageSwitcher;
