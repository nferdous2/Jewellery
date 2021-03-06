import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import './Products.css';
const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://glacial-refuge-18418.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='m-3 text-center p-2 text-white'><span className='heading'>O</span>ur <span className='heading'>C</span>ollections</h2>
            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5 ">
                {
                    products.map(product => <Product product={product}
                    ></Product>)
                }
            </Row>
            <Link to="/allProducts" >
                <button type="submit" className="btn btn-all">
                    See All product
                </button>
            </Link>
        </div>
    );
};
export default Products;