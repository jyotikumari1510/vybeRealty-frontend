import React, { useState } from "react";
import Details from "./Details";
import Description from "./Description";
import Features from "./Features";

const FormFlow = ({ type }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleFeaturessSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const handleDetailsSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleDescriptionSubmit = (data) => {
    const finalData = { ...formData, ...data, propertyType: type };
    console.log("Final Submitted Data:", finalData);
    alert("Property added successfully!");
    setStep(1);
    setFormData({});
  };

  return (
    <div>
      {step === 1 && <Details onSubmitForm={handleDetailsSubmit} />}
      {step === 2 && <Description onSubmitForm={handleDescriptionSubmit} />}
      {step === 3 && <Features onSubmitForm={handleFeaturessSubmit} />}
    </div>
  );
};

export default FormFlow;
