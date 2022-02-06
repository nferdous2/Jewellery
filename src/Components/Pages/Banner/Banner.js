import React from 'react';
import { Card } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <Card className="banner-bg text-white p-2">
            <Card.ImgOverlay>
                <Card.Text>
                    <h2>
                        <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>our <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">J</span>ewellery <br />
                        <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">I</span>ntroduces <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>ou<br />
                        <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">B</span>efore <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>ou <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">E</span>ven <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">S</span>peak
                    </h2>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>


    );
};

export default Banner;