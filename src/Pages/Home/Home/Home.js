import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Update from '../Update/Update'

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Update></Update>
            <About></About>
        </div>
    );
};

export default Home;