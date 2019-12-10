import React from "react";

const Field = ({
  label,
  name,
  children,
  containerClass = "form-group",
  inputClass = "form-control",
  labelClass = "",
  ...otherProps
}) => (
  <div className={containerClass}>
    <label htmlFor={name} className={labelClass}>
      {label}
    </label>
    {children || (
      <input className={inputClass} id={name} name={name} {...otherProps} />
    )}
  </div>
);

export default Field;
