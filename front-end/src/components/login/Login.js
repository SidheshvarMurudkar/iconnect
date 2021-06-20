import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://127.0.0.1:8080/api/v1/user/login", user)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
    setUser({ email: "", password: "" });
  };

  return (
    <>
      <form className="signup" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            autoComplete="false"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className="input">
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            autoComplete="false"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <button className="signupButton" type="submit">
          Log In
        </button>
        <Link to="/" style={{ textDecoration: "none", margin: "20px 0px" }}>
          Want to create a new account? Sign up
        </Link>
      </form>
    </>
  );
};

export default Login;
