import '../src/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {

  return (

    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/*' element={<PageError />} />


      </Routes>

    </Router>
  )
}

export default App
