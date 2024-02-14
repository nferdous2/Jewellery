import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar-style custom-togglers'>
                <Container>
                    <Navbar.Brand href="#home" className="justify-content-start text-white">
                        <p className=" navs-h"><span className="navs">NF</span> Jewellery</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='navA' as={Link} to="/home"><p className="nav-link fs-5 fw-bold text-decoration-none">Home</p></Nav.Link>
                        <Nav.Link className='navA' as={Link} to="/allProducts"><p className="nav-link fs-5 fw-bold text-decoration-none">Products</p></Nav.Link>
                        <Nav.Link className='navA' as={Link} to="/"><p className="nav-link fs-5 fw-bold text-decoration-none">Contact Us</p></Nav.Link>
                        {user?.email ?
                            <Nav>
                                <Nav.Link className='navA' as={Link} to="/dashboard"><p className="nav-linkL fs-5 fw-bold text-decoration-none">Dashboard</p></Nav.Link>
                                <Nav.Link className='navA' onClick={logOut} ><p className="nav-linkL fs-5 fw-bold text-decoration-none" >Logout</p></Nav.Link>

                            </Nav> :
                            <Nav>
                            <Nav.Link className='navA' as={Link} to="/login"><p className="nav-linkL fs-5 fw-bold text-decoration-none">Login</p></Nav.Link>

                            </Nav>
                          
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;