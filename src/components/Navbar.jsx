import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo" src={Logo} alt="Home" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
