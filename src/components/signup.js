import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupimg from "../image/2.svg";
const Signup = ({ onLogin }) => {
  const [signupdata, setSignupdata] = useState({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSignupdata({
      ...signupdata,
      [event.target.name]: event.target.value,
    });
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    const apiUrl = "https://emosense-backend.onrender.com/api/accounts/signup/";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupdata),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    navigate("/");
    onLogin(signupdata.username);
  };

  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <span className="signuptext">Signup</span>{" "}
            <form
              id="register-form"
              className="register-form"
              onSubmit={handlesubmit}
            >
              <br />
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account-box"></i>
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  placeholder="Enter your Username "
                  value={signupdata.username}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="off"
                  placeholder="Enter name"
                  value={signupdata.full_name}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={signupdata.email}
                  placeholder="Enter your email "
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-key"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={signupdata.password}
                  placeholder="Enter your password "
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="footer">
                <button className="signupbtn">Signup</button>
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
