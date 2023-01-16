import React from "react";
import { useState } from 'react'
import '../../src/index.css'
import logo from "../../src/assets/mugiwara.png"
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import axios from "axios";


const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Check async await - read about callback hell
    // ORM = Object Relational Mapping. 
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get("localhost:3000/player").then(res => {
            console.log(res.data)
        })


    }

    return (
        <main>

            <section className='bg-gradient-to-r from-lblue to-blue min-h-screen'>
                <Navbar />

                <div className='flex justify-center m-10'>

                    <img src={logo} width={80} height={80} />

                </div>

                <h1 className=' font-bold text-center text-2xl'> We are the innovation</h1>

                <LoginForm />


            </section>

        </main>
    )
};

export default Home;
