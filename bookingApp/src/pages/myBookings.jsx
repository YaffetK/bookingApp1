import React from "react";
import myBookingsCSS from "../style/myBooking.css"
import Navbar from "../components/navbar";
import schedule3 from "../assets/Schedule3.png"
import penIcon from "../assets/penIcon.png"

const MyBookings = () => {
    return (
        <>
        <Navbar />
        <div className="myBookings">
            <div className="pageTitle">
                <p className="titleTxt"> My Bookings</p>
            </div>
            <div className="outerBorder">
                <hr className="tableBorder"></hr>
            </div>
            <div className="table">
                <div className="columns">
                <div className="column1">
                    <p className="listingItemTxt">Listing</p>
                </div>
                <div className="column2">
                    <p className="listingStart">Starts</p>
                </div>
                <div className="column3">
                    <p className="listingEnds">Ends</p>
                </div>
                <div className="column4">
                    <p className="Status">Status</p>
                </div>
                <hr className="columnBorder"></hr>
                </div>
                <div className="row1">
                    <p className="listingTitle" id="listingTitle1">Los Angeles</p>
                    <p className="startsInput"  id="startInput1">1 January 13:00</p>
                    <p className="endsInput"id="endInput1">1 January 15:00</p>
                    <div className="statusBackground" id="statusBackground1"></div>
                    <p className="statusInput"id="statusInput1">Pending</p>
                    <button className="changeBookingBtn"><img className="penIconImg"src={penIcon}></img></button>
                    <button className="cancelBookingBtn">Cancel</button>
                    <hr className="rowBorder1"></hr>
                </div>
                <div className="row2">
                    <p className="listingTitle"id="listingTitle2">Blackmagic</p>
                    <p className="startsInput" id="startsInput2">4 January 13:00</p>
                    <p className="endsInput" id="endInput2">5 January 13:00</p>
                    <div className="statusBackground"id="statusBackground2"></div>
                    <p className="statusInput"id="statusInput2">Accepted</p>
                    <button className="changeBookingBtn"><img className="penIconImg"src={penIcon}></img></button>
                    <button className="cancelBookingBtn">Cancel</button>
                    <hr className="rowBorder2"></hr>
                </div>
                <div className="row3">
                    <p className="listingTitle"id="listingTitle3">Apeture 300D</p>
                    <p className="startsInput"id="startsInput3">2 January 13:00</p>
                    <p className="endsInput"id="endInput3">4 January 13:00</p>
                    <div className="statusBackground"id="statusBackground3"></div>
                    <p className="statusInput"id="statusInput3">Declined</p>
                    <hr className="rowBorder3"></hr>
                </div>
            </div>
            <div>
            <img className="schedulBookings" src={schedule3}></img>
            </div>
        </div>
        </>
    )
}

export default MyBookings;