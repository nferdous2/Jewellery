import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import './Products.css';
const Products = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://jewellery-server.onrender.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <div className="d-flex justify-content-center">
          <h2 className='m-3 p-2 text-white'><span className='heading'>O</span>ur <span className='heading'>C</span>ollections</h2>
          <Link to="/allProducts" className="text-decoration-none ms-3 mt-4">
            <button type="submit" className="btn btn-all">
              See All Products
            </button>
          </Link>
        </div>
      </div>


      <Row xs={1} md={3}>
        {
          products.map(product => <Product product={product}
          ></Product>)
        }
      </Row>

    </div>
  );
};
export default Products;