import React from "react";
import Navbar from "../components/Navbar";
import videoequipment from "../assets/videoEquipLP.png";
import landingPageImg from "../assets/Lp.png";
import events from "../assets/eventsLp.png";
import bookings from "../assets/BookingsLp.png";
import premises from "../assets/premisesLp.png";
import searchIcon from "../assets/Union.png";

const LandingPage = () => {
  return (

    <main>
      <Navbar />

      <section className="pl-20 ml-20" id="landingpage">
        <div className="welcomeMessage">
          <p>Welcome User234</p>
        </div>

        <div className="input">
          <input
            className="inputField"
            placeholder="search on..."
          />
          <img className="searchIconnn" src={searchIcon}></img>
        </div>

        <div className="filterMenu" id="dropdownContent">
          <button className="filterOptionnn1" />
          <button className="filterOptionnn2" />
          <button className="filterOptionnn3" />
        </div>

        <div className="dashboard">
          <div className="videoEquipment">
            <a className="videoequipImg">
              <img src={videoequipment}></img>
            </a>
            <p className="videoEquipTitle">VIDEO EQUIPMENT</p>
          </div>

          <div className="bookings" >
            <a className="bookingsImg">
              <img src={bookings}></img>
            </a>
            <p className="bookingsTitle">MY BOOKINGS</p>
            <p className="bookingsSubTitle">Thur, 23 Jan</p>
          </div>
          <div className="premises">
            <a className="premisesImg">
              <img src={premises}></img>
            </a>
            <p className="premisesTitle">PREMISES</p>
          </div>
          <div className="events">
            <a className="eventsImg">
              <img src={events}></img>
            </a>
            <p className="eventsTitle">EVENTS</p>
          </div>
          <a className="landingPageImg">
            <img src={landingPageImg}></img>
          </a>
        </div>
      </section>
    </main>

  );
};

export default LandingPage;
