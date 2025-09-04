import React from "react";

const MyTextarea = ({
  placeholder = "enter value",
  rows = 4,
  cols = 50,
  className = "",
  ...props
}) => (
  <textarea
    placeholder={placeholder}
    rows={rows}
    cols={cols}
    className={className}
    {...props}
  />
);
export default MyTextarea;
