import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';
import im1 from '../images/for children/Babies.jpg';
import im2 from '../images/for_man/Calvin Klein CK BE 200ml EDT.jpg';
import im3 from '../images/for hair/Beste™ No_ 9 Jelly Cleanser - Drunk Elephant | Sephora.jpg';
import im4 from '../images/for_body/Body and Hair Care Products_ Japanese Cosmetics Ranking 2020 Mid-Year.jpg';
import im5 from '../images/for_skin/ -3.jpg';
import im6 from '../images/boxes/Function of Beauty Packaging.jpg';

const MainPageSection = () => {
    return (
        <div className='mainpage-container'>
            <img src={im1} alt="Babies" />
            <HeroSlider
                slidingAnimation="left_to_right"
                orientation="horizontal"
                initialSlide={0}
                settings={{
                    slidingDuration: 500,
                    slidingDelay: 2000,
                    shouldAutoplay: true,
                    shouldDisplayButtons: true,
                    autoplayDuration: 5000,
                    height: "30vh",
                }}
>
                <Slide
                    background={{
                        backgroundImage: `url(${im1})`,
                        backgroundAttachment: ""
                    }}
                />
                <Slide
                    background={{
                        backgroundImage: `url(${im2})`,
                        backgroundAttachment: ""
                    }}
                />
                <Slide
                    background={{
                        backgroundImage: `url(${im3})`,
                        backgroundAttachment: ""
                    }}
                />
                <Slide
                    background={{
                        backgroundImage: `url(${im4})`,
                        backgroundAttachment: ""
                    }}
                />
                <Slide
                    background={{
                        backgroundImage: `url(${im5})`,
                        backgroundAttachment: ""
                    }}
                />
                <Slide
                    background={{
                        backgroundImage: `url(${im6})`,
                        backgroundAttachment: ""
                    }}
                />
            </HeroSlider>
        </div>
    );
};

export default MainPageSection;
