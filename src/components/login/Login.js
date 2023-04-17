import React, { useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const navigate = useNavigate()
   const [errors, setErrors] = useState({});
  const [FormData, setFormData] = useState({
    
    Email: "",
    Password: "",
   
  });


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

  const validate = (data) => {
    const errors = {};

    // Email Validation
    if (!data.Email) {
      errors.Email = "email is required";
    } else if (!data.Email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errors.Email = "Please enter a valid email address";
    }

    //Password validation
    if (!data.Password) {
      errors.Password = "Password is required";
    // } else if (!data.Password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    //   console.log(data.Password);
    //   errors.Password = "Password length is less than 8 digit";
    }

    return errors;
  }


  const onLoginHandler = async (e) => {
    e.preventDefault();
    
    const errors = validate(FormData);
    if (Object.keys(errors).length === 0) {
      const data = {
        email: FormData.Email,
        password: FormData.Password,
      };
      console.log("🚀 ~ file: Login.js:29 ~ onLoginHandler ~ data:", data);

      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const savedData = await response.json();
      toast.success(savedData.message, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/registration");
    } else {
      setErrors(errors);
      console.log("ysdftjusdgtyfg", FormData);
      return;
    }
  };

  
  
  return (
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
              value={FormData.Email}
              onChange={onChangeHandler}
            />
            {errors.Email && <div style={{ color: "red" }}>{errors.Email}</div>}
          </div>
          <div className="input-box">
            <label> Password </label>
            <input
              type="password"
              name="Password"
              placeholder="Enter your Password"
              value={FormData.Password}
              onChange={onChangeHandler}
            />
            {errors.Password && (
              <div style={{ color: "red" }}>{errors.Password}</div>
            )}
          </div>
          <button type="submit" className="button">
            {" "}
            Login
          </button>
          <ToastContainer />
        </form>
      </div>
      <Link to="/registration"> Registration </Link>
    </div>
  );
};
export default Login;