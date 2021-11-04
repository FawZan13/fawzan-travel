import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, img } = service;

    return (
        <Col className="my-5 px-5 text-center text-white">
            <Card border="dark" className="bg-warning" style={{ width: '20rem' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                    </Card.Text>
                </Card.Body>
                <Link to={`/book/${_id}`}><Button className="pb-2 mb-3" variant="outline-danger"><h4>Book Now</h4></Button></Link>
            </Card>
        </Col>
    );
};

export default Service;