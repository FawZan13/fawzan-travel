import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Update from '../Update/Update'

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Update></Update>
            <About></About>
        </div>
    );
};

export default Home;