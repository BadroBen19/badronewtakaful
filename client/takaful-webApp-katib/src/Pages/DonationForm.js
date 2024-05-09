import React, { useState } from "react";
import donation from "./handp.png";
import { FaDollarSign } from "react-icons/fa6";
import "./DonationForm.css";

const DonationForm = (props) => {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailValidation = (event) => {
    setIsEmailValid(event.target.checkValidity());
  };

  return (
    <div className="root">
      <div className="container">
        <div className="photo">
          <img src={donation} alt="" />
        </div>
        <div className="donation-form">
          <div className="title">{props.title}</div>
          <div className="recipient-profile">
            <img src={donation} alt="Recipient Profile" />
            <text>{props.UserName}</text>
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input
            type="email"
            placeholder="Email"
            onBlur={handleEmailValidation}
          />
          <input type="password" placeholder="Password" />
          <input type="id" placeholder="Card number" required />
          <input type="number" placeholder="the amount" required />
          <input className="bottom" type="submit" value="submit" />
        </div>
      </div>
    </div>
  );
};

export default DonationForm;