
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://glacial-refuge-18418.herokuapp.com/review')
            .then(res => res.json())
            .then((data) => setReviews(data))
    }, [])
    return (
        <div className="p-5">
            <h2 className='m-3 text-center p-2 text-white'><span className='heading'>C</span>ustomer <span className='heading'>R</span>eviews </h2>

            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5">
                {

                    reviews.map(review => <Reviews review={review}></Reviews>)
                }
            </Row>
        </div>
    );
};

export default Review;