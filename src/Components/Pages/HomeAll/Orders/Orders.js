import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
const Orders = ({ order }) => {
    const [product, setProduct] = useState([]);

    const { name, price, address, phone, email } = order;
    //DELETE A product
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you want to delete');
        if (proceed) {
            const url = `https://glacial-refuge-18418.herokuapp.com/orders/${id}`;
            fetch(url, {
                mathod: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Sucessfully');
                        const remainingProducts = product.filter(user => user._id !== id);
                        setProduct(remainingProducts);
                    }
                })
        }
    }
    console.log(product)
    return (
        <Col>
            <Card className="mb-4 p-2 " data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <Card.Body className='service-style'>
                    <Card.Title>Name:{name}</Card.Title>
                    <Card.Text> Price:{price}</Card.Text>
                    <Card.Text>Address:{address} </Card.Text>
                    <Card.Text>Phone:{phone}</Card.Text>
                    <Card.Text>Email:{email}</Card.Text>
                    <Button onClick={handleDelete} className='btn-allP'>Remove</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Orders;