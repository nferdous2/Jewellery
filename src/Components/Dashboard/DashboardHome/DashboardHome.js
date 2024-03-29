import React from 'react';
import MyOrder from '../../Pages/HomeAll/MyOrder/MyOrder';
import AddReview from '../../Pages/HomeAll/AddReview/AddReview';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Payment from '../Payment/Payment';
// import Dashboard from '../Dashboard/Dashboard';
import "../DashboardBody/DashboardBody.css"
const DashboardHome = () => {
    return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="myOrders">
                <Row>
                    <Col sm={3} style={{ backgroundColor: "rgba(10, 10, 10, 0.979)" }}>
                        <Nav className="dash-nav flex-column">
                            <Nav.Item>
                                <Nav.Link className="dash-Items">DashBoard</Nav.Link>
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
                        <Tab.Content>
                            {/* <Tab.Pane eventKey="dash">
                                <Dashboard />
                            </Tab.Pane> */}
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

    );
};

export default DashboardHome;