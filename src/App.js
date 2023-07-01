import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import { LandingPage } from "./pages/LandingPage";
import { AdminPage } from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
