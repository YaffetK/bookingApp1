import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/react.svg"

const About = () => {

    return (
        <main>
            <Navbar />

            <section className="bg-lblue min-h-screen">
                <h1 className="text-5xl text-center text-blue">We are the future we are the innovation</h1>

                <img className="align-center bg-red" src={logo} width={48} height={48}></img>

            </section>
        </main>
    )
};

export default About;
