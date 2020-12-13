import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss'
import logo from './logo.png';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Navbar expand="lg">
                <Link to='/' className='logo'>
              <img src={logo} alt='logo' />
               </Link>
                    {/* <Navbar.Brand href="/">Automobile Factory</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto menubar">
                            <Link to="/">Home</Link>
                            <Link to="/addCar">Add Car</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;