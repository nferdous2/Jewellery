import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Orders from '../Orders/Orders';
const MyOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://glacial-refuge-18418.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    return (
        <div id="myOrder">
            <h2 className='text-center text-white'><span className="heading">Your</span> Orders</h2>
            <Row xs={1} sm={8} md={3} className="gx-4 text-white gy-5 px-5">
                {

                    orders.map(order => <Orders order={order}></Orders>)
                }
            </Row>
        </div>
    );
};

export default MyOrder;