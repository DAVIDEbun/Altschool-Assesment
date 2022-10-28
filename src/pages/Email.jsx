import React from "react";
import Mail from "../assets/Email.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";

function Email() {
  return (
    <div>
      <h2> Email & Socials </h2>

      <div className="maildiv">
        <img src={Mail} alt="Mail" />
        <p>findersglobal@gmail.com</p>
      </div>

      <div className="maildiv">
        <img src={Twitter} alt="Twitter" />
        <img src={Instagram} alt="Instagram" />
        <p>@findersglobal</p>
      </div>

      <div className="maildiv">
        <img src={Youtube} alt="Youtube" />
        <p>FindersGlobal</p>
      </div>
    </div>
  );
}

export default Email;
