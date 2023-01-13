import '../src/index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import PageError from './pages/PageError'
import Register from './pages/Register'


function App() {

  return (

    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<PageError />} />


      </Routes>

    </Router>
  )
}

export default App
