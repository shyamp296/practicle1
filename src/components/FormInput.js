import React from "react";
import './FormInput.css'

const FormInput = (props) => {
  return (
    <>
      
        <form>
          <div className="input-box">
            <label> {props.name} </label>
            <input
              type={props.type}
              name={props.name}
              placeholder={props.placeholder}
            ></input>
          </div>
        </form>
      
    </>
  );
};

export default FormInput;
