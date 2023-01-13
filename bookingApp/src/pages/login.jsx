import React from "react";
import CompanyLogo from "../assets/companyLogo.png";
import BankIdIcon from "../assets/bankidIcon.png";
import loginCss from "../style/login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="companyLogo">
        <img src={CompanyLogo}></img>
      </div>

      <div className="bankId">
        <button className="bankIdBtn">
          LOG IN
          <img className="bankIdImg" src={BankIdIcon}></img>
        </button>
      </div>
      <div className="moreOptions">
        <button className="moreOptionsBtn">MORE OPTIONS</button>
      </div>
    </div>
  );
};

export default Login;
