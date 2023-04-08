import React from 'react';
import Banner from '../Banner/Banner';
import b3 from '../../../Images/b3.png';
import b5 from '../../../Images/b-5.jpg';
import b6 from '../../../Images/b6.png';
import b9 from '../../../Images/b9.jpg';
import Deals from '../HomeAll/Deals/Deals';
import './Home.css';
import { Card, CardGroup } from 'react-bootstrap';
import Products from '../HomeAll/Products/Products';
import Review from '../HomeAll/Review/Review';
const Home = () => {
    return (

        <div className='home-bg'>
            {/* banner section */}
            <Banner />
            {/* post banner */}
            <section className="banner-section banner-f mt-4 ">
                <h3 className='text-white text-center m-3'><span className='heading'>R</span>ecent <span className='heading'>O</span>ffers</h3>
                <CardGroup xs={1} md={3} className="g-4 p-3">
                    <Card className="bannerPart">
                        <Card.Body className="bannerBody ">
                            <Card.Img variant="top" className='bannerBodyImg' src={b3} />
                            <Card.Text className="banner-inside fs-6 text-white">
                                <h3 className="banner-insideH3">New Design</h3>
                                <h4 className="banner-insideH3">Small design Rings</h4>
                                <span>Sale 40% </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="bannerPart">
                        <Card.Body className="bannerBody">
                            <Card.Img variant="top" className='bannerBodyImg' src={b5} />
                            <Card.Text className="banner-inside fs-6 text-white">
                                <h3 className="banner-insideH3">Bestselling necklace</h3>
                                <h4 className="banner-insideH3">White gold necklace</h4>
                                <span>Sale 10% </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="bannerPart">
                        <Card.Body className="bannerBody">
                            <Card.Img variant="top" className='bannerBodyImg' src={b6} />
                            <Card.Text className="banner-inside fs-6 text-white">
                                <h3 className="banner-insideH3">Featured Necklace</h3>
                                <h4 className="banner-insideH3">Platinium Rings</h4>
                                <span>Sale 30% </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </section>
            {/* Facility */}
            {/* <Facility /> */}
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