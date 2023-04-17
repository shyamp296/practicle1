import React, { useState } from "react";
import "./Registration.css";
import CascadingDropdown from "../Dropdown";
import Multiselect from "multiselect-react-dropdown";

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
  const options = [
    { label: "React Js", value: "React Js" },
    { label: "Node Js", value: "Node Js" },
    { label: "JavaScript", value: "JavaScript" },
  ];
  const [selected, setSelected] = useState([]);
  console.log(
    "🚀 ~ file: Registration.js:26 ~ Registration ~ selected:",
    selected.lable
  );
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
    country: "",
    state: "",
    city: "",
    Address: "",
    qualification :"",
    Programmingskills: selected,
  });
  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();

    const errors = validate(FormData);
    console.log(
      "🚀 ~ file: Registration.js:52 ~ onSubmitHandler ~ errors:",
      errors
    );

    if (Object.keys(errors).length === 0) {
      console.log("abc", FormData);

      let Data = {
        firstName: FormData.Firstname,
        lastName: FormData.LastName,
        userName: FormData.Username,
        phone_no: FormData.PhoneNo,
        email: FormData.Email,
        password: FormData.Password,
        confirm_password: FormData.ConfirmPassword,
        dob: FormData.DOB,
        gender: FormData.gender,
        country: FormData.country,
        state: FormData.state,
        city: FormData.city,
        address: FormData.Address,
        qualification: FormData.Firstname,
        skills: FormData.Programmingskills,
      };
      console.log(
        "🚀 ~ file: Signup.js:127 ~ signupSuccess ~ inputData:",
        Data
      );
      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Data),
      });
      return response.json();
    } else {
      setErrors(errors)
      console.log("ysdftjusdgtyfg", FormData);
      return;
    }
  };

  const validate = (data) => {
    const errors = {};

    // Firstname Validation
    if (!data.Firstname) {
      errors.Firstname = "Firstname is required";
    } //  else {
    //   errors.Firstname = "";
    // }

    // LastName Validation
    if (!data.LastName) {
      errors.LastName = "LastName is required";
    } //  else {
    //   errors.LastName = "";
    // }

    // Username Validation
    if (!data.Username) {
      errors.Username = "Username is required";
    } //  else {
    //   errors.Username = "";
    // }

    // Email Validation
    if (!data.Email) {
      errors.Email = "email is required";
    } else if (!data.Email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errors.Email = "Please enter a valid email address";
    }

    //Password validation
    if (!data.Password) {
      errors.Password = "Password is required";
    } else if (!data.Password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      console.log(data.Password);
      errors.Password = "Password length is less than 8 digit";
    } //  else {
    //   errors.Password = "";
    // }

    //Confirm Password Validation
    if (!data.ConfirmPassword) {
      errors.ConfirmPassword = "Confirm password is required";
    } else if (
      !data.ConfirmPassword.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    ) {
      errors.ConfirmPassword = "ConfirmPassword length is less than 8 digit";
    } else if (data.Password !== data.ConfirmPassword) {
      errors.ConfirmPassword = "Passwords do not match";
    }
    // else {
    //   errors.ConfirmPassword = "";
    // }
    if (!data.PhoneNo) {
      errors.PhoneNo = "PhoneNo is required";
    } else if (!data.PhoneNo.match("[0-9]{10}")) {
      errors.PhoneNo = "Please provide valid phone number";
    }

    //gender validation
    if (!data.gender) {
      errors.gender = "Gender is required";
    }

    //DOB validation
    if (!data.DOB) {
      errors.DOB = "Please select Your Birth Date";
    }

    if (!data.country) {
      errors.country = "Country is required";
    }

    if (!data.state) {
      errors.state = "State is required";
    }

    if (!data.city) {
      errors.city = "City is required";
    }


    if (!data.Address) {
      errors.Address = "Address is required";
    }

    return errors;
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    console.log(
      "🚀 ~ file: Dropdown.js:36 ~ handleCountryChange ~ selectedCountry:",
      selectedCountry
    );
    setFormData(() => ({
      ...FormData,
      country: selectedCountry,
      state: "",
      city: "",
    }));

    setErrors({
      ...errors,
      [e.target.name]: null,
    });
      console.log("🚀 ~ file: Registration.js:211 ~ handleCountryChange ~ errors:", errors)
    
    const countryStates =
      selectedCountry === "India"
        ? ["Gujrat", "Madhya Pradesh", "Uttar Pradesh"]
        : ["Ontario", "Quebec", "British Columbia"];
    setStates(countryStates);
    setCities([]);
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    console.log(
      "🚀 ~ file: Dropdown.js:51 ~ handleStateChange ~ selectedState:",
      selectedState
    );
    setFormData((prevData) => ({
      ...prevData,
      state: selectedState,
      city: "",
    }));

    setErrors({
      ...errors,
      [e.target.name]: null,
    });
    const stateCities =
      selectedState === "Gujrat"
        ? ["Ahmedabad", "Amreli", "Rajkot", "Surat", "Bharuch", "Bhavnagar"]
        : selectedState === "Madhya Pradesh"
        ? [
            "Alirajpur",
            "Anuppur",
            "Ashok Nagar",
            "Balaghat",
            "Barwani",
            "Betul",
          ]
        : selectedState === "Uttar Pradesh"
        ? [
            "Agra",
            "Allahabad",
            "Aligarh",
            "Ambedkar Nagar",
            "Auraiya",
            "Azamgarh",
          ]
        : selectedState === "Ontario"
        ? ["Toronto", "Ottawa", "Mississauga"]
        : selectedState === "Quebec"
        ? ["Montreal", "Quebec City", "Laval"]
        : selectedState === "British Columbia"
        ? ["Vancouver", "Victoria", "Surrey"]
        : [];
    setCities(stateCities);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    console.log(
      "🚀 ~ file: Dropdown.js:87 ~ handleCityChange ~ selectedCity:",
      selectedCity
    );
    setFormData((prevData) => ({
      ...prevData,
      city: selectedCity,
    }));

    setErrors({
      ...errors,
      [e.target.name]: null,
    });
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
            {errors.PhoneNo && (
              <div style={{ color: "red" }}>{errors.PhoneNo}</div>
            )}
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
            <label> Date Of Birth </label>
            <input
              type="date"
              value={FormData.DOB}
              onChange={onChangeHandler}
              name="DOB"
            />
            {errors.DOB && <div style={{ color: "red" }}>{errors.DOB}</div>}
          </div>
          <div className="input-box">
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
            {errors.gender && (
              <div style={{ color: "red" }}>{errors.gender}</div>
            )}
          </div>

          <div className="Dropdown">
            <label>
              Country:
              <select value={FormData.country} onChange={handleCountryChange}>
                <option value="">--Please choose a country--</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
              </select>
              {errors.country && (
                <div style={{ color: "red" }}>{errors.country}</div>
              )}
            </label>

            <br />
            <label>
              State:
              <select
                value={FormData.state}
                onChange={handleStateChange}
                disabled={!FormData.country}
              >
                <option value="">--Please choose a state--</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              City:
              <select
                value={FormData.city}
                onChange={handleCityChange}
                disabled={!FormData.state}
              >
                <option value="">--Please choose a city--</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="input-box">
            <label>Address : </label>
            <textarea
              onChange={onChangeHandler}
              value={FormData.Address}
              name="Address"
            ></textarea>
            {errors.Address && (
              <div style={{ color: "red" }}>{errors.Address}</div>
            )}
          </div>

          <div className="checkBox">
            <label>Programming Skills : </label>
            {JSON.stringify(selected.label)}

            <Multiselect
              options={options}
              onChange={(event) => {
                setSelected([...options, event.target.value]);
              }}
              displayValue="label"
            />
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
