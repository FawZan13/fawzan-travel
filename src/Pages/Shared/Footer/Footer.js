import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="text-white py-4 bg-dark mt-5">
                <Container className=" mt-5">
                    <Row className="row">
                        <Link to="" className="col-12 col-md-3 d-flex align-items-center justify-content-center text-decoration-none text-white">
                            <h1>Fawzan Travel</h1>
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">About Us</li>
                            <li className="">FAQS</li>
                            <li className="">Terms & Conditions</li>
                            <li className="">Contact</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Services</li>
                            <li className="">
                                Let's Start Your Journey
                                Explore the world with Fawzan Travel</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2 text-center">Connect with us</li>
                            <li className="d-flex justify-content-between">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-youtube"></i>
                            </li>
                        </ul>
                        <Container className="text-center">
                            <p className=" mb-0 mt-2">This site is developed by @Fawzan</p>
                        </Container>
                    </Row>
                </Container>
            </footer>
        </div>

    );
};

export default Footer;