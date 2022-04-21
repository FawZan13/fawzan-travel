import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://dry-forest-48839.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="py-5">
            <Container>
                <h2 className="text-center my-5 text-white">Our Services</h2>
                {services.length === 0 ?
                    <Spinner animation="border" variant="warning" />
                    :
                    <Row xs={1} md={2} lg={3} className=" g-4">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </Row>

                }
            </Container>

        </div>
    );
};

export default Services;