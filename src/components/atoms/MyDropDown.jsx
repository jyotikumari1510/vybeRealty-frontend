import React from "react";

const MyDropDown = ({ options = [], className = "", ...props }) => {
  return (
    <select className={className} {...props}>
      <option value="">Select</option>
      {options.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default MyDropDown;
