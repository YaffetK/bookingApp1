import React from "react";
import Navbar from "../components/navbar";
import workshopEventCSS from "../style/workshopEvent.css";
import workshopImg from "../assets/workshopImg.png";
import clockIcon from "../assets/clockIcon.png"
import locationIcon from "../assets/locationIcon.png"

const WorkshopEvent = () => {
  return (
    <>
      <Navbar />
      <div className="workshopEvent">
        <div className="pageTitle">
          <p className="eventsTxt">EVENTS</p>
          <p className="subtitlee">Ux Design Workshop</p>
        </div>
        <div className="pageImg">
          <img src={workshopImg}></img>
        </div>
        <div className="eventDesc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </p>
        </div>
        <div className="whenSection">
            <hr className="border1"></hr>
            <img className="clockImg" src={clockIcon}></img>
            <p className="whenTxt">When</p>
            <p className="timeTxt">23.11.29</p>
            <hr className="border2"></hr>
        </div>
        <div className="whereSection">
            <img className="locationImg" src={locationIcon}></img>
            <p className="whereTxt">Where</p>
            <p className="locationTxt">Changers Kista</p>
            <p className="locationTxt2">Arne Beurling Torg 9C</p>
            <hr className="border3"/>
        </div>
        <div>
            <button className="rsvpBtn">RSVP</button>
        </div>
      </div>
    </>
  );
};
export default WorkshopEvent;
