import React from "react";
import searchIcon from "../assets/Union.png"
import videoEquipmentCss from "../style/videoEquipment.css"
import filterIcon from "../assets/filter.png"
import Navbar from "../components/navbar";
import blackmagic from "../assets/blackmagic.png"
import apeture from "../assets/apeture.png"

const VideoEquip = () => {
    return (
        <>
        <Navbar />
        <div className="videoEquip">


            <div className="pageTitlee">
                <p>VIDEO EQUIPMENT</p>
            </div>
            <div className="input">
          <input
            className="inputFieldd"
            placeholder="Video Equipment"
          />
          <img className="searchIcon" src={searchIcon}></img>
          <img
            className="filterIcon"
            src={filterIcon}
          ></img>
        </div>

      <div className="filterMenu" id="dropdownContent">
        <button className="filterOption1">Sound</button>
        <button className="filterOption2">Camera</button>
        <button className="filterOption3">Light</button>
      </div>

      <div className="listing1">
        <img className="listingImg1" src={blackmagic}></img>
        <p className="listingTxt1">Black Magic Pocket 6k</p>
      </div>
      <div className="listing2">
        <img className="listingImg2" src={apeture}></img>
        <p className="listingTxt2">Apeture 300D</p>
      </div>
      
        </div>
        </>


    )
}

export default VideoEquip