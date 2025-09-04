import ThemeToggler from "../../theme/ThemeToggler";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import ColorPicker from "../../theme/ColorPicker";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <NavLink className="logo" to="/">
        VYBE <span>Realty</span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
      </button>

      <div className={`nav-actions ${menuOpen ? "open" : ""}`}>
        <nav className="nav-links">
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="down-arrow">
              <NavLink
                to="/properties"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Properties
              </NavLink>
              <MdKeyboardArrowDown size={22} />
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ThemeToggler />
        <ColorPicker />
      </div>
    </div>
  );
};

export default Navbar;
