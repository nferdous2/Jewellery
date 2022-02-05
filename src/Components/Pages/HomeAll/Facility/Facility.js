import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Facility.css';
import { faClock, faMoneyBill, faSmile, faUser } from '@fortawesome/free-solid-svg-icons';

const Facility = () => {
    return (
        <div className="facility-body mt-5">
            <h2 className='heading'>Facilities</h2>

            <Container>
                <Row className="mb-3 mt-3">
                    <Col className="facility-div p-4" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000" >
                        <FontAwesomeIcon className="icons-f" icon={faMoneyBill}></FontAwesomeIcon>

                        <h5>100%</h5>
                        <h4>Cash Back</h4>

                    </Col>
                    <Col xs={{ order: 6 }} className="facility-div p-4" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" >
                        <FontAwesomeIcon className="icons-f" icon={faUser}></FontAwesomeIcon>

                        <h5>20+</h5>
                        <h4>Staff</h4>

                    </Col>
                    <Col xs={{ order: 6 }} className="facility-div p-4" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2000" >
                        <FontAwesomeIcon className="icons-f" icon={faSmile}></FontAwesomeIcon>

                        <h5>1000+</h5>
                        <h4>Happy Clients</h4>
                    </Col>
                    <Col xs={{ order: 1 }} className="facility-div p-4" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3000" >
                        <FontAwesomeIcon className="icons-f" icon={faClock}></FontAwesomeIcon>

                        <h5>24/7</h5>
                        <h4>Service Facility</h4>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Facility;