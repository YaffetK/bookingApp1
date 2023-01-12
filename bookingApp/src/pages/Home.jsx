import { useState } from 'react'
import '../../src/index.css'
import logo from "../../src/assets/react.svg"


function Home() {


    const handleSubmit = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '/localhost:5432/postgres')
        request.send()

        request.addEventListener('load', () => {
            const data = JSON.parse(this.responeText)
            console.log(data)
        })
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    return (
        <main>

            <section className=' bg-gradient-to-r from-lblue to-blue min-h-screen'>

                console.log("Hello");

                <div className='flex justify-center m-10'>
                    <img src={logo} width={48} height={48} />
                </div>

                <h1 className=' font-bold text-center text-2xl'> We are the innovation</h1>


                <div className="flex justify-center p-20 text-center">
                    <form className='flex flex-col justify-center bg-grays p-20' method='post'>

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

export default Home
