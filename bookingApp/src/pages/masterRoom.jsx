import React from "react";
import Navbar from "../components/navbar";
import premises from "../assets/premises1.png";
import back from "../assets/backbutton.png";
import locationIcon from "../assets/locationIcon.png"
import masterRoom from "../style/masterRoom.css"
import Schedule from "../assets/Schedule.png"
import Checkbox from "../assets/checkbox.png"

const MasterRoom = () => {
  return (
    <>
    <Navbar />
      <div className="masterRoom">
        <div className="pageTitlee">
          <p className="title">Premises</p>
          <p className="subTitlee">Changers Kista, Master Room</p>
        </div>
        <div className="backbutton">
          <img src={back}></img>
        </div>

        <div className="pageImgg">
          <img src={premises}></img>
        </div>

        <a className="pageDesc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt amco laboris nisi ut
            aliquip ex
          </p>
        </a>

        <div className="location">
        <hr className="borderr1"></hr>
        <a className="locationIcon">
          <img src={locationIcon}></img>
        </a>
        <div className="locationDesc">
        <p className="locationName">Changers Kista</p>
        <p className="locationAdress">Arne Beurling Torg 9C</p>
        </div>
        <hr className="borderr2"></hr>
        </div>

        <div className="schedulee">
            <img src={Schedule}></img>
        </div>

        <div className="terms">
            <img className="checkboxx" src={Checkbox} alt="" />
            <p className="termsTxtt">I agree to Changers hub Terms and Conditions</p>
        </div>

        <div className="reserv">
            <button className="reservationBtnn">
                Make Reservation
            </button>
        </div>
      </div>
    </>
  );
};

export default MasterRoom;
