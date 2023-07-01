import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import { LandingPage } from "./components/LandingPage";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
