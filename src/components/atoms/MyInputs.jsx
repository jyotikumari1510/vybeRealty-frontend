import React from "react";

const MyInputs = ({
  type = "text",
  className = "",
  placeholder = "Enter Input",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};
export default MyInputs;
