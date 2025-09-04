import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      {/* Image with overlay text */}
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <h3 className="card-title">{title}</h3>
      </div>

      {/* Description below */}
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
