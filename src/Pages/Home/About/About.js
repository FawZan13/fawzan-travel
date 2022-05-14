import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ background: 'white', marginTop: '90px' }}>
            <Container>
                <Row id="about" className="justify-content-center align-items-center">
                    <Col data-aos="fade-right" sm={12} md={6} lg={6} className="">
                        <Container>
                            <h2 className="my-2">About Us</h2>
                            <h3 className="my-3">Want to learn more about us?<br />
                                Click the button below for more<br />
                                information</h3>
                            <Link to="../../LearnMore/LearnMore.js"><Button className="my-3" variant="outline-success">Learn More</Button></Link>
                        </Container>

                    </Col>
                    <Col data-aos="fade-left" sm={12} md={6} lg={6} className="  ">
                        <Container>
                            <img height="" className="w-100" src="https://i.ibb.co/1QhvJ3b/tour-learn.jpg" alt="" />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
        // <div id="about" className="d-flex row">
        //     <div className="col-lg-6 col-sm-12 text-center  pt-3 mt-3 text-white bg-warning">
        //         <h2 className="my-2">About Us</h2>
        //         <h3 className="my-3">Want to learn more about us?<br />
        //             Click the button below for more<br />
        //             information</h3>
        //         <Link to="../../LearnMore/LearnMore.js"><Button className="my-3" variant="outline-success">Learn More</Button></Link>
        //     </div>
        //     <div className="col-lg-6 col-sm-12 w-50">
        //         <img height="400px" className="" src="https://i.ibb.co/1QhvJ3b/tour-learn.jpg" alt="" />
        //     </div>

        // </div>
    );
};

export default About;