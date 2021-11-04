import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div id="about" className="d-flex ">
            <div className="col-lg-6 col-sm-12 w-50 text-center  pt-3 mt-3 text-white">
                <h2 className="my-2">About Us</h2>
                <h3 className="my-3">Want to learn more about us?<br />
                    Click the button below for more<br />
                    information</h3>
                <Link to="../../LearnMore/LearnMore.js"><Button className="my-3" variant="outline-warning">Learn More</Button></Link>
            </div>
            <div className="col-lg-6 col-sm-12 w-50">
                <img height="400px" className="" src="https://i.ibb.co/1QhvJ3b/tour-learn.jpg" alt="" />
            </div>

        </div>
    );
};

export default About;