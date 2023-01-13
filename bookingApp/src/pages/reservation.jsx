import React from "react";
import reservationCss from "../style/reservation.css";
import Navbar from "../components/navbar";
import kryss from "../assets/kryss.png";
import vector from "../assets/vector.png";
import peopleIcon from "../assets/peopleIcon.png";
import descriptionIcon from "../assets/descIcon.png";
import clockIcon from "../assets/clockIcon.png";
import switchIcon from "../assets/switch.png";

const Reservation = () => {
  return (
    <>
      <Navbar />
      <div className="reservation">
        <div className="addTitle">
          <a className="vector">
            <img src={vector}></img>
          </a>
          <a className="sendRequest">
            <button className="sendRequestBtn">Send Request</button>
          </a>
          <a className="cross">
            <img src={kryss}></img>
          </a>
          <a>
            <input className="titleInput" placeholder="Add title"></input>
          </a>
          <hr className="borderr1"></hr>
        </div>

        <div className="setTime">
            <img className="clockImgg" src={clockIcon}></img>
            <p className="allDayTxt">All day</p>
            <img className="switch" src={switchIcon}></img>
            <p className="startDate">Thursday, 18 Jan</p>
            <p className="endDate">Thursday, 18 Jan</p>
            <p className="startTime">12:00</p>
            <p className="endTime">16:00</p>
            <hr className="borderr2"></hr>
        </div>

        <div className="addPeople">
            <img className="peopleIcon" src={peopleIcon}></img>
            <input className="addPplInput" placeholder="Add people"></input>
            <hr className="borderr3"></hr>
        </div>

        <div className="addDesc">
            <img className="descIcon" src={descriptionIcon}></img>
            <input className="addDescInput" placeholder="Add description"></input>
            <hr className="borderr4"></hr>
        </div>
      </div>
    </>
  );
};

export default Reservation;
