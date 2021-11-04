import { getAuth } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const MyBookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = getAuth();

    const { email } = useParams();
    // const email = user?.email;
    useEffect(() => {
        fetch(`https://dry-forest-48839.herokuapp.com/mybookings/${email}`)
            .then(res => res.json())
            .then(data => setBookings(Object.values(data)));
    }, [email]);
    console.log(bookings);
    return (
        <div className="text-white">
            <h2>My Bookings {bookings.length}</h2>
            {/* <h2>{bookings[0].name}</h2> */}
            <Row xs={1} md={3} className="text-center ">
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
                                <h5 className="text-white">{booking.status}</h5>
                            </Card>
                        </Col>
                    ))
                }
                {/* <Col className="my-5 px-5 text-center text-white">
                    <Card border="dark" className="bg-warning" style={{ width: '20rem' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src={bookings.img} />
                        <Card.Body>
                            <Card.Title><h3>{bookings.name}</h3></Card.Title>
                            <Card.Text>
                                <p>{bookings.description}</p>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col> */}
            </Row>
        </div>
    );
};

export default MyBookings;