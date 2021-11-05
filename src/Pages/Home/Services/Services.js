import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://dry-forest-48839.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="">
            <h2 className="text-center my-5 text-white">Our Services</h2>
            {services.length === 0 ?
                <Spinner animation="border" variant="warning" />
                :
                <Row xs={1} md={3} className="text-center ">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>

            }

        </div>
    );
};

export default Services;