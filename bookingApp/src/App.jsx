import { useState } from 'react'
import './index.css'
import logo from "./assets/react.svg"


function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {

    fetch('//localhost:5432/postgres', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: { email },
        password: { password }

      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(() => console.log('Error'))

  }




  return (
    <main>

      <section className=' bg-gradient-to-r from-lblue to-blue min-h-screen'>


        <nav className=' flex font-bold p-10 border bg-amber-200 mb-2'>
          <ul className=' text-black flex justify-between flex-row gap-10 ml-20 w-screen'>
            <li>Home</li>
            <li>About</li>
            <li className='bg-blue-500 text-black'> <a href='#'>Resume</a></li>
          </ul>
        </nav>

        <div className='flex justify-center m-10'>
          <img src={logo} width={48} height={48} />
        </div>

        <h1 className=' font-bold text-center text-2xl'> We are the innovation</h1>


        <div className="flex justify-center p-20 text-center">
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

            <button className="bg-gray-500 p-5 mt-5" onClick={handleSubmit} type='submit' >Submit</button>
          </form>
        </div>


      </section>

    </main>
  )
}

export default App
