import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from '../../store/session'
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogin = () => (
    <button
      className="demo-btn"
      onClick={(e) => {
        setCredential("demo@user.io");
        setPassword("password");
      }}
    >
      Try Demo
    </button>
  );

  return (
    <div className="login_container">
      <div className="left_container">
        <div className="left_container_logo">
          <p>eventframe</p>
          <h1>Log In</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Email address
            <div className="form_input">
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder="Email sddress"
                required
              />
            </div>
          </label>
          <label>
            Password
            <div className="form_input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </label>
          <button type="submit" className="login-btn">
            Log in
          </button>
          {demoLogin()}
        </form>
      </div>
      <div className="right_container">
        <img
          alt="right_banner"
          className="right_img"
          src="https://cdn.evbstatic.com/s3-build/perm_001/530d34/django/images/login/lateral-image-2.jpg"
        ></img>
      </div>
    </div>
  );
}

export default LoginFormPage;
