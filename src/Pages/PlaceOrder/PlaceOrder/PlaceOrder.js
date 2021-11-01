import React from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { id } = useParams();
    return (

        <div className="text-white">
            <h2>this is booking: {id}</h2>
        </div>
    );
};

export default PlaceOrder;