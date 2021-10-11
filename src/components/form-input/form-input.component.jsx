import React from "react";
import "./form-input.style.css";

const FormInput = ({ ChangeHandler, label, ...OtherProps }) => (
  <div className="group">
    <label>
      {label ? <label className="form-input-label">{label}</label> : null}
    </label>
    <input className="form-input" onChange={ChangeHandler} {...OtherProps} />
  </div>
);

export default FormInput;
