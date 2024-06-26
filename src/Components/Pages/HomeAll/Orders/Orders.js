import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
const Orders = ({ order }) => {
const [orders,setOrders]= useState();
    const { productName, price, address, phone,  productId } = order;
    //DELETE A product
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete order?')
        if (proceed) {
            fetch(`https://jewellery-server.onrender.com/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully ')
                        const leftOrders = orders.filter(order => order._id !== id)
                        setOrders(leftOrders)
                        window.location.reload()
                    }
                })
        }
    }
    return (
        <Col className="col-md-4 mb-5">
            <Card className="mb-4 p-2 h-100" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <Card.Body className='service-style'>
                    <Card.Title className='order-text'><span className="heading">Product Id: </span>{productId}</Card.Title>
                    <Card.Title className='order-text'><span className="heading">Product Name: </span>{productName}</Card.Title>
                    <Card.Text className='order-text'><span className="heading">Price: </span>{price}</Card.Text>
                    <Card.Text className='order-text'><span className="heading">Address: </span>{address}</Card.Text>
                    <Card.Text className='order-text'><span className="heading">Phone: </span>{phone}</Card.Text>
                    <Button onClick={() => handleDelete(order._id)} className='btn-allP'>Remove</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Orders;