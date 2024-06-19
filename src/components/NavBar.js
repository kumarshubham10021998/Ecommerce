import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const cartItems = useSelector(state => state.cart.items);
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">React-Redux-Toolkits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='mx-3' to="/" as={Link}>Product</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                        <Nav.Link className='' to="/cards" as={Link}>My Beg {cartItems.length}</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
