import React from "react";
import "./InputField.css";

const InputField = ({ type = "text", value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="task-input"
  />
);

export default InputField;
