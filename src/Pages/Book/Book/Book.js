import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Book = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const { user } = useAuth();
    const email = user.email;
    const [service, setService] = useState({})
    const handleAddToBookings = () => {
        service.email = user.email;
        // service.status = "pending";
        fetch("https://dry-forest-48839.herokuapp.com/mybookings", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(service),

        })
    }

    useEffect(() => {
        fetch(`https://dry-forest-48839.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const onSubmit = (data) => {
        data.email = email;
        console.log(data);
    }
    return (

        <div>
            <h2 className="text-white text-center">This is Booking</h2>
            <div className=" row container">
                <div className="col-md-6 my-5 border border-danger bg-white">
                    <h3 className="m-3">Booking Form</h3>
                    <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })}
                            placeholder="Name" className="p-2 m-3 mx-2 w-100" />
                        <input type="number" {...register("number")} placeholder="Your Number" className="p-2 m-3 mx-2 w-100" />
                        <input className="btn bg-danger" type="submit" />
                    </form>
                </div>
                <div className="col-md-6 my-5 px-5 text-white ">
                    <Card border="dark" className="bg-warning mx-5 w-100" style={{ width: '20rem' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src={service.img} />
                        <Card.Body>
                            <Card.Title><h3>{service.name}</h3></Card.Title>
                            <Card.Text>
                                <p>{service.description}</p>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    {/* <h2>Booking Id: {id}</h2>
                    <img height="400px" src={service.img} alt="" />
                    <h4>Details of {service.name}</h4>
                    <h5>{service.description}</h5>
                    <Button onClick={handleAddToBookings} className="pb-2 mb-3" variant="outline-danger"><h4>Book Now</h4></Button> */}
                </div>

            </div>
        </div>
    );
};

export default Book;