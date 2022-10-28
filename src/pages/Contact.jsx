import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  return (
    <div>
      <div className="header">
        <ul>
          <li>
            <Link to="/contact/address">Address</Link>
          </li>
          <li>
            <Link to="/contact/email">Email & Socials</Link>
          </li>
        </ul>
      </div>
      {location.pathname === "/contact" ? (
        <div>
          <h2>National Office Contact</h2>
          <h3>United States +18332403627</h3>
          <h3>United Kingdom +447488810936</h3>
          <h3>France +33757131565</h3>
          <h3>Australia +61485872892</h3>
          <h3>Germany +4915561556157</h3>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Contact;
