import React from "react";
import eventsCSS from "../style/events.css";
import Navbar from "../components/navbar";
import eventImg1 from "../assets/events1.png";
import eventImg2 from "../assets/events2.png";
import eventImg3 from "../assets/events3.png";

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="events">
        <div className="pageTitle">
          <p>Events</p>
        </div>
        <div className="pageDashboard">
          <div className="row1">
            <img className="img1"src={eventImg1}></img>
            <img className="img2"src={eventImg2}></img>
            
            <div className="rsvp1">
            <a className="rsvpBackground"></a>
            <p className="rsvpTxt1">RSVP</p>
            </div>
            <div className="rsvp2">
            <a className="rsvpBackground"></a>
            <p className="rsvpTxt2">RSVP</p>
          </div>
          </div>
          <div className="row2">
            <img className="img3" src={eventImg3}></img>
            <div className="rsvp3">
              <a className="rsvpBackground"></a>
              <p className="rsvpTxt3">RSVP</p>
              </div>
          </div>
          <div className="row3">
            <img className="img1" src={eventImg1}></img>
            <img className="img2" src={eventImg2}></img>
            <div className="rsvp4">
              <a className="rsvpBackground"></a>
              <p className="rsvpTxt4">RSVP</p>
              </div>
              <div className="rsvp5">
              <a className="rsvpBackground"></a>
              <p className="rsvpTxt5">RSVP</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Events;
