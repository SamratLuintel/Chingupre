import "./Input.css";
import React from "react";

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div className="input-wrapper">
    <label className="input-label">{props.label}</label>
    <input
      type="text"
      className="Input"
      {...field}
      {...props}
      autocomplete="new-password"
      value={props.value}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="input-error">{errors[field.name]}</div>
    )}
  </div>
);

export default Input;
