import React from 'react';

import { Card } from 'react-bootstrap';

import banner from '../../../Images/banner.jpg';

import './Banner.css'

const Banner = () => {

    return (
        <Card className="banner-bg  text-white p-2">
            <Card.Img xs={1} sm={12} md={4} src={banner} alt="" className='h-75' />
            <Card.ImgOverlay>
                <Card.Text className='banner-Text'>
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