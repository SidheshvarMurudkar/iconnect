import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8080/api/v1/user", user)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <div className="input">
        <label htmlFor="">
          <b>Name</b>
        </label>
        <input
          type="text"
          name="name"
          autoComplete="false"
          onChange={handleChange}
          value={user.name}
        />
      </div>
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
        Sign Up
      </button>
      <Link to="/login" style={{ textDecoration: "none", margin: "20px 0px" }}>
        Already got an account? Log in.
      </Link>
    </form>
  );
};

export default SignUp;
