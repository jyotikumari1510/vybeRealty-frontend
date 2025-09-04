import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left side */}
        <div className="footer__left">
          <div className="footer__inner">
            <Link className="logo" to="/">
              VYBE <span>Realty</span>
            </Link>
            <h4 className="footer__heading">
              Vybe Realty | Redefining Luxury Real Estate
            </h4>
            <p className="footer__desc">
              As a boutique brokerage, Vybe Realty delivers a seamless,
              personalized journey through Dubai’s finest residential and
              commercial properties. From luxury homes to strategic investments,
              we offer expert guidance with precision, care, and discretion —
              ensuring every transaction is effortless and rewarding.
            </p>
            <p className="footer__desc">
              Your vision. Our expertise. Welcome to Vybe Realty.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer__links">
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Properties</h4>
            <ul>
              <li>
                <a href="#">Off-Plan Projects</a>
              </li>
              <li>
                <a href="#">Ready Properties</a>
              </li>
              <li>
                <a href="#">Commercial Properties</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Off-Plan Projects</a>
              </li>
              <li>
                <a href="#">Ready Properties</a>
              </li>
              <li>
                <a href="#">Commercial Properties</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>
          Vybe Realty Real Estate Broker LLC is a company registered in Dubai,
          United Arab Emirates, with License Number 1124305 and registered at
          the Real Estate Regulatory Agency under the number 33088. PO Box
          450524.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
