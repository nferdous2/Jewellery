import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProductsNav = () => {
    return (
        <div>
            <>
                <Navbar sticky="top" collapseOnSelect expand="lg" variant="light">
                    <Container>
                        <Navbar.Toggle />
                        <Navbar.Collapse className=" justify-content-start">
                            <Nav.Link as={Link} to="/gold" ><p className=" nav-link fs-5 fw-bold text-decoration-none">Gold Jewellery</p></Nav.Link>
                            <Nav.Link as={Link} to="/diamond"><p className="nav-link fs-5 fw-bold text-decoration-none">Diamond Jewellery</p></Nav.Link>
                            <Nav.Link as={Link} to="/others"><p className="nav-link fs-5 fw-bold text-decoration-none">Stone Jewellery</p></Nav.Link>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default AllProductsNav;