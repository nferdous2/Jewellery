import React, { useState } from "react";
import { Alert, Card } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import "./Login.css";
import google from '../../../../Images/Google.png'

const Login = () => {
  const { user, loginHandle,signInWithGoogle } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const handleSubmit = (e) => {
    loginHandle(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  return (
    <div className="login-bg p-2 " >
      <Card className="login-page mb-5 mt-4 col-lg-4 col-md-4 mb-4">
        <Card.Body>
          <Card.Text>
            <h2
              className="text-center mb-2"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              Please Log in
            </h2>
            <form onSubmit={handleSubmit} className="form-container">
              <label
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="3000"
              >
                Email Address
              </label>
              <input
                onChange={handleChange}
                className="form-control mb-4 p-2"
                type="email"
                name="email"
                placeholder="Enter your Email"
              />

              <label
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="3000"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                className="form-control mb-4 p-2"
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
              <input
                type="submit"
                value="Login"
                className="btn btn-allP mt-3 w-100 fw-bold text-white"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="3000"
              />
              {user?.email && (
                <Alert severity="success">Logged In successfully!</Alert>
              )}
              <div
                className="form-footer p-2"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="3000"
              >
              <h5 style={{ color: "#a8741a" }}>OR</h5>
              <Card.Title>
                <h5 className='text-center text-decoration-none font-weight-bold mb-2' style={{ color: 'white ' }}>SignUp With Google</h5>
              </Card.Title>
              <Card.Text className=" d-flex align-items-center">
                <img onClick={signInWithGoogle} src={google} alt="" className="w-25 p-2 m-auto" />
              </Card.Text>
                <p> Don't have an account?</p>
                <Link to="/register" className="text-decoration-none">
                  <h5 className="text-white">Please, Register</h5>
                </Link>
              </div>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
