import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/landingPage";


function App() {



  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<LandingPage />} />
    </Routes>
  </Router>


}

export default App
