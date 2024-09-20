import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.css';
import Image2 from '../../Assets/pile-money-cartoon-vector-illustration_87720-7799.avif'
import Image1 from '../../Assets/360_F_270934199_os6kuoM8GUAUnqgT3BzvLY4ZueAgrDGW.jpg'
import Image3 from '../../Assets/360_F_588558816_jeFS3KUKiV9hkplr0NkEqOm36PXeHPhe.jpg'
import Image4 from '../../Assets/istockphoto-915220040-612x612.jpg'





const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="containerWrapper">
                <h1 className='heroHeader'>Welcome to Cash Stack</h1>
                <p className='heroSubHeader'>Your journey to success starts here</p>
                <div className='heroButton'>
                <Link to='/get_started' className="cta-button">Get Started</Link>
                </div>
                </div>
                <div className='stackImagesContainer'>
                    <div className='stackImage'>
                        <img src={Image1} class="" alt="" />
                    </div>
                    <div className='stackImage'>
                        <img src={Image2} class="" alt="" />
                    </div>
                    <div className='stackImage'>
                        <img src={Image3} class="" alt="" />
                    </div>
                    <div className='stackImage'>
                        <img src={Image4} class="" alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
