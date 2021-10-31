import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div id="about" className="d-flex mx-auto my-5">
            <div className="col-lg-6 w-50 text-center p-3 pt-3 mt-3">
                <h2 className="my-2">Get Updates</h2>
                <h3 className="my-3">Want to get updates abour our<br />
                    latest tour programs? Please<br />
                    subscribe now.</h3>
                <Link to="../../LearnMore/LearnMore.js"><Button className="my-3" variant="outline-warning">Learn More</Button></Link>
            </div>
            <div className="col-lg-6 w-50">
                <img height="400px" className="" src="https://i.ibb.co/1QhvJ3b/tour-learn.jpg" alt="" />
            </div>

        </div>
    );
};

export default About;