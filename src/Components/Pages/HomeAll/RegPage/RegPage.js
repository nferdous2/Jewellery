import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
// import { useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../../../../hooks/useAuth';
import './RegPage.css';
const RegPage = () => {
    const [loginData, setLoginData] = useState({});
    const { handleRegister } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleSubmit = e => {
        handleRegister(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <div className='reg-bg p-2' xs={1} md={3}>
            <Card style={{ width: '23rem' }} xs={1} md={3} className=" login-page  mb-4">
                <Card.Body>
                    <Card.Text >
                        <form onSubmit={handleSubmit} className="form-container">
                            <h3 className="text-center font-weight-bold mb-2" data-aos="fade-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="3000"> Registration </h3>

                            <label data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="1500">First Name</label>
                            <input
                                onChange={handleChange}
                                className="form-control mb-3 p-2"
                                type="name"
                                name="name"
                                placeholder="Enter your Name"
                            />
                            <label data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="1500">Last Name</label>
                            <input
                                onChange={handleChange}
                                className="form-control mb-3 p-2"
                                type="name"
                                name="name"
                                placeholder="Enter your Name"
                            />

                            <label data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="2000">Email Address</label>

                            <input
                                onChange={handleChange}
                                className="form-control mb-3 p-2"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />

                            <label data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="3000">Password</label>

                            <input
                                onChange={handleChange}
                                className="form-control mb-3 p-2"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <input
                                className="btn btn-allP mt-3"
                                type="submit"
                                value="Register"
                            />
                        </form>
                        <div className="form-footer p-2 mb-3" data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="3000">
                            <p>Already have an account?</p>
                            <Link to="/register">
                                <h5 className="text-white text-decoration none">Please,Login</h5>
                            </Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RegPage;
