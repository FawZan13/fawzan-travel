import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Update = () => {
    return (
        <div style={{ background: 'white', marginTop: '90px' }}>
            <Container>
                <Row id="update" className="justify-content-center align-items-center">
                    <Col data-aos="fade-right" sm={12} md={6} lg={6} className="">
                        <img height="" className="w-100" src="https://i.ibb.co/YPqDw1r/tour-banner.jpg" alt="" />
                    </Col>
                    <Col data-aos="fade-left" sm={12} md={6} lg={6} className="">
                        <h2 className="my-2">Get Updates</h2>
                        <h3 className="my-3">Want to get updates abour our<br />
                            latest travel programs? Please<br />
                            subscribe now.</h3>
                        <Link to="../../Subscribe/Subscribe.js"><Button className="my-3" variant="outline-success">Subscribe</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Update;