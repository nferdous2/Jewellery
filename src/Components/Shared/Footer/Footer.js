import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='row'>
                <div className="col-md-3">
                    <h3>Decore 'n crafts</h3>
                    <p>We are happy in your satisfaction</p>
                    <p className='mt-5'>
                        <h5 className='text-uppercase'><i className="fas fa-search-location me-2"></i>Our Office</h5>
                        <address> <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>Syhlet</address>
                    </p>
                </div>
                <div className="col-md-3">
                    <h3 className='text-uppercase'>Connect Us</h3>
                    <div className="icons-container d-flex ">
                        <div className="icons">
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <h3 className='text-uppercase'>Support</h3>
                    <p>
                        <p><a href="#" className='list'>About Products</a></p>
                        <p><a href="#" className='list'>How to buy products</a></p>
                        <p><a href="#" className='list'>How to contact us</a></p>
                    </p>
                </div>
                <div className="col-md-3">
                    <h3 className='text-uppercase'>Legal</h3>
                    <p>
                        <p><a href="#" className='list'>Copyright policy</a></p>
                        <p><a href="#" className='list'>Privacy policy</a></p>
                        <p><a href="#" className='list'>Terms of use</a></p>
                        <p><a href="#" className='list'>Cookies policy</a></p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;