import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import im1 from '../images/logo/im1.jpg'


import '../styles/MainPageSection.css'

const fadeImages = [
    {
        url: im1
    }
    
];

const MainPageSection = () => {
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index} className='image-container'>
                        <img style={{ width: '100%' }} src={fadeImage.url} alt={fadeImage.caption} />
                    
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default MainPageSection;
