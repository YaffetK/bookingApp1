
import './index.css'

function App() {


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

      </section>

    </main>
  )
}

export default App
