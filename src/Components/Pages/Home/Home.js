import React from 'react';
import Banner from '../Banner/Banner';
import b3 from '../../../Images/b3.png';
import b5 from '../../../Images/b-5.jpg';
import b6 from '../../../Images/b6.png';
import b9 from '../../../Images/b9.jpg';
import Facility from '../HomeAll/Facility/Facility';
import Deals from '../HomeAll/Deals/Deals';
import './Home.css';
import { Card } from 'react-bootstrap';
import Products from '../HomeAll/Products/Products';
import Review from '../HomeAll/Review/Review';
// import Products from '../HomeAll/Products/Products';
const Home = () => {
    return (

        <div className='home-bg'>
            {/* banner section */}
            <Banner />
            {/* post banner */}
            <section className="banner-section banner_black mt-4 ">
                <h3 className='text-white text-center m-3'><span className='heading'>R</span>ecent <span className='heading'>O</span>ffers</h3>
                <div className="container">
                    <div className="row" >
                        <div className="col-12 col-lg-4 col-md-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" >
                            <div className="bannerPart">
                                <div className="bannerBody">
                                    <img src={b3} alt="" className='w-75' />
                                    <div className="banner_content fs-6 text-white">
                                        <h3>New Design</h3>
                                        <h4>Small design Rings</h4>
                                        <span>Sale 40% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="bannerPart">
                                <div className="bannerBody">
                                    <img src={b5} alt="" className='w-75' />

                                    <div className="banner_content fs-6 text-white">
                                        <h3>Bestselling necklace</h3>
                                        <h4>White gold necklace</h4>
                                        <span>Sale 10% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="bannerPart">
                                <div className="bannerBody">
                                    <img src={b6} alt="" className='w-75' />

                                    <div className="banner_content fs-6 text-white">
                                        <h3>Featured Necklace</h3>
                                        <h4>Platinium Rings</h4>
                                        <span>Sale 30% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Facility */}
            <Facility />
            {/* products */}
            <Products />
            {/* advertise */}
            <Card className="bg-dark text-white">
                <Card.Img src={b9} className="bannerAdd" alt="Card image" />
                <Card.ImgOverlay data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <Card.Text className='addText mt-5 p-5'>
                        <h4><span className="heading">Sale Off 30% All Products </span></h4>
                        <h2>New Trending Collection</h2>
                        <p>  <span className="heading"> Best Design makes you more special.</span></p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            {/* deals */}
            <Deals></Deals>
            {/* reviews */}
            <Review />
        </div>
    );
};

export default Home;