import React from 'react';
import { Card, Col } from 'react-bootstrap';
const Reviews = ({ review }) => {
    const { name, opinion, img } = review;
    return (
        <div>
            <Col className='h-100'>
                <Card className="service-style" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" data-aos-duration="2000">
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