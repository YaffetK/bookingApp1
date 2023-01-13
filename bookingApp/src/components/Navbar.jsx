import React from "react";
import companyLogo from "../assets/changershub.png";
import hamburgarmeny from "../assets/hamburgarmeny.png";
import navbarcss from '../style/navbar.css'

const Navbar = () => {
  return (
    <nav className="bg-red-500">
    <hr className="border"></hr>
    <a href="/">
     <img src={companyLogo} className="logo" alt="company logo" />
     </a>
     <button className="hamburgarmeny">
        <img src={hamburgarmeny} alt="menu"/>
     </button>
     </nav>
  );
};

export default Navbar;
