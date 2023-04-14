import React, { useState } from "react";
import "./Registration.css";
import CascadingDropdown from "../Dropdown"

const Registration = () => {
  const [Firstname, setFirstname] = useState("");
  const [LastName, setLastname] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [DOB ,setDOB] = useState("");
  const [gender, setGender] = useState("Male");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Address, setAddress] = useState("");
  const [firstNameerror, setfirstNameerror] = useState("");
  const [LastNameerror, setLastNameerror] = useState("");
  const [userNameerror, setuserNameerror] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  

  const onFirstnameChangeHandler = (e) => {
    if (e.target.value.trim().length === 0 ){
         setfirstNameerror("Please enter First Name");
       } else {
         setfirstNameerror("");
       }
    setFirstname(e.target.value);
  };
  const onLastnameChangeHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setLastNameerror("Please enter Last Name");
    } else {
      setLastNameerror("");
    }
    setLastname(e.target.value);
  };
  const onUsernameChangeHandler = (e) => {
 if (e.target.value.trim().length === 0) {
   setuserNameerror("Please enter Username");
 } else {
   setuserNameerror("");
 }

    setUsername(e.target.value);
  };
    const onPhoneNoChangeHandler = (e) => {
      setPhoneNo(e.target.value);
    };
  ;
  const onEmailChangeHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setEmailError("Please enter email");
    }
    else if (!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  };
  const onPasswordChangeHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setPasswordError("please enter a Password")
    } else if (e.target.value.trim().length < 8) { 
      setPasswordError("Password must be at least 8 characters")
    } else 
    

    setPassword(e.target.value);
  };
  const onGenderChangeHandler = (event) => {
    setGender(event.target.value);
  };
   const onDOBChangeHandler = (event) => {
     setDOB(event.target.value);
   };
   const onAddressChangeHandler = (event) => {
     setAddress(event.target.value);
   };
  

 
  const registerData = {
    Firstname: Firstname,
    LastName: LastName,
    Username: Username,
    Email: Email,
    Password: Password,
    DOB: new Date(DOB),
    Gender: gender,
    PhoneNo: PhoneNo,
    Address : Address
  };
  console.log(
    "🚀 ~ file: Registration.js:27 ~ Registration ~ registerData:",
    registerData
  );

  const onSubmitHandler = () => {
    
  }

  return (
    <div className="container">
      <div className="title"> Registration</div>
      <div className="content">
        <form onSubmit={onSubmitHandler}>
          <div className="input-box">
            <label> Firstname </label>
            <input
              type="text"
              value={Firstname}
              onChange={onFirstnameChangeHandler}
              name="Firstname"
              placeholder="firstName"
            />
            {firstNameerror && (
              <div style={{ color: "red" }}>{firstNameerror}</div>
            )}
          </div>
          <div className="input-box">
            <label>LastName </label>
            <input
              type="text"
              value={LastName}
              onChange={onLastnameChangeHandler}
              name="Lastname"
              placeholder="LastName"
            />
            {LastNameerror && (
              <div style={{ color: "red" }}>{LastNameerror}</div>
            )}
          </div>
          <div className="input-box">
            <label> Username </label>
            <input
              type="text"
              value={Username}
              onChange={onUsernameChangeHandler}
              name="Username"
              placeholder="UserName"
            />
            {userNameerror && (
              <div style={{ color: "red" }}>{userNameerror}</div>
            )}
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              value={Email}
              onChange={onEmailChangeHandler}
              name="Email"
              placeholder="Enter your email"
            />
            {emailError && <div style={{ color: "red" }}>{emailError}</div>}
          </div>
          <div className="input-box">
            <label> Phone Number </label>
            <input
              type="number"
              value={PhoneNo}
              onChange={onPhoneNoChangeHandler}
              name="Phone Number"
              placeholder="Phone Number"
            />
          </div>
          <div className="input-box">
            <label>Password </label>
            <input
              type="password"
              name="Password"
              value={Password}
              onChange={onPasswordChangeHandler}
              placeholder="Enter your Password"
            />
          </div>
          <div className="input-box">
            <label> Confirm Password </label>
            <input
              type="password"
              name="Confirm Password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="input-box">
            <label> DOB </label>
            <input
              type="date"
              value={DOB}
              onChange={onDOBChangeHandler}
              name="DOB"
            />
          </div>
          <div className="input-box" onChange={onGenderChangeHandler}>
            <label> Gender : </label>
            <input
              type="radio"
              value="Male"
              name="gender"
              checked={gender === "Male"}
            />
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              checked={gender === "Female"}
            />
            Female
          </div>
          <div className="input-box">
            <CascadingDropdown />
          </div>
          <div className="input-box">
            <label>Address : </label>
            <textarea
              onChange={onAddressChangeHandler}
              value={Address}
              name="Address"
            ></textarea>
          </div>
          <button type="submit" className="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
