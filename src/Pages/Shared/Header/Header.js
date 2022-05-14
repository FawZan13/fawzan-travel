import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar style={{ margin: "0px" }} className="" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Fawzan Travel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/home#update">Subscribe</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link> */}

                        {user?.email ?

                            <>
                                <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                                <Nav.Link as={Link} to={`/mybookings/${user.email}`}>My Bookings</Nav.Link>
                                <Nav.Link as={Link} to="/managebookings">Manage Bookings</Nav.Link>
                                <Button className="mx-3" onClick={logOut} variant="danger">Logout</Button>
                                <Navbar.Text>
                                    <a href="#login">{user?.displayName}</a>
                                </Navbar.Text>
                            </>
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