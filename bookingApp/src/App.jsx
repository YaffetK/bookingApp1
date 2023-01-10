import { useState } from 'react'
import './index.css'

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {

    try {
      if (email) {
        console.log('Login success')
      }
      fetch()



      displayBoxes()
      console.log('Boxar genereras')
    }
    catch (error) {
      console.error(error)

    }
  }


  return (
    <main>

      <section className=' bg-gray-500 min-h-screen'>


        <nav className=' flex font-bold p-10 border bg-amber-200 mb-2'>
          <ul className=' text-black flex flex-row gap-10 ml-20'>
            <li>Home</li>
            <li>About</li>
            <li className='bg-blue-500 text-black'> <a href='#'>Resume</a></li>
          </ul>
        </nav>

        <h1 className=' font-bold text-center'> Hello World</h1>

        <div className='flex justify-end'>
          <form>
            <div className="login-form-wrapper">

              <div className="input-holder">
                <label htmlFor="email">Email</label>
                <input id="email"
                  type='text'
                  placeholder='JohnDoe@gmail.com'
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  value={email}
                  required
                />
              </div>

              <div className="text-slate-100 text-1xl">
                <label htmlFor="password">Password</label>
                <input id="password"
                  type='password'
                  placeholder='JohnDoe@gmail.com'
                  value={password}
                  onChange={(e) => {
                    setPwd(e.target.value)
                  }}
                  required
                />
              </div>

            </div>
            <button className="bg-blue-200" onClick={handleSubmit} type='submit' >Submit</button>
          </form>
        </div>

      </section>

    </main>
  )
}

export default App
