import React, { useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isvalid, setisValid] = useState("true")
  const [emailError, setEmailError] = useState("");
  
  const onEmailChangeHandler = (e) => {
     
       if (!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
         setEmailError("Please enter a valid email address");
       } else {
         setEmailError("");
       }
     setEmail(e.target.value);
   };
   const onPasswordChangeHandler = (e) => {
     setPassword(e.target.value);
   };
  const onLoginHandler = (e) => { 
    e.preventDefault();
  };

  
  
  return (
    <>
      <div className="container">
        <div className="title"> Login</div>
        <div className="content">
          <form onSubmit={onLoginHandler}>
            <div className="input-box">
              <label> Email </label>
              <input
                
                type="email"
                name="Email"
                placeholder="Enter your email"
                value={Email}
                onChange={onEmailChangeHandler}
              />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </div>
            <div className="input-box">
              <label> Password </label>
              <input
                type="password"
                name="Password"
                placeholder="Enter your Password"
                value={Password}
                onChange={onPasswordChangeHandler}
              />
            </div>
            <button type="submit" className="button">
              {" "}
              Login
            </button>
          </form>
        </div>
        <Link to="/registration"> Registration </Link>
      </div>
    </>
  );
};
export default Login;