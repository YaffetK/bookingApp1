import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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

    <div className="flex justify-center p-20 text-center ">
      <form className='flex flex-col justify-center bg-grays p-20'>

        <div className="mb-1">
          <label htmlFor="email">Email:</label>
          <input
            className='p-3'
            id="email"
            type='text'
            placeholder='Enter Email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
            required
          />
        </div>

        <div className=" ">
          <label htmlFor="password">Password:</label>
          <input
            className=' p-3'
            id="password"
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
          />
        </div>

        <button className="bg-gray-500 p-5 my-5 hover:bg-red-200" onClick={handleSubmit} type='submit' >Submit</button>

        <div className=" bg-white rounded-full p-5">

          <p>Don´t have an account?</p>
          <div className="flex justify-center">
            <p className="hover:bg-yellow-500 text-blue rounded-lg w-20"><Link to="/register">Register</Link></p>
          </div>
        </div>

      </form>
    </div>
  )
};

export default LoginForm;
