
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve the cart data from local storage when the page loads
    const storedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  // Function to handle incrementing the quantity of an item
  const increaseItem = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem._id === item._id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Function to handle decrementing the quantity of an item
  const decreaseItem = (item) => {
    if (item.quantity > 1) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  // Function to calculate total price for an item
  const calculateTotalPrice = (item) => {
    const totalPrice = parseInt(item.price.replace(/,/g, ''), 10) * item.quantity;
    return totalPrice.toLocaleString();
  };

  // Delete cartItems
  const handleDelete = (itemToDelete) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemToDelete._id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };


  return (
    <div style={{ overflow: "hidden", marginBottom: "5%" }}>
      <h2 style={{ marginTop: "5%" }}>Here is Your Items</h2>
      {cartItems.map((item) => (
        <div key={item._id} style={{ display: 'flex', justifyContent: 'center', padding: "10px" }}>
          <Card style={{ width: "75%", borderRadius: "30px" }}>
            <div>
              <Row className="justify-content-between align-items-center" xs={1} md={3} style={{ padding: "20px" }}>
                <Col xs={12} md={2}>
                  <img src={item.pic} alt='' style={{ width: '100%' }} />
                </Col>
                <Col xs={12} md={2}>
                  <h5>{item.name}</h5>
                  <p><strong>Price:</strong> {item.price}</p>
                </Col>
                <Col xs={12} md={2} style={{ display: "flex", justifyContent: "space-between" }}>
                  <Button variant="outline-secondary" onClick={() => decreaseItem(item)}>
                    -
                  </Button>
                  <Form.Control type="text" style={{ margin: "3%", textAlign: "center" }} value={item.quantity} readOnly />
                  <Button variant="outline-secondary" onClick={() => increaseItem(item)}>
                    +
                  </Button>
                </Col>
                <Col xs={12} md={2}>
                  <h5>Total Price: {calculateTotalPrice(item)}</h5>
                </Col>
                <Col xs={6} md={2}>
                  <Button variant="danger" style={{width:"75%", fontSize:"20px", fontWeight:"bold"}} onClick={() => handleDelete(item)}>Delete</Button>
                </Col>

                <Col xs={6} md={2}>
                  <NavLink to={{
                    pathname: `/purchase/${item._id}?name=${item.name}&totalPrice=${calculateTotalPrice(item)}&quantity=${item.quantity}`,
                    state: {
                      cartItems: cartItems
                    }
                  }}>
                    <Button className="btn-allP w-75 fw-bold btn-lg border-0">Buy now</Button>
                  </NavLink>

                </Col>

              </Row>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Cart;


