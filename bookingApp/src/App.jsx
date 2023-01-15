import '../src/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Premises from './pages/premises'



function App() {

  return (

    <Router>

      <Routes>
        <Route path="/" element={<Premises />} />

      </Routes>

    </Router>
  )
}

export default App
