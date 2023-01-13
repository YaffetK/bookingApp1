import React from "react";
import Navbar from "../components/navbar";
import Premisescss from "../style/premises.css";
import premises1 from "../assets/premises1.png";
import premises2 from "../assets/premises2.png";
import masterRoom from "./masterRoom";
import searchIcon from "../assets/Union.png";
import filterIcon from "../assets/filter.png";

const Premises = () => {
  return (
    <>
    <Navbar />
    <div className="premises">
    <div className="pageTitle">
      <p className="title">Premises</p>
    </div>
      <div className="input">
        <input className="inputField" placeholder="Premises" />
        <img className="searchIcon" src={searchIcon}></img>
          <img className="filterIcon" src={filterIcon}></img>
      </div>
      <div className="filterMenu" id="dropdownContent">
        <button className="filterOption1" />
        <button className="filterOption2" />
        <button className="filterOption3" />
      </div>

      <div className="premises1">
        <img src={premises1}></img>
        <p className="premisesTitle1" href={masterRoom}>
          Changers Kista Master Room
        </p>
      </div>
      <div className="premises2">
        <img src={premises2}></img>
        <p className="premisesTitle2">Changers Kista Conference Room</p>
      </div>
      <div className="premises3">
        <img src={premises1}></img>
        <p className="premisesTitle3">Changers Music Studio</p>
      </div>
      </div>
    </>
  );

  if(inputField.getValue != 0 || inputField.getValue != null){
    searchIcon.setVisible = false;

  }
};

export default Premises;
