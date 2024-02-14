import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import "../Products/Products.css"
const Reviews = ({ review }) => {

    const { name, opinion, img, rating } = review;
    return (
        <div className="d-flex">
        <Col className="services">
          <Card className="service-style d-flex flex-column h-100">
            <Card.Img className='collection-img mb-3 w-75 rounded-circle' style={{marginLeft:"10%"}} variant="top" src={img} />
            <Card.Body className='infos text-white'>
              <Card.Title className='infos-Text' >{name}</Card.Title>
              <Card.Text>{opinion}</Card.Text>
              <Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} className="emptyIcon" />}
                fullSymbol={<FontAwesomeIcon icon={faStar} className="icon-color" />}
                readonly
              ></Rating>
            </Card.Body>
          </Card>
        </Col>
      </div>
      
      
    );
};

export default Reviews;