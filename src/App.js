import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import { LandingPage } from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import { AboutUs } from "./pages/AboutUsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
