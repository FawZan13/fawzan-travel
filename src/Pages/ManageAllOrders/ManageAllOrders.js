import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://dry-forest-48839.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDelete = id => {
        const url = `https://dry-forest-48839.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Want to delete this item?')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }
    return (
        <div className="text-white">
            <h2>Manage All Orders</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <Button onClick={() => handleDelete(service._id)} variant="danger">Delete</Button>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;