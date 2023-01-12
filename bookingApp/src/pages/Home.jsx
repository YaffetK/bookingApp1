import React from "react";
import { useState } from 'react'
import '../../src/index.css'
import logo from "../../src/assets/react.svg"
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";


const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Check async await - read about callback hell
    // ORM = Object Relational Mapping. 
    const handleSubmit = () => {

        fetch('localhost:3000/player', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(() => console.log('Error'))

    }

    return (
        <main>

            <section className='bg-gradient-to-r from-lblue to-blue min-h-screen'>
                <Navbar />

                <div className='flex justify-center m-10'>
                    <img src={logo} width={48} height={48} />
                </div>

                <h1 className=' font-bold text-center text-2xl'> We are the innovation</h1>

                <LoginForm />


            </section>

        </main>
    )
};

export default Home;
