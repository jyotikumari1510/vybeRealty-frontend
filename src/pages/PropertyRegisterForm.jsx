import React from "react";
import MyInputs from "../components/atoms/MyInputs";
import MyDropDown from "../components/atoms/MyDropDown";
import MyButton from "../components/atoms/MyButton";

export const PropertyRegisterForm = () => {
  return (
    <div className="contact-form-cont">
      <h1 className="sub-heading">YOUR NEXT PROPERTY MOVE STARTS HERE</h1>
      <form className="details-form">
        <h2 className="form-sub-heading">PERSONAL INFORMATION</h2>
        <div className="form-grid">
          <div>
            <MyDropDown
              options={[
                { value: "property owner", label: "Property Owner" },
                { value: "agent", label: "Agent" },
              ]}
              className="select"
            />
          </div>

          <div>
            <MyInputs type="text" placeholder="First Name" className="input" />
          </div>
          <div>
            <MyInputs type="text" placeholder="Last Name" className="input" />
          </div>
        </div>
        <div className="form-grid2">
          <div>
            <MyInputs
              type="email"
              placeholder="Email Address"
              className="input"
            />
          </div>

          <div>
            <MyInputs
              type="number"
              placeholder="Phone Number "
              className="input"
            />
          </div>
        </div>
        <h2 className="form-sub-heading">PROPERTY INFORMATION</h2>
        <div className="form-grid">
          <div>
            <MyDropDown
              options={[
                { value: "property owner", label: "Property Owner" },
                { value: "agent", label: "Agent" },
              ]}
              className="select"
            />
          </div>

          <div>
            <MyInputs
              type="number"
              placeholder="Your Budget"
              className="input"
            />
          </div>
          <div>
            <MyInputs
              type="number"
              placeholder="No. of Bedrooms"
              className="input"
            />
          </div>
        </div>

        <div className="checkbox-div">
          {/* <label className="form-sub-heading">Privacy Policy</label> */}
          <MyInputs type="checkbox" className="checkbox-input" />I consent to
          having this website store my submitted information.
        </div>

        <div>
          <MyButton type="submit" name="Submit" className="formButton" />
        </div>
      </form>
    </div>
  );
};
