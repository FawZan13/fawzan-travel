import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Book = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const { user } = useAuth();
    const email = user.email;
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://dry-forest-48839.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const onSubmit = (data) => {
        data.status = "pending";
        data.name = service.name;
        data.email = email;
        data.img = service.img;
        data.description = service.description;
        console.log(data);
        fetch("https://dry-forest-48839.herokuapp.com/mybookings", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),

        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (

        <div>
            <h2 className="text-white text-center">This is Booking</h2>
            <div className=" row container">
                <div className="col-md-6 my-5 border border-danger bg-white">
                    <h3 className="m-3">Booking Form</h3>
                    <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("date", { required: true })}
                            type="date" className="p-2 m-3 mx-2 w-100" />
                        <input {...register("address", { required: true })}
                            type="name" placeholder="Your Address" className="p-2 m-3 mx-2 w-100" />
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
                </div>

            </div>
        </div>
    );
};

export default Book;