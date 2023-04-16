import React, { useState } from "react";
import "./Registration.css";
import CascadingDropdown from "../Dropdown";  

const Registration = () => {
  // const [Firstname, setFirstname] = useState("");
  // const [LastName, setLastname] = useState("");
  // const [Username, setUsername] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  // const [DOB ,setDOB] = useState("");
  // const [gender, setGender] = useState("Male");
  // const [PhoneNo, setPhoneNo] = useState("");
  // const [Address, setAddress] = useState("");
  // const [firstNameerror, setfirstNameerror] = useState("");
  // const [LastNameerror, setLastNameerror] = useState("");
  // const [userNameerror, setuserNameerror] = useState("");
  // const [emailError, setEmailError] = useState("");

  const [FormData, setFormData] = useState({
    Firstname: "",
    LastName: "",
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    DOB: "",
    gender: "",
    PhoneNo: "",
    Address: "",
  });
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
   
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
    

    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const errors = validate(FormData);

    if(!errors){
      console.log("dsfjgsdjhsgd");
    }else {
    setErrors(errors);
    return
  } 
};

  const validate = (data) => {
    const errors = {};

    // Firstname Validation
    if (!data.Firstname) {
      errors.Firstname = "Firstname is required";
    } else {
      errors.Firstname = "";
    }

    // LastName Validation
    if (!data.LastName) {
      errors.LastName = "LastName is required";
    } else {
      errors.LastName = "";
    }

    // Username Validation
    if (!data.Username) {
      errors.Username = "Username is required";
    } else {
      errors.Username = "";
    }

    // Email Validation
    if (!data.Email) {
      errors.Email = "email is required";
    }
    else if (!data.Email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errors.Email = "Please enter a valid email address";
    } 

    //Password validation
    if (!data.Password) {
      errors.Password = "Password is required";
    } else if (!data.Password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      console.log(data.Password)
      errors.Password = "Password length is less than 8 digit";
    } else {
      errors.Password = "";
    }

    //Confirm Password Validation
    if (!data.ConfirmPassword) {
      errors.ConfirmPassword = "Confirm password is required";
    } else if (!data.ConfirmPassword.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      errors.ConfirmPassword = "ConfirmPassword length is less than 8 digit";
    } else if (data.Password !== data.ConfirmPassword) {
      errors.ConfirmPassword = "Passwords do not match";
    } else {
      errors.ConfirmPassword = "";
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="title"> Registration</div>
      <div className="content">
        <form onSubmit={onSubmitHandler}>
          <div className="input-box">
            <label> Firstname </label>
            <input
              type="text"
              value={FormData.Firstname}
              onChange={onChangeHandler}
              name="Firstname"
              placeholder="firstName"
            />
            {errors.Firstname && (
              <div style={{ color: "red" }}>{errors.Firstname}</div>
            )}
          </div>
          <div className="input-box">
            <label>LastName </label>
            <input
              type="text"
              value={FormData.LastName}
              onChange={onChangeHandler}
              name="LastName"
              placeholder="LastName"
            />
            {errors.LastName && (
              <div style={{ color: "red" }}>{errors.LastName}</div>
            )}
          </div>
          <div className="input-box">
            <label> Username </label>
            <input
              type="text"
              value={FormData.Username}
              onChange={onChangeHandler}
              name="Username"
              placeholder="UserName"
            />
            {errors.Username && (
              <div style={{ color: "red" }}>{errors.Username}</div>
            )}
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              value={FormData.Email}
              onChange={onChangeHandler}
              name="Email"
              placeholder="Enter your email"
            />
            {errors.Email && <div style={{ color: "red" }}>{errors.Email}</div>}
          </div>
          <div className="input-box">
            <label> Phone Number </label>
            <input
              type="number"
              value={FormData.PhoneNo}
              onChange={onChangeHandler}
              name="PhoneNo"
              placeholder="Phone Number"
            />
          </div>
          <div className="input-box">
            <label>Password </label>
            <input
              type="password"
              name="Password"
              value={FormData.Password}
              onChange={onChangeHandler}
              placeholder="Enter your Password"
            />
             {errors.Password && (
              <div style={{ color: "red" }}>{errors.Password}</div>
            )}
          </div>
          <div className="input-box">
            <label> Confirm Password </label>
            <input
              type="password"
              name="ConfirmPassword"
              value={FormData.ConfirmPassword}
              onChange={onChangeHandler}
              placeholder="Confirm your password"
            />
             {errors.ConfirmPassword && (
              <div style={{ color: "red" }}>{errors.ConfirmPassword}</div>
            )}
          </div>
          <div className="input-box">
            <label> DOB </label>
            <input
              type="date"
              value={FormData.DOB}
              onChange={onChangeHandler}
              name="DOB"
            />
          </div>
          <div className="input-box" >
            <label> Gender : </label>
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={onChangeHandler}
              checked={FormData.gender === "Male"}
            />
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={onChangeHandler}
              checked={FormData.gender === "Female"}
            />
            Female
          </div>
          <div className="input-box">
          </div>
          <div className="input-box">
            <label>Address : </label>
            <textarea
              onChange={onChangeHandler}
              value={FormData.Address}
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
