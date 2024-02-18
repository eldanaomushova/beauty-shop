import React, { useState, useEffect } from 'react';
import '../styles/Footer.css'; 
import im1 from '../images/slider_images/1.jpg';
import im2 from '../images/slider_images/2.jpg';
import im3 from '../images/slider_images/3.jpg';
import im4 from '../images/slider_images/4.jpg';
import im5 from '../images/slider_images/5.jpg';
import im6 from '../images/slider_images/6.jpg';
import im7 from '../images/slider_images/7.jpg';
import im8 from '../images/slider_images/8.jpg';
import im9 from '../images/slider_images/9.jpg';
import logo1 from '../images/logo/logo1.png'

const Footer = () => {
    const images = [im1, im2, im3, im4, im5, im6, im7, im8, im9];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % (images.length * 2));
        }, 2000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div className="slider-container">
            <div className="slider-images" style={{ transform: `translateX(-${currentImageIndex * (100 / images.length)}%)` }}>
                {images.concat(images).map((image, index) => (
                    <img
                        key={index}
                        className="slider-image"
                        src={image}
                        alt={`Slider Image ${index}`}
                    />
                ))}
            </div>
            <div className='footer-container'>
                <div className='logo-quotage'>
                    <img src={logo1} alt='logo'/>
                    <blockquote>"Your beauty starts with StellerPi</blockquote>
                </div>
                <div className='footer'>
                    <div className='socials'>
                        <p>Follow us on social media</p>
                        <span className='mdi mdi-instagram'></span>
                        <span className='mdi mdi-facebook'></span>
                        <span className='mdi mdi-twitter'></span>
                        <span className='mdi mdi-youtube'></span>
                    </div>
                    <div className='info'>
                        <p>E-mail</p>
                        <a type='email'>help@gmail.com</a>
                        <p>Call us</p>
                        <a type='phone'>+996706060606</a>
                    </div>
                </div>
                <div className='rights'>
                    <p>All rights are reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
