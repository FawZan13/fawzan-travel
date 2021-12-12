import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://dry-forest-48839.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [control]);

    const updateStatus = (id) => {
        const find = bookings.find(booking => booking._id === id);


        // console.log(find);
        fetch(`http://dry-forest-48839.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(find),
        })
            .then((res) => res.json())
            .then((result) => {
            });

    }

    const handleDelete = (id) => {
        alert('Do you want to delete this item?');
        fetch(`https://dry-forest-48839.herokuapp.com/deleteBooking/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    setControl(!control);
                }

            });

    };

    return (
        <div className="text-white">
            <h2>Manage All Orders</h2>
            {
                <Row xs={1} md={3} className=" ">
                    {
                        bookings.map(booking => (
                            <Col key={booking._id} className="my-5 px-5 text-center text-white">
                                <Card border="dark" className="bg-warning" style={{ width: '20rem' }}>
                                    <Card.Img style={{ height: '200px' }} variant="top" src={booking.img} />
                                    <Card.Body>
                                        <Card.Title><h3>{booking.name}</h3></Card.Title>
                                        <Card.Text>
                                            {booking.description}
                                        </Card.Text>
                                        <h6>Booked by:<br /><span>{booking.email}</span></h6>
                                        <h5><span id="status">{booking.status}</span></h5>
                                    </Card.Body>
                                    <Button onClick={() => updateStatus(booking?._id)} variant="success">Update</Button>
                                    <Button onClick={() => handleDelete(booking?._id)} variant="danger">Cancel</Button>
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