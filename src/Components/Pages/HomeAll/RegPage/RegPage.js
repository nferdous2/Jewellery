import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../../../../hooks/useAuth';
import './RegPage.css';
const RegPage = () => {
    // const [loginData, setLoginData] = useState({});
    // const { handleRegister } = useAuth();
    // const location = useLocation();
    // const history = useNavigate();
    // const handleSubmit = e => {
    //     handleRegister(loginData.email, loginData.password, location, history);
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
        <div className='reg-page'>
            <div className='reg-bg col-12 col-sm-12 col-md-12'>
                <div>
                    <section className="row justify-content-center">
                        <section className="col-12 col-sm-6 col-md-4 p-3 m-5">
                            {/* <form onSubmit={handleSubmit} className="form-container"> */}
                            <form className="form-container">
                                <div className="form-group">
                                    <h4 className="text-center font-weight-bold"> Registration </h4>
                                    <label>First Name</label>
                                    <input type="text" className="form-control mb-2" id="InputText" placeholder="Enter name" />
                                    {/* <input onChange={handleChange} type="text" className="form-control mb-2" id="InputText" placeholder="Enter name" /> */}
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control mb-2" id="InputText" placeholder="Enter name" />
                                    {/* <input onChange={handleChange} type="text" className="form-control mb-2" id="InputText" placeholder="Enter name" /> */}
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control mb-2" id="InputEmail1" placeholder="Enter email" />
                                    {/* <input onChange={handleChange} type="email" className="form-control mb-2" id="InputEmail1" placeholder="Enter email" /> */}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control mb-2" id="InputPassword1" placeholder="Password" />
                                    {/* <input onChange={handleChange} type="password" className="form-control mb-2" id="InputPassword1" placeholder="Password" /> */}
                                </div>
                                <input
                                    className="btn btn-allP mt-3"
                                    type="submit"
                                    value="Register"
                                />
                            </form>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RegPage;
