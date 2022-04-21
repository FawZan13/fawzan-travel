import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <div className="big-image">
                <div className="overlay">
                    <h1 data-aos="fade-right">Let's Start Your Journey</h1>
                    <p data-aos="fade-left">Explore the world with Fawzan Travel</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;