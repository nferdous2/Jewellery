
// import { Alert } from 'bootstrap';
import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    // const { user, loginHandle } = useAuth()
    // const [loginData, setLoginData] = useState({});
    // const location = useLocation();
    // const history = useNavigate();
    // const handleSubmit = e => {
    //     loginHandle(loginData.email, loginData.password, location, history);
    //     e.preventDefault();
    // }

    // const handleChange = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...loginData };
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);
    // }
    return (
        <div>
            <div className='login-bg col-12 col-sm-12 col-md-12'>
                <div className='login-page'>
                    <section className="row justify-content-center">
                        <section className="col-12 col-sm-6 col-md-4 p-3 m-5">
                            {/* <form onSubmit={handleSubmit} className="form-container" > */}
                            <form className="form-container" >
                                <div className="form-group">
                                    <h4 className="text-center font-weight-bold" data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" data-aos-duration="3000"> Login </h4>
                                    <label data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="3000">Email Address</label>
                                    <input data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="3000" type="email" className="form-control mb-2" id="InputEmail1" placeholder="Enter email" />
                                    {/* <input onChange={handleChange} data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="3000" type="email" className="form-control mb-2" id="InputEmail1" placeholder="Enter email" /> */}
                                </div>
                                <div className="form-group" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" data-aos-duration="3000">
                                    <label >Password</label>
                                    <input type="password" className="form-control mb-2" id="InputPassword1" placeholder="Password" />
                                    {/* <input onChange={handleChange} type="password" className="form-control mb-2" id="InputPassword1" placeholder="Password" /> */}
                                </div>
                                <button type="submit" className="btn btn-all mt-3" data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="3000">Submit</button>
                                {/* {user?.email &&
                                    <Alert severity="success">Logged In successfully!</Alert>
                                } */}
                                <div className="form-footer p-2" data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="3000">
                                    <p data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="3000"> Don't have an account? <a href="/register">Sign Up</a></p>

                                </div>


                            </form>
                        </section>
                    </section>
                </div>
            </div>

        </div>

    );
};

export default Login;
