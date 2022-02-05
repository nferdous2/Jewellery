import React from 'react';
// import { Carousel } from 'react-bootstrap';
import './Deals.css';
import wd1 from '../../../../Images/wd1.jpg'
import wd2 from '../../../../Images/wd2.jpg'
import wd3 from '../../../../Images/wd3.jpg'
import wd4 from '../../../../Images/wd4.jpg';
const Deals = () => {
    return (
        <div class="row m-3">
            <h3 className='text-center text-white m-2'><span className='heading'>N</span>ew <span className='heading'>U</span>pdate</h3>
            <div class="col-lg-4 col-md-4 mb-4" data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine">
                <img
                    src={wd1}
                    class="w-100 h-100 rounded"
                    alt="Boat on Calm Water"
                />
                <div className=" fs-6 img-text ">
                    <h3 className='img-h'>Sea stone jwelerry</h3>
                    <h4>New In Our shop</h4>
                </div>
            </div>
            <div class="col-lg-3 m-2 col-md-4 " data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div>
                    <img
                        src={wd2}
                        class="w-100 h-100  rounded m-2"
                        alt=""

                    />
                    <div className=" fs-6 img-text text-white">
                        <h5 className='img-h'>Watch formen</h5>
                        <h5>Best Brands</h5>

                    </div>
                </div>
                <div>
                    <img
                        src={wd3}
                        class="w-100 mt-4 h-100 rounded m-2"
                        alt=""
                    />
                    <div className=" fs-6 img-text text-white ">
                        <h5 className='img-h'>New Bridal Collection</h5>
                        <h6>Special Discount on bridal collection</h6>
                    </div>
                </div>

            </div>
            <div class="col-lg-4 mb-4 col-md-6 " data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img
                    src={wd4} class="w-100 h-75  rounded"
                    alt="Mountains in the Clouds"
                />
                <div className=" fs-6 img-text">
                    <h3 className='img-h'>Gifts</h3>
                    <h4>Special gifts on Every Friday</h4>
                </div>
            </div>



        </div>
    );
};

export default Deals;