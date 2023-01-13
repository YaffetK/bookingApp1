import React from "react";
import blackMagicCSS from "../style/blackMagic.css";
import blackMagic1 from "../assets/bm1.png";
import blackMagic2 from "../assets/bm2.png";
import blackMagic3 from "../assets/bm3.png";
import blackMagic4 from "../assets/bm4.png";
import blackMagic5 from "../assets/bm5.png";
import schedule from "../assets/Schedule2.png";
import checkbox from "../assets/checkbox.png"
import Navbar from "../components/navbar";

const BlackMagic = () => {
  return (
    <>
    <Navbar />
    <div className="blackMagic">
      <div className="pageTitle">
        <p className="VideoEquipTxt">Video Equipment</p>
        <p className="subtitle">
          Blackmagic Design Pocket Cinema Camera 6K Pro
        </p>
      </div>
      <div className="previewImg">
        <img className="bmImg1" src={blackMagic1}></img>
        <img className="bmImg2" src={blackMagic2}></img>
        <img className="bmImg3" src={blackMagic3}></img>
        <img className="bmImg4" src={blackMagic4}></img>
        <img className="bmImg5" src={blackMagic5}></img>
        <hr className="currentImgBorder"></hr>
      </div>
      <div className="listingDesc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad.
        </p>
      </div>
      <div className="schedule">
        <img className="scheduleImg" src={schedule}></img>
      </div>
      <div className="terms">
        <hr className="checkbox"></hr>
        <p className="termsTxt">I agree to Changers hub Terms and Conditions</p>
      </div>
      <div className="reserv">
        <button className="reservationBtn">Make Reservation</button>
      </div>
    </div>
    </>
  );
};

export default BlackMagic;
