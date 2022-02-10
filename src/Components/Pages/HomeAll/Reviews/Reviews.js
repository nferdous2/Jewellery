import React from 'react';
import { Card, Col } from 'react-bootstrap';
const Reviews = ({ review }) => {
    const { name, opinion, img } = review;
    return (
        <div>
            <Col className="services">
                <Card className="service-style">
                    <Card.Img className='collection-img mb-3 w-75 rounded-circle' variant="top" src={img} />
                    <Card.Body className='infos text-white'>
                        <Card.Title className='infos-Text' >{name}</Card.Title>
                        <Card.Text>{opinion}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Reviews;