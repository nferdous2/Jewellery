import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Orders from '../Orders/Orders';
const MyOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://jewellery-server-roan.vercel.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    return (
        <div id="myOrder">
            <h2 className='text-center'><span className="heading">Your</span> Orders</h2>
            <Row xs={1} sm={12} md={4} className="gx-4 text-white gy-5 px-5">
                {

                    orders.map(order => <Orders order={order}></Orders>)
                }
            </Row>
        </div>
    );
};

export default MyOrder;