import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Update = () => {
    return (
        <div id="update" className="d-flex my-5 col">
            <div className="col-lg-6 col-sm-12 ">
                <img height="400px" className="" src="https://i.ibb.co/YPqDw1r/tour-banner.jpg" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12  text-center  pt-3 mt-3 text-white">
                <h2 className="my-2">Get Updates</h2>
                <h3 className="my-3">Want to get updates abour our<br />
                    latest tour programs? Please<br />
                    subscribe now.</h3>
                <Link to="../../Subscribe/Subscribe.js"><Button className="my-3" variant="outline-warning">Subscribe</Button></Link>
            </div>
        </div>
    );
};

export default Update;