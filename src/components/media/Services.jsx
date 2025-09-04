import React from "react";
import Property from "../../pages/Property";
import ServiceCard from "../layouts/ServiceCard";
import { FeaturedProperty } from "./FeaturedProperty";

const services = [
  {
    image: "/property2.jpg",
    title: "Off-Plan Developments",
    description:
      "Exclusive pre-market access to Dubai’s latest emerging projects.",
  },
  {
    image: "/property3.jpg",
    title: "Luxury Residential Properties",
    description: "Handpicked villas, penthouses, and branded residences.",
  },
  {
    image: "/property4.jpg",
    title: "Portfolio Advisory Services",
    description:
      "Structured investment solutions for high-net-worth individuals.",
  },
  {
    image: "/property5.jpg",
    title: "Commercial Real Estate",
    description: "Premium office spaces, retail, and land investments.",
  },
];

const Services = () => {
  return (
    <>
      <div className="service-container" >
        <h1 className="sub-heading">
          EXCEPTIONAL REAL ESTATE SERVICES, TAILORED TO YOU
        </h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="services-portfolio-bg">
          <div className="portfolio">
            <img src="/property5.jpg" alt="propety-img" />
            <div className="portfolio-text">
              <h2>
                Curated Properties for High-Growth Portfolios <br />
                and Signature Lifestyles
              </h2>
              <p>
                Whether you’re expanding your business footprint, securing a
                high-yield asset, or acquiring a signature home, Neo Realty
                provides end-to-end expertise across Dubai’s most lucrative real
                estate categories.
              </p>
              <div className="portfolio-links">
                <a href="/about">➔ About Company</a>
                <a href="/contact">➔ Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProperty />
    </>
  );
};

export default Services;
