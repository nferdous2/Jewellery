import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar-style' variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="justify-content-start text-white">
                        <p className=" navs-h"><span className="navs">NF</span> Jewellery</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className=" justify-content-end">
                        <Nav.Link as={Link} to="/home" ><p className=" nav-link fs-5 fw-bold text-decoration-none">Home</p></Nav.Link>
                        <Nav.Link as={Link} to="/allProducts"><p className="nav-link fs-5 fw-bold text-decoration-none">Products</p></Nav.Link>
                        <Nav.Link as={Link} to="/myOrder"><p className="nav-link fs-5 fw-bold text-decoration-none">My Order</p></Nav.Link>
                        <Nav.Link as={Link} to="/login"><p className="nav-link fs-5 fw-bold text-decoration-none">Login</p></Nav.Link>
                        <Nav.Link as={Link} to="/dashboard"><p className="nav-link fs-5 fw-bold text-decoration-none">Dashboard</p></Nav.Link>

                        {/* {user?.email ?
                        <Nav>
                            <Nav.Link as={Link} to="/dashboard"><p className="nav-link fs-5 fw-bold text-decoration-none">Dashboard</p></Nav.Link>
                            <Nav.Link onClick={logOut} className="nav-link fs-5 fw-bold text-decoration-none" >Logout</Nav.Link>

                        </Nav> :
                        <Link to="/login">
                            <p className="nav-link fs-5 fw-bold text-decoration-none">LogIn</p>
                        </Link>
                    } */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;