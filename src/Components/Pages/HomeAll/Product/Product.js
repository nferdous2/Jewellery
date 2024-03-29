import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { faCartPlus, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ product }) => {
    const { name, pic, price, _id } = product
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartItems, setCartItems] = useState(initialCartItems);
    // Update localStorage when cartItems change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    // cart, add items

    const addToCart = (product) => {
        const updatedCart = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCart);
        // Update the cart data in local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        alert('Added to cart');
    };

    return (

        <div className="text-white p-3">
            <Col className="services">
                <Card className="service-style" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className="d-flex justify-content-center align-items-center">
                        {/* Centering the image */}
                        <Card.Img className='collection-img mb-3' variant="top" src={pic} />
                    </div>
                    <Card.Body className='infos'>
                        <Card.Title className='infos-Text'>{name}</Card.Title>
                        <Card.Text>Price: {price} BDT</Card.Text>
                        <Container>
                            <Row>
                                <Col xs={6}> {/* Adjust xs={8} to the appropriate width for larger screens if needed */}
                                    <NavLink to={`/purchase/${_id}`}>
                                        <Button className="btn-allP w-75 fw-bold btn-lg border-0">Buy now</Button>
                                    </NavLink>
                                </Col>
                                <Col xs={6} className="d-flex justify-content-end align-items-center">
                                    <FontAwesomeIcon onClick={() => addToCart(product)}
                                        style={{ color: "#fea307", fontSize: "40px" }}
                                        icon={faCartPlus}
                                    />
                                </Col>
                            </Row>
                        </Container>




                    </Card.Body>
                </Card>
            </Col>
        </div>


    );
};

export default Product;