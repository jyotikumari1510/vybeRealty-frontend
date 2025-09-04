import React from "react";

const MyButton = ({
  type = "button",
  name = "button",
  className = "",
  ...props
}) => {
  return (
    <button className={className} {...props} type={type}>
      {name}
    </button>
  );
};

export default MyButton;
