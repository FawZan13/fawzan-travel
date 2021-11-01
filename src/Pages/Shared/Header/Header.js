import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="py-4" bg="warning" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Fawzan Travel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#update">Subscribe</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        {user?.email ?

                            <div className="d-flex">
                                <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                                <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                                <Nav.Link as={Link} to="/manageorders">Manage Orders</Nav.Link>
                                <Button className="mx-3" onClick={logOut} variant="danger">Logout</Button>
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user?.displayName}</a>
                                </Navbar.Text>
                            </div>
                            :
                            <Nav.Link as={Link} to="/login"><Button variant="danger">Login</Button></Nav.Link>
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;