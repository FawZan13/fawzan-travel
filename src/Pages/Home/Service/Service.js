import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, img } = service;

    return (
        <Col data-aos="fade-up" className=" text-center my-3">
            <Card border="" className="h-100 shadow-lg" style={{ width: '' }}>
                <Card.Img height="220" variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Link to={`/book/${_id}`}><Button className=" mb-3" variant="outline-danger">Book Now</Button></Link>
            </Card>
        </Col>
    );
};

export default Service;