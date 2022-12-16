import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllProductsNav from '../AllProductsNav/AllProductsNav';
import Product from '../Product/Product';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://jewellery-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='home-bg' id='allProducts'>
            <h2 className='m-b text-center p-2 text-white'><span className='heading'>A</span>ll <span className='heading'>P</span>roducts</h2>

            <AllProductsNav></AllProductsNav>
            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </Row>
        </div>
    );
};

export default AllProduct;