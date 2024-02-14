import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import im1 from '../images/logo/im1.jpg'
import im2 from '../images/logo/im2.jpg'
import im3 from '../images/logo/im3.jpg'
import im4 from '../images/logo/im4.jpg'
import im5 from '../images/logo/im5.jpg'


import '../styles/MainPageSection.css'

const fadeImages = [
    {
        url: im1,
        link: '/body'
    },
    {
        url: im2,
        link: '/box'
        
    },
    {
        url: im3,
        link: '/skin'
    },
    {
        url: im4,
        link: '/mens'
    },
    {
        url: im5,
        link: '/hand'
    }
    
];

const MainPageSection = () => {
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index} className='image-container'>
                        <Link to={fadeImage.link}>
                            <img style={{ width: '100%' }} src={fadeImage.url} alt={fadeImage.caption} />
                        </Link>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default MainPageSection;
