import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://dry-forest-48839.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    return (
        <div className="text-white">
            <h2>Manage All Orders</h2>
            {
                <Row xs={1} md={3} className=" ">
                    {
                        bookings.map(booking => (
                            <Col className="my-5 px-5 text-center text-white">
                                <Card border="dark" className="bg-warning" style={{ width: '20rem' }}>
                                    <Card.Img style={{ height: '200px' }} variant="top" src={booking.img} />
                                    <Card.Body>
                                        <Card.Title><h3>{booking.name}</h3></Card.Title>
                                        <Card.Text>
                                            <p>{booking.description}</p>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Button onClick={() => handleDelete(booking?._id)} variant="danger">Cancel</Button> */}
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            }
        </div>
    );
};

export default ManageAllOrders;