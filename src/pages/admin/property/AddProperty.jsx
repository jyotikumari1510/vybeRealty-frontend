import React from "react";
import { useState } from "react";
import FormFlow from "../formComponents/FormFlow";
import Card from "../../../components/layouts/Card";
import { properties } from "../../../utils/data";

const AddProperty = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  // const toggleDropdown = () => {
  //   setShowDropdown((prev) => !prev);
  // };

  return (
    <div className="propertylist-container">
      <div className="propertylist-header">
        <button
          type="button"
          className="add-property"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          Add Property ▾
        </button>

        {showDropdown && (
          <div className="dropdown-menu">
            <button type="button" onClick={() => setSelectedType("Building")}>
              Building
            </button>
            <button type="button" onClick={() => setSelectedType("Flat")}>
              Flat
            </button>
          </div>
        )}
      </div>
      <div className="propertylist-content">
        {selectedType ? (
          <FormFlow type={selectedType} />
        ) : (
          properties?.map((property, index) => (
            <Card key={index} {...property} />
          ))
        )}
      </div>

      <div className="propertylist-content">
        {properties?.map((property, index) => (
          <Card key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default AddProperty;
