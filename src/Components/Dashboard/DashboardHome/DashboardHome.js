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
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="dash">DashBoard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="addProducts">Add a Product</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="myOrders">Manage Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="addReview">Add Review</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="payment">Payment</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <h2 class="text-center text-white" data-aos="zoom-in-down" data-aos-duration="3000">
                            <span>Dash</span><span className='heading'> Board</span></h2>
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