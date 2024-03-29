import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllProductsNav from '../../HomeAll/AllProductsNav/AllProductsNav';
import Product from '../../HomeAll/Product/Product';

const Gold = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://jewellery-server.onrender.com/gold')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <div className='home-bg'>
            <AllProductsNav></AllProductsNav>
            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </Row>
        </div>
    );
};

export default Gold;