import React from 'react';
import MyOrder from '../../Pages/HomeAll/MyOrder/MyOrder';
import AddProduct from '../../Pages/HomeAll/AddProduct/AddProduct';
import AddReview from '../../Pages/HomeAll/AddReview/AddReview';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Payment from '../Payment/Payment';
import Dashboard from '../Dashboard/Dashboard';
const DashboardHome = () => {
    return (
        <div class="container dash-container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="dash">
                <Row>
                    <Col sm={3}>
                        <Nav className="dash-nav flex-column">
                            <Nav.Item>
                                <Nav.Link className="dash-Items" eventKey="dash">DashBoard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items" eventKey="addProducts">Add a Product</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items" eventKey="myOrders">Manage Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items" eventKey="addReview">Add Review</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items" eventKey="payment">Payment</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <h2 class="text-center text-white">
                            <span className='heading'>Dash</span>Board</h2>
                        <Tab.Content>
                            <Tab.Pane eventKey="dash">
                                <Dashboard />
                            </Tab.Pane>
                            <Tab.Pane eventKey="addProducts">
                                <AddProduct />
                            </Tab.Pane>
                            <Tab.Pane eventKey="myOrders">
                                <MyOrder />
                            </Tab.Pane>
                            <Tab.Pane eventKey="addReview">
                                <AddReview />
                            </Tab.Pane>
                            <Tab.Pane eventKey="payment">
                                <Payment />
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    );
};

export default DashboardHome;