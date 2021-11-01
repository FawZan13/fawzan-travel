import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { id } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (

        <div className="text-white">
            <h2>this is booking: {id}</h2>
            <h4>Details of {service.name}</h4>
        </div>
    );
};

export default PlaceOrder;