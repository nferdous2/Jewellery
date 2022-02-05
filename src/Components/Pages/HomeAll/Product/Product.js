import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, pic, price, _id } = product
    return (

        <div className="container  text-white p-3">

            <Col className="services">
                <Card className="service-style" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <Card.Img className='collection-img mb-3' variant="top" src={pic} />
                    <Card.Body className='infos'>
                        <Card.Title className='infos-Text' >{name}</Card.Title>
                        <Card.Text>Price: {price} $
                        </Card.Text>
                        <NavLink to={`/purchase/${_id}`} ><Button className="btn-allP">Buy now</Button></NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default Product;