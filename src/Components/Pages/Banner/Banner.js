import React from 'react';
import { Card } from 'react-bootstrap';
// import { Card, Col, Container, Row } from 'react-bootstrap';
import b2 from '../../../Images/b2.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <Card className="bg-dark text-white h-75 p-2">
            <Card.Img src={b2} className="banner-section" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Text>
                    <h2>
                        <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>our <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">J</span>ewellery <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">I</span>ntroduces <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>ou <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">B</span>efore <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>ou <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">E</span>ven <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">S</span>peak
                    </h2>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
        // <div>
        //     <div class="card bg-dark text-white col-12 col-sm-6 col-md-12 mb-3 ">
        //         <div>
        //             <img src={b2} class="card-img" alt="..." />

        //         </div>

        //         <div class="card-img-overlay col-sm-3 col-md-6 col-12 text-center">

        //             <div className="p-4">
        //                 <h2>
        //                     <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>our <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">J</span>ewellery <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">I</span>ntroduces <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>ou <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">B</span>efore <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">Y</span>ou <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">E</span>ven <span className='heading' data-aos="zoom-in-right" data-aos-duration="3000">S</span>peak
        //                 </h2>
        //             </div>


        //         </div>
        //     </div>

        // </div>


    );
};

export default Banner;