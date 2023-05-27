import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };

  const [data,setData]=useState(initialState)
  const [isSignUp, setIsSignUp] = useState(true);
const handleChange=(e)=>{
  e.preventDefault();
  setData({...data,[e.target.name]:e.target.value})
}


  return (
    <div className="Auth col-lg-2 col-md-4 col-sm-6 col-xs-12">
      <div className="a-left">
        <img
          className="icon-image"
          src="https://cdn.dribbble.com/userupload/3503633/file/original-8e771406b65840e9026a01ef493ef30c.png?compress=1&resize=450x338&vertical=top"
          alt=""
        />
        <div className="Webname">
          <h1>Sociogram</h1>
          <h6>Connect, Share, Discover: Our Social Media Revolution.</h6>
        </div>
      </div>

      <div className="a-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? "Sign Up" : "Login"}</h3>

          {isSignUp && (
            <div>
              <input
              required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange = {handleChange}
              />
              <input
              required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange = {handleChange}
              />
            </div>
          )}

          <div>
            <input
            required
              type="text"
              className="infoInput"
              placeholder="username"
              name="username"
              onChange = {handleChange}
            />
          </div>
          <div>
            <input
            required
              type="password"
              className="infoInput"
              name="password"
              placeholder="password"
              onChange = {handleChange}
            />
            {isSignUp && (
              <input
              required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm password"
                onChange = {handleChange}
              />
            )}
          </div>

          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Dont have an account sign up"}
            </span>
          </div>
                <Link to = {'/home'} style={{textDecoration:"none" }}>
          <button className="button info-button" type="submit" >
            {isSignUp ? "SignUp" : "Log In"}
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Auth;
